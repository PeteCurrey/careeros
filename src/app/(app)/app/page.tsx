import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { getApplicationAccessState } from "@/lib/auth/access-guard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Cpu, UserCheck, Award, Compass, Network, Settings, ShieldCheck, Sparkles } from "lucide-react";

export default async function AppDashboardPage() {
  const accessState = await getApplicationAccessState();

  // If user is not yet fully onboarded, redirect immediately to /app/onboarding
  if (!accessState.onboardingComplete) {
    redirect(accessState.redirectUrl || ROUTES.APP_ONBOARDING);
  }

  return (
    <div className="section-padding">
      <div className="container-site space-y-10">
        {/* Welcome Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="accent-blue-dot accent-blue-dot-pulse" />
            <p className="text-eyebrow font-mono uppercase text-xs">Career OS Core</p>
            <Badge variant="verified" size="sm">ACTIVE & SECURED</Badge>
          </div>
          <h1 className="text-headline font-bold tracking-tight text-[var(--color-text-primary)]">
            Your Career Operating System
          </h1>
          <p className="text-body text-[var(--color-text-secondary)]">
            Persistent intelligence, verified credentials, and strategic momentum across your entire working journey.
          </p>
        </div>

        {/* Platform Systems Grid */}
        <div>
          <h2 className="text-base font-bold text-[var(--color-text-primary)] mb-4">Core Platform Systems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Career Twin", icon: UserCheck, status: "INITIALIZED", href: ROUTES.PRODUCT_CAREER_TWIN },
              { title: "AI Career Mentor", icon: Cpu, status: "ASSIGNED", href: ROUTES.PRODUCT_AI_CAREER_MENTOR },
              { title: "Career Passport", icon: Award, status: "VAULT ACTIVE", href: ROUTES.PRODUCT_CAREER_PASSPORT },
              { title: "Career Graph", icon: Compass, status: "SEED MAPPED", href: ROUTES.PRODUCT_CAREER_GRAPH },
              { title: "Opportunity Agent", icon: Compass, status: "MONITORING", href: ROUTES.PRODUCT_OPPORTUNITY_AGENT },
              { title: "Career Network", icon: Network, status: "PRIVATE", href: ROUTES.PRODUCT_CAREER_NETWORK },
            ].map((engine) => {
              const Icon = engine.icon;
              return (
                <Card key={engine.title} className="p-5 flex items-center gap-4 border-[var(--color-border-default)] hover:border-[#2F8FFF]/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-surface-interactive)] text-[#2F8FFF] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{engine.title}</p>
                    <p className="text-xs font-mono text-[#34D399]">{engine.status}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 text-sm pt-4 border-t border-[var(--color-border-default)]">
          <Link
            href={ROUTES.APP_SETTINGS_ACCOUNT}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-xs font-medium"
          >
            <Settings className="w-3.5 h-3.5" />
            Account Settings
          </Link>
          <Link
            href={ROUTES.APP_SETTINGS_PRIVACY}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-xs font-medium"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
            Privacy Controls
          </Link>
        </div>
      </div>
    </div>
  );
}
