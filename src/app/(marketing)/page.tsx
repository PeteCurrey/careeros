import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LifetimeTimeline } from '@/components/ui/LifetimeTimeline';
import { AudienceCard } from '@/components/ui/AudienceCard';
import { ProductEngineCard } from '@/components/ui/ProductEngineCard';
import {
  GraduationCap,
  Briefcase,
  School,
  Building2,
  Cpu,
  UserCheck,
  Award,
  Network,
  Compass,
  ArrowRight,
  ShieldCheck,
  Eye,
  Lock,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-pattern section-padding-lg border-b border-[var(--color-border-default)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="brand" size="md">
                Infrastructure for your working life
              </Badge>
              <span className="text-xs text-[var(--color-text-tertiary)] hidden sm:inline">
                Free for individuals &bull; Built on verified evidence
              </span>
            </div>

            <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
              Your career needs more than advice.{' '}
              <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] block sm:inline">
                It needs an operating system.
              </span>
            </h1>

            <p className="text-body-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              A personal Career OS that understands who you are, where you want to go, and what it takes to get there — from education and apprenticeships through advancement, career reinvention, and leadership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href={ROUTES.SIGNUP} variant="primary" size="lg" className="w-full sm:w-auto">
                Start Your Career (Free)
              </Button>
              <Button href={ROUTES.PRODUCT} variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore the Architecture
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-tertiary)]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]" />
                Zero advertising sales of private data
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]" />
                Explainable recommendation factors
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]" />
                Granular field-level privacy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section — What Career OS Is and Is Not */}
      <section className="section-padding border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Category Definition"
            heading="Built as infrastructure, not another careers chatbot."
            description="Most career platforms are transactional — used only during sudden unemployment or built around static keyword filtering. Career OS is persistent professional infrastructure that compounds with you over decades."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6">
            <Card className="p-7 space-y-4 border-l-4 border-l-[var(--color-brand-600)]">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                What Career OS Is
              </h3>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-bold">&bull;</span>
                  <span><strong>A lifelong operating system</strong> that stays with you across education, career pivots, and leadership.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-bold">&bull;</span>
                  <span><strong>Multi-dimensional Career Twin</strong> modeling verified skills, real project evidence, and genuine work preferences.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-bold">&bull;</span>
                  <span><strong>Responsible decision support</strong> with auditable recommendation factors and full human agency.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] font-bold">&bull;</span>
                  <span><strong>Equal pathway parity</strong> across college, university, technical trades, and apprenticeships.</span>
                </li>
              </ul>
            </Card>

            <Card className="p-7 space-y-4 border-l-4 border-l-[var(--color-border-strong)]">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                What We Are Not
              </h3>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-danger)] font-bold">&times;</span>
                  <span><strong>Not a standard vacancy board</strong> forcing hundreds of résumé uploads against keyword filters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-danger)] font-bold">&times;</span>
                  <span><strong>Not a social-media network</strong> driving vanity engagement metrics or follower counts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-danger)] font-bold">&times;</span>
                  <span><strong>Not a toy AI chat companion</strong> dispensing generic superficial advice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-danger)] font-bold">&times;</span>
                  <span><strong>Not a school-only silo</strong> that vanishes the moment a student completes graduation.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifetime Career Journey Visualizer */}
      <section className="section-padding border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)]">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Lifetime Model"
            heading="Six phases of working life. One persistent operating system."
            description="The product does not disappear after you secure your first position. It structures your evidence, supports lateral transitions, and enables strategic reinvention."
            align="center"
          />
          <LifetimeTimeline />
        </div>
      </section>

      {/* Four Differentiated Audiences */}
      <section className="section-padding border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Ecosystem Audiences"
            heading="Purpose-built for every stakeholder in the career continuum."
            description="From high schools providing equitable pathway discovery to employers executing responsible talent matching without keyword black-boxes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <AudienceCard
              audience="high-schools"
              title="High Schools & Districts"
              description="Empower career counsellors, safeguard student privacy under FERPA/COPPA principles, and support university, college, trade, and apprenticeship pathways equally."
              href={ROUTES.FOR_HIGH_SCHOOLS}
              icon={School}
              cta="Explore for Schools"
            />
            <AudienceCard
              audience="students"
              title="Students & Starters"
              description="Discover suited pathways, build a verifiable skills record through real projects, and carry your Career OS beyond graduation into the workforce."
              href={ROUTES.FOR_STUDENTS}
              icon={GraduationCap}
              cta="Explore for Students"
            />
            <AudienceCard
              audience="professionals"
              title="Professionals & Leaders"
              description="Compound your skills, navigate compensation trajectory, execute lateral industry pivots, or prepare for entrepreneurship and international mobility."
              href={ROUTES.FOR_PROFESSIONALS}
              icon={Briefcase}
              cta="Explore for Professionals"
            />
            <AudienceCard
              audience="employers"
              title="Employers & Teams"
              description="Intelligent talent discovery based on demonstrated competence and mutual alignment, powered by explainable Employer Agent decision support."
              href={ROUTES.FOR_EMPLOYERS}
              icon={Building2}
              cta="Explore Employer Agent"
            />
          </div>
        </div>
      </section>

      {/* Core OS Engines */}
      <section className="section-padding border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Platform Architecture"
            heading="The structural engines powering Career OS."
            description="Explore the interconnected subsystems designed to support professional discovery, evidence portability, and ethical matching."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <ProductEngineCard
              title="AI Career Mentor"
              description="A system-assigned lifelong mentor that understands your history, development milestones, and goals with full recommendation provenance."
              href={ROUTES.PRODUCT_AI_CAREER_MENTOR}
              status="available"
              icon={Cpu}
            />
            <ProductEngineCard
              title="Career Twin"
              description="A multi-dimensional structured model of your professional self — spanning skills, verified evidence, strengths, and work preferences with granular privacy."
              href={ROUTES.PRODUCT_CAREER_TWIN}
              status="available"
              icon={UserCheck}
            />
            <ProductEngineCard
              title="Career Passport"
              description="A portable, verifiable record of qualifications, achievements, and capabilities that you own and control independently of any employer."
              href={ROUTES.PRODUCT_CAREER_PASSPORT}
              status="available"
              icon={Award}
            />
            <ProductEngineCard
              title="Career Graph"
              description="A dynamic graph connecting roles, industries, skills taxonomies, and non-linear transitions to illuminate viable progression pathways."
              href={ROUTES.PRODUCT_CAREER_GRAPH}
              status="available"
              icon={Compass}
            />
            <ProductEngineCard
              title="Opportunity Agent"
              description="Proactive career intelligence built around the principle: 'Your career agent will find you' — matching opportunities to your verified parameters."
              href={ROUTES.PRODUCT_OPPORTUNITY_AGENT}
              status="future-vision"
              icon={Compass}
            />
            <ProductEngineCard
              title="Employer Agent"
              description="Talent discovery and structured candidate-role matching for employers, anchored in transparency, fairness, and human oversight."
              href={ROUTES.PRODUCT_EMPLOYER_AGENT}
              status="future-vision"
              icon={Building2}
            />
          </div>

          <div className="pt-10 text-center">
            <Button href={ROUTES.PRODUCT} variant="outline" size="md">
              View Complete System Architecture <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Privacy Callout */}
      <section className="section-padding bg-[var(--color-surface-base)]">
        <div className="container-site">
          <Card className="p-8 sm:p-12 border-[var(--color-brand-200)] dark:border-[var(--color-brand-900)] bg-[var(--color-surface-raised)] relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-eyebrow font-mono uppercase text-xs text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                Trust & Governance
              </span>
              <h2 className="text-headline font-bold text-[var(--color-text-primary)]">
                Consequential career data requires uncompromising ethical boundaries.
              </h2>
              <p className="text-body text-[var(--color-text-secondary)] leading-relaxed">
                Career OS will never sell private Career Twin information or student records to third-party advertisers. Information is never disclosed to employers without an explicit permission basis. All AI recommendations surface decision factors and model provenance, preserving human agency at every step.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button href={ROUTES.TRUST_RESPONSIBLE_AI} variant="secondary" size="md">
                  Responsible AI Architecture
                </Button>
                <Button href={ROUTES.TRUST} variant="ghost" size="md">
                  Visit Trust Centre
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
