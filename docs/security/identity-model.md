# CareerOS Identity & Progressive Security Architecture

## 1. Identity & Assurance Model

CareerOS decouples the physical authentication provider from the application-level Person Profile and its **Security Assurance Level**.

```
[ Unauthenticated Visitor ]
        ↓
[ Screen 1: Email + DOB + Consent ]
        ↓
[ Screen 2: 6-Digit Email OTP ]
        ↓
[ Security Assurance: EMAIL_VERIFIED ] ──→ Permitted: Class 0 (Public) & Class 1 (Basic Onboarding)
        ↓
[ Security Gate: Passkey / Password Setup ]
        ↓
[ Security Assurance: SECURED ]        ──→ Permitted: Class 2 (Career Data), Class 3 (Sensitive), Class 4 (Media)
        ↓
[ Sensitive Action Re-auth ]
        ↓
[ Security Assurance: STEPPED_UP ]     ──→ Permitted: High-Risk Operations (< 15 min window)
```

---

## 2. Security Assurance Levels

| Assurance Level | Authentication Required | Accessible Data Classes | Allowed Actions |
|---|---|---|---|
| `EMAIL_VERIFIED` | 6-digit email OTP | Class 0 (Public), Class 1 (Basic) | Exploration, broad stage onboarding, profile naming |
| `SECURED` | Passkey (Face ID/Touch ID/Hello) or Password + MFA | Class 2, Class 3, Class 4 | Career Twin, CV upload, Mentor chats, Passport vault |
| `STEPPED_UP` | Active re-authentication (< 15 min) | All classes | Email change, DOB update, credential removal, account deletion |

---

## 3. Data Classification Framework

- **Class 0 — Public / Anonymous**: Public taxonomy, pathway maps, articles, events directory.
- **Class 1 — Basic Account**: Email address, account display name, broad career stage, broad industry interests.
- **Class 2 — Personal Career Data**: CV/resume files, employment history, detailed education transcripts, active applications.
- **Class 3 — Sensitive Career Intelligence**: Private AI Mentor conversations, diagnostic assessments, compensation benchmarks, Career Twin parameters.
- **Class 4 — High-Sensitivity Media**: Video mock interview recordings, audio voice coaching files, raw interview transcripts.

---

## 4. Youth Account Policy (Ages 13–17)

- **Ages 16–17**: Direct account eligible under CareerOS policy, operating under mandatory minor safeguarding defaults (default private, zero public discoverability, restricted employer contact).
- **Ages 13–15**: Gated behind verified guardian consent or verified school institutional account.
- **Under 13**: Hard blocked from self-service consumer registration under COPPA regulations.

---

## 5. Passkey-First Standard

- Passkeys are implemented using standard W3C WebAuthn APIs (`navigator.credentials.create` and `navigator.credentials.get`).
- Credentials are stored in `public.user_passkeys` with public key and sign counter validation.
- Returning users default to "Continue with Passkey" with email OTP and password fallback options.

---

## 6. Staff & Administrative Boundaries

- `/admin` authentication is completely isolated on a dedicated security boundary (`__Host-careeros-admin-session`).
- Staff never have access to user passwords or unredacted minor conversational transcripts without explicit legal compliance workflows.
