import React from 'react';
import { ROUTES } from '@/lib/routes';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { School, ShieldCheck, Award, Users, BookOpen, Lock, ArrowRight } from 'lucide-react';

export default function ForHighSchoolsPage() {
  return (
    <div className="section-padding">
      <div className="container-site space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="md">
            Educational Institutions & Districts
          </Badge>
          <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
            High Schools: Equal pathways, student safety, and lifelong readiness.
          </h1>
          <p className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
            Give every young person access to high-quality personalised career development while enabling schools and districts to understand student engagement, pathway readiness, and long-term outcomes without compromising privacy.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
              Become a Launch School
            </Button>
            <Button href={ROUTES.TRUST_SAFEGUARDING} variant="secondary" size="md">
              Student Safety Architecture
            </Button>
          </div>
        </div>

        {/* Pathway Parity Pillar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Non-Hierarchical Pathways
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              University is not positioned as the sole definition of success. Career OS provides equal standing, discovery, and capability tracking for 4-year degrees, community colleges, vocational routes, registered apprenticeships, technical trades, direct employment, and entrepreneurship.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Safeguarding & Minor Controls
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Engineered with FERPA and COPPA principles at the core. Full support for age bands, institutional consent workflows, parent/guardian relationships, and strict student visibility restrictions preventing unsolicited commercial access.
            </p>
          </Card>

          <Card className="p-7 space-y-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-950)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
              Counsellor & District Intelligence
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Amplify career counsellors with actionable cohort insights, pathway distribution analysis, and readiness indicators, eliminating administrative friction so educators can focus on meaningful 1-on-1 human guidance.
            </p>
          </Card>
        </div>

        {/* Institutional Features */}
        <div className="border-t border-[var(--color-border-default)] pt-12">
          <SectionHeading
            eyebrow="Capabilities"
            heading="Designed for educators, administrators, and student success."
            description="Career OS provides educational institutions with modern infrastructure that stays with students as they transition into higher education or the workforce."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h4 className="text-base font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--color-brand-600)]" />
                Curricular & Project Evidence
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Students translate coursework, technical certifications, and capstone projects into verifiable evidence records in their portable Career Passport, replacing self-reported bullet points with tangible demonstrations of skill.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[var(--color-brand-600)]" />
                Institutional Data Sovereignty
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Schools retain full administrative governance over institutional workspaces. Student data is never commingled with advertising networks or monetized without consent.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="p-8 sm:p-12 bg-[var(--color-surface-sunken)] border-[var(--color-border-default)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
              Partner with Career OS as a launch school
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              We are working closely with pioneering school districts to deploy next-generation career infrastructure.
            </p>
          </div>
          <Button href={ROUTES.COMPANY_CONTACT} variant="primary" size="md">
            Talk to Our Education Team <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
