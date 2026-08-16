import React from 'react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Mail, Globe, MessageSquare, Building2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-12">
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="md">Contact</Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            Get in touch.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Whether you are a school district exploring partnership, an employer interested in the Employer Agent, a member of the press, or a user with a question — reach the right team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <Card className="p-7 space-y-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              School & District Enquiries
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Explore partnership, data protection agreements, and institutional access.
            </p>
            <a href="mailto:schools@career-os.com" className="text-sm font-semibold text-[var(--color-brand-600)] hover:underline">
              schools@career-os.com
            </a>
          </Card>

          <Card className="p-7 space-y-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Enterprise & Employer Enquiries
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Employer Agent access, workspace setup, and talent partnership discussions.
            </p>
            <a href="mailto:enterprise@career-os.com" className="text-sm font-semibold text-[var(--color-brand-600)] hover:underline">
              enterprise@career-os.com
            </a>
          </Card>

          <Card className="p-7 space-y-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Press & Media
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Press releases, embargoed briefings, and media access requests.
            </p>
            <a href="mailto:press@career-os.com" className="text-sm font-semibold text-[var(--color-brand-600)] hover:underline">
              press@career-os.com
            </a>
          </Card>

          <Card className="p-7 space-y-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              General Enquiries
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Platform questions, legal enquiries, accessibility feedback, and partnership ideas.
            </p>
            <a href="mailto:hello@career-os.com" className="text-sm font-semibold text-[var(--color-brand-600)] hover:underline">
              hello@career-os.com
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
