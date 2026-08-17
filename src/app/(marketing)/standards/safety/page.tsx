import React from 'react';
import { EditorialSubpage } from '@/components/layout/EditorialSubpage';
import { ROUTES } from '@/lib/routes';

export default function StandardsSafetyPage() {
  return (
    <EditorialSubpage
      badge="STANDARDS &bull; SAFETY"
      title="Platform Safety & Incident Response"
      description="Protocols for reporting harmful content, responding to safety incidents, and maintaining a secure environment for all users."
      breadcrumbs={[
        { label: 'Home', href: ROUTES.HOME },
        { label: 'Standards', href: ROUTES.STANDARDS },
        { label: 'Safety', href: ROUTES.STANDARDS_SAFETY },
      ]}
      lastUpdated="August 2026"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Zero Tolerance for Harm</h2>
        <p>
          Career OS operates a 24/7 trust and safety function dedicated to maintaining a professional, secure environment for every participant — from high school students to senior executives.
        </p>

        <h3 className="text-lg font-bold text-[var(--color-text-primary)] pt-4">Safety Mechanisms</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>In-Platform Reporting:</strong> One-click report flow for harassment, fraudulent listings, and inappropriate contact.</li>
          <li><strong>Response SLA:</strong> Safety incidents reviewed within 24 hours; critical safeguarding issues escalated within 4 hours.</li>
          <li><strong>Proactive Monitoring:</strong> Automated semantic screening for predatory recruitment patterns and unsolicited commercial contact.</li>
        </ul>
      </div>
    </EditorialSubpage>
  );
}
