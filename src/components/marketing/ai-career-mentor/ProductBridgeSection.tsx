import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Cpu, FileCheck, Network, Sparkles, ArrowRight } from 'lucide-react';

export function ProductBridgeSection() {
  return (
    <section className="section-editorial border-b border-[var(--color-border-default)] bg-[var(--color-surface-sunken)] text-[var(--color-text-primary)]">
      <div className="container-editorial space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="section-label">SYSTEM CONTEXT MULTIPLIER</span>
          <h2 className="text-display-section font-serif font-normal text-[var(--color-text-primary)] tracking-tight">
            Why this becomes more powerful inside Career OS.
          </h2>
          <p className="text-lead text-[var(--color-text-secondary)] leading-relaxed">
            In this demonstration, you saw how an illustrative Mentor turns an initial question into
            deliberate guidance. Inside Career OS, the Mentor is designed to coordinate with your structured
            professional context rather than relying on isolated prompts.
          </p>
        </div>

        {/* 3 Horizontal Subsystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Career Twin */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 shadow-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] flex items-center justify-center border border-[var(--color-border-default)]">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                  CONTEXT LAYER
                </span>
                <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
                  Career Twin
                </h3>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Represents your structured professional context—active development goals, preferred
                working environments, compensation parameters, and practical constraints.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href={ROUTES.PRODUCT_CAREER_TWIN}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-text-primary)] hover:text-[var(--color-taupe-700)] transition-colors underline underline-offset-4"
              >
                <span>Explore Career Twin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Career Passport */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 shadow-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] flex items-center justify-center border border-[var(--color-border-default)]">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                  PROOF LAYER
                </span>
                <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
                  Career Passport
                </h3>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Maintains structured evidence records—linking actual project artifacts, completed coursework,
                and institutional credentials to relevant career claims.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href={ROUTES.PRODUCT_CAREER_PASSPORT}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-text-primary)] hover:text-[var(--color-taupe-700)] transition-colors underline underline-offset-4"
              >
                <span>See Career Passport</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Career Graph */}
          <div className="p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] space-y-4 shadow-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-[var(--color-surface-warm)] text-[var(--color-text-primary)] flex items-center justify-center border border-[var(--color-border-default)]">
                <Network className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-[var(--color-taupe-700)] uppercase tracking-wider block">
                  PATHWAYS LAYER
                </span>
                <h3 className="font-serif font-bold text-lg text-[var(--color-text-primary)]">
                  Career Graph
                </h3>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Career Graph is being designed to connect career context with roles, skills, pathways
                and relevant labour-market intelligence.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href={ROUTES.PRODUCT_CAREER_GRAPH}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-text-primary)] hover:text-[var(--color-taupe-700)] transition-colors underline underline-offset-4"
              >
                <span>Explore Career Graph</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Synthesis Banner */}
        <div className="p-6 sm:p-8 bg-[var(--color-surface-warm)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[var(--color-taupe-700)] shrink-0" />
            <p className="font-serif font-medium text-sm sm:text-base text-[var(--color-text-primary)]">
              <strong>The Mentor turns that context into possible next actions.</strong>
            </p>
          </div>

          <span className="text-xs font-mono text-[var(--color-taupe-700)]">
            Contextual &bull; Grounded &bull; Explainable
          </span>
        </div>
      </div>
    </section>
  );
}
