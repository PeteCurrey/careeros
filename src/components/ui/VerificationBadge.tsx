import React from 'react';
import { Badge, BadgeVariant } from './Badge';

export type VerificationState =
  | 'SELF_DECLARED'
  | 'EVIDENCE_ATTACHED'
  | 'PLATFORM_ASSESSED'
  | 'THIRD_PARTY_VERIFIED'
  | 'ISSUER_VERIFIED'
  | 'EMPLOYER_VERIFIED'
  | 'EXPIRED'
  | 'REVOKED'
  | 'DISPUTED';

interface VerificationBadgeProps {
  state: VerificationState;
  className?: string;
}

const stateConfig: Record<
  VerificationState,
  { label: string; variant: BadgeVariant; description: string }
> = {
  SELF_DECLARED: {
    label: 'Self-Declared',
    variant: 'default',
    description: 'Claimed by individual, pending verification',
  },
  EVIDENCE_ATTACHED: {
    label: 'Evidence Attached',
    variant: 'info',
    description: 'Supported by work artifact, code, or documentation',
  },
  PLATFORM_ASSESSED: {
    label: 'Platform Assessed',
    variant: 'brand',
    description: 'Evaluated against structured framework benchmarks',
  },
  THIRD_PARTY_VERIFIED: {
    label: 'Third-Party Verified',
    variant: 'success',
    description: 'Validated by external assessment partner',
  },
  ISSUER_VERIFIED: {
    label: 'Issuer Verified',
    variant: 'verified',
    description: 'Directly verified by the granting educational or credential institution',
  },
  EMPLOYER_VERIFIED: {
    label: 'Employer Verified',
    variant: 'success',
    description: 'Confirmed by verifiable organisation or manager',
  },
  EXPIRED: {
    label: 'Expired',
    variant: 'warning',
    description: 'Credential validity period has elapsed',
  },
  REVOKED: {
    label: 'Revoked',
    variant: 'danger',
    description: 'Credential was retracted by issuer',
  },
  DISPUTED: {
    label: 'Under Review',
    variant: 'warning',
    description: 'Verification status is being re-evaluated',
  },
};

export function VerificationBadge({ state, className }: VerificationBadgeProps) {
  const config = stateConfig[state];
  return (
    <Badge variant={config.variant} size="sm" className={className} title={config.description}>
      {config.label}
    </Badge>
  );
}
