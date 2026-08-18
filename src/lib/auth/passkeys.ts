import crypto from "crypto";
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
  VerifiedRegistrationResponse,
  VerifiedAuthenticationResponse,
} from "@simplewebauthn/server";
import { createAdminClient } from "@/lib/supabase/server";
import { UserPasskey } from "@/types/platform/identity";

export function getRPConfig() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  let rpID = "localhost";
  let origin = appUrl;
  try {
    const parsed = new URL(appUrl);
    rpID = parsed.hostname;
    origin = parsed.origin;
  } catch {
    // fallback to localhost
  }
  return {
    rpName: "Career OS",
    rpID,
    origin,
  };
}

export async function createRealRegistrationOptions(user: {
  id: string;
  email: string;
  displayName?: string;
}) {
  const { rpName, rpID } = getRPConfig();
  const passkeys = await getProfilePasskeys(user.id);

  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userID: new Uint8Array(Buffer.from(user.id)),
    userName: user.email,
    userDisplayName: user.displayName || user.email.split("@")[0],
    attestationType: "none",
    excludeCredentials: passkeys.map((p) => ({
      id: p.credential_id,
      transports: p.transports as any,
    })),
    authenticatorSelection: {
      residentKey: "preferred",
      userVerification: "preferred",
      authenticatorAttachment: "platform",
    },
  });

  return options;
}

export async function verifyRealRegistrationResponse(
  body: any,
  expectedChallenge: string
): Promise<VerifiedRegistrationResponse> {
  const { rpID, origin } = getRPConfig();

  const verification = await verifyRegistrationResponse({
    response: body,
    expectedChallenge,
    expectedOrigin: origin,
    expectedRPID: rpID,
    requireUserVerification: false,
  });

  return verification;
}

export async function createRealAuthenticationOptions(allowCredentialIds?: string[]) {
  const { rpID } = getRPConfig();

  const options = await generateAuthenticationOptions({
    rpID,
    userVerification: "preferred",
    allowCredentials: allowCredentialIds?.map((id) => ({
      id,
      transports: ["internal", "hybrid", "usb", "nfc", "ble"] as any,
    })),
  });

  return options;
}

export async function verifyRealAuthenticationResponse(
  body: any,
  expectedChallenge: string,
  passkey: UserPasskey
): Promise<VerifiedAuthenticationResponse> {
  const { rpID, origin } = getRPConfig();

  const verification = await verifyAuthenticationResponse({
    response: body,
    expectedChallenge,
    expectedOrigin: origin,
    expectedRPID: rpID,
    credential: {
      id: passkey.credential_id,
      publicKey: Buffer.from(passkey.public_key, "base64"),
      counter: passkey.counter,
      transports: passkey.transports as any,
    },
    requireUserVerification: false,
  });

  return verification;
}

export async function getProfilePasskeys(profileId: string): Promise<UserPasskey[]> {
  try {
    const adminDb = createAdminClient();
    const { data, error } = await adminDb
      .from("user_passkeys")
      .select("*")
      .eq("profile_id", profileId)
      .order("created_at", { ascending: false });

    if (error || !data) return [];
    return data as UserPasskey[];
  } catch {
    return [];
  }
}

export async function recordUserSecurityEvent(event: {
  profileId: string;
  eventType: string;
  success?: boolean;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}) {
  try {
    const adminDb = createAdminClient();
    const ipHash = event.ipAddress
      ? crypto.createHash("sha256").update(event.ipAddress).digest("hex").substring(0, 16)
      : null;
    const uaHash = event.userAgent
      ? crypto.createHash("sha256").update(event.userAgent).digest("hex").substring(0, 16)
      : null;

    await adminDb.from("user_security_events").insert({
      profile_id: event.profileId,
      event_type: event.eventType,
      success: event.success !== undefined ? event.success : true,
      ip_address_hash: ipHash,
      user_agent_hash: uaHash,
      metadata: event.metadata || {},
    });
  } catch (err) {
    console.error("Failed to record user security event:", err);
  }
}

export function generateWebAuthnChallenge(): string {
  return crypto.randomBytes(32).toString("base64url");
}

export function createPasskeyRegistrationOptions(
  user: { id: string; email: string; displayName?: string },
  challenge: string
) {
  const { rpName, rpID } = getRPConfig();
  return {
    challenge,
    rp: { name: rpName, id: rpID },
    user: {
      id: Buffer.from(user.id).toString("base64url"),
      name: user.email,
      displayName: user.displayName || user.email.split("@")[0],
    },
    pubKeyCredParams: [
      { alg: -7, type: "public-key" as const },
      { alg: -257, type: "public-key" as const },
    ],
    timeout: 60000,
    attestation: "none" as const,
    authenticatorSelection: {
      userVerification: "required" as const,
      residentKey: "preferred" as const,
    },
  };
}
