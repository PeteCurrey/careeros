import React from 'react';
import { LegalPage } from '@/components/layout/LegalPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legal | Career OS",
  description: "Career OS Legal. Verified evidence, persistent career intelligence, and absolute privacy.",
  alternates: {
    canonical: "https://career-os.com/legal",
  },
};

export default function Page() {
  return (
    <LegalPage
      title="Legal Document"
      subtitle="Full document coming soon. Contact legal@career-os.com for current version."
      effectiveDate="1 September 2026"
    >
      <section>
        <h2>Document In Preparation</h2>
        <p>This legal document is being finalised by our legal team. Please contact legal@career-os.com to request the current version applicable to your organisation or use case.</p>
      </section>
    </LegalPage>
  );
}
