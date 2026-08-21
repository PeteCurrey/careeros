export interface MentorFactor {
  label: string;
  value: string;
}

export interface MentorResponseArea {
  hearing: string;
  nextMove: string;
  nextMoveDetail?: string;
  why: string;
  factors: MentorFactor[];
  wantToKnowNext: string;
}

export interface Stage2Option {
  id: string;
  text: string;
  response: MentorResponseArea;
}

export interface Stage1Branch {
  id: string;
  title: string;
  subtitle: string;
  stage2Question: string;
  stage2Options: Stage2Option[];
}

export const MENTOR_DEMO_BRANCHES: Stage1Branch[] = [
  {
    id: 'find-direction',
    title: 'FIND MY DIRECTION',
    subtitle: "I'm not sure what career I actually want.",
    stage2Question: "Let's narrow that down without forcing you into a job title yet. Which of these sounds most like you?",
    stage2Options: [
      {
        id: 'practical',
        text: 'I like solving practical problems',
        response: {
          hearing: "You seem to be drawn toward work where solving tangible problems matters more than sitting within one narrow academic subject.",
          nextMove: "Explore three contrasting environments before selecting a career title.",
          nextMoveDetail: "For example: technical engineering, emergency & public service, or precision skilled trades.",
          why: "Career fit is shaped primarily by the environment and the types of problems you enjoy solving daily, not just an abstract title or starting salary.",
          factors: [
            { label: "Existing inclination", value: "Practical problem solving & hands-on systems" },
            { label: "Current gap", value: "Real-world exposure to distinct operating environments" },
            { label: "Target horizon", value: "Applied engineering, operations, or technical trades" },
          ],
          wantToKnowNext: "Your subjects and qualifications, practical experience, preferred physical environment, and whether a university, apprenticeship, or direct-employment route fits you best.",
        },
      },
      {
        id: 'people',
        text: 'I enjoy working with people',
        response: {
          hearing: "You are energized by human impact, team dynamics, communication, and client or community relationships rather than isolated analytical tasks.",
          nextMove: "Test advisory, people coordination, and client-facing workflows across two distinct sectors.",
          nextMoveDetail: "For example: healthcare & clinical practice, organizational coaching, or client operations.",
          why: "Working with people spans high-empathy care, commercial negotiation, and organizational leadership. Testing environments determines long-term fulfillment.",
          factors: [
            { label: "Existing inclination", value: "Interpersonal communication & collaborative impact" },
            { label: "Current gap", value: "Testing high-touch advisory vs operational coordination" },
            { label: "Target horizon", value: "People leadership, healthcare, or client stewardship" },
          ],
          wantToKnowNext: "Your communication strengths, comfort with high-stakes decisions, and whether you prefer institutional or direct-service settings.",
        },
      },
      {
        id: 'analytical',
        text: 'I like analyzing complex things',
        response: {
          hearing: "You excel when untangling multi-variable complexity, quantitative data structures, and systemic patterns.",
          nextMove: "Map analytical roles where domain depth compounds significantly over decades.",
          nextMoveDetail: "For example: quantitative analysis, software architecture, clinical research, or economic modeling.",
          why: "Analytical capability is highly portable, but its commercial and intellectual leverage increases dramatically when anchored to a deep domain.",
          factors: [
            { label: "Existing inclination", value: "Systems thinking, data analysis & structured reasoning" },
            { label: "Current gap", value: "Specialist domain alignment and capstone project proof" },
            { label: "Target horizon", value: "Specialist technical mastery or research leadership" },
          ],
          wantToKnowNext: "Your current mathematical/technical baseline, preferred tools or methods, and whether you enjoy research or operational problem solving.",
        },
      },
      {
        id: 'create',
        text: 'I want to build and create things',
        response: {
          hearing: "You're driven by tangible output—seeing something functional and original exist that you designed, built, or brought to life.",
          nextMove: "Build one public, verifiable project artifact in your target medium.",
          nextMoveDetail: "For example: an open-source tool, physical prototype, architectural portfolio, or product design.",
          why: "In creative and builder disciplines, tangible project artifacts and demonstrable capability open far more doors than credentials alone.",
          factors: [
            { label: "Existing inclination", value: "Creative design, engineering builds, or product fabrication" },
            { label: "Current gap", value: "Publicly auditable capstone evidence in your Passport" },
            { label: "Target horizon", value: "Product engineering, industrial design, or technical craft" },
          ],
          wantToKnowNext: "What tools you currently build with, what portfolio pieces you already have, and whether you want to work independently or in a studio team.",
        },
      },
    ],
  },
  {
    id: 'progress',
    title: 'PROGRESS',
    subtitle: "I want to move up, but I'm not sure what I'm missing.",
    stage2Question: "What feels like the biggest barrier right now?",
    stage2Options: [
      {
        id: 'skills',
        text: 'I need stronger skills',
        response: {
          hearing: "You recognize a technical or specialist capability threshold separating you from senior peers in your target tier.",
          nextMove: "Identify the 2–3 highest-leverage capabilities rather than enrolling in broad courses.",
          nextMoveDetail: "Benchmark your profile against Career Graph requirements for senior positions.",
          why: "Progression accelerates when skill acquisition is surgical, focused, and directly linked to concrete work deliverables.",
          factors: [
            { label: "Existing capability", value: "Solid foundational execution and domain familiarity" },
            { label: "Current gap", value: "Advanced system architecture or specialist credentials" },
            { label: "Target direction", value: "Senior specialist or technical lead tier" },
          ],
          wantToKnowNext: "Your current core toolkit, target seniority band, and whether your current employer offers structured upskilling pathways.",
        },
      },
      {
        id: 'evidence',
        text: 'I have the skills but not the evidence',
        response: {
          hearing: "You are already delivering at the next level informally, but your achievements aren't structured into verifiable proof that decision-makers can evaluate.",
          nextMove: "Anchor three high-impact project outcomes in your Career Passport with confirmed project evidence.",
          nextMoveDetail: "Document quantifiable business impact, system improvements, or revenue influence.",
          why: "Promotions and senior hires are unlocked by verifiable evidence of past impact, not unverified claims on a résumé.",
          factors: [
            { label: "Existing capability", value: "Proven ability to deliver high-level work" },
            { label: "Current gap", value: "Structured evidence records and documented case studies" },
            { label: "Target direction", value: "Formal promotion, title adjustment, or market benchmarking" },
          ],
          wantToKnowNext: "Which completed projects represent your best work, who can verify your deliverables, and what compensation tier you're benchmarking.",
        },
      },
      {
        id: 'leadership',
        text: 'I need leadership experience',
        response: {
          hearing: "You may already have considerable technical capability, but progression usually requires evidence of responsibility beyond individual delivery.",
          nextMove: "Create an opportunity to lead something before waiting for the promotion.",
          nextMoveDetail: "Take ownership of a cross-functional project, mentor a junior colleague, or coordinate a team deliverable.",
          why: "Leadership evidence can be created through projects, mentoring, coordination, and ownership before a formal management title exists.",
          factors: [
            { label: "Existing capability", value: "Strong individual contributor delivery" },
            { label: "Current gap", value: "Demonstrated team coordination and stakeholder alignment" },
            { label: "Target direction", value: "Lead, Principal, or Management track" },
          ],
          wantToKnowNext: "Your current role, target role, evidence already in your Passport, and whether management or specialist progression fits you better.",
        },
      },
      {
        id: 'role-direction',
        text: "I don't know what the next role should be",
        response: {
          hearing: "You've outgrown your current seat, but the obvious next step on the traditional ladder doesn't feel like the right long-term fit.",
          nextMove: "Map adjacent pathways in the Career Graph before committing to the standard track.",
          nextMoveDetail: "Evaluate dual-track options (specialist principal track vs people management vs operational strategy).",
          why: "Climbing the wrong ladder is one of the most common mid-career traps. Testing adjacent branches clarifies genuine interest.",
          factors: [
            { label: "Existing capability", value: "Broad competence across current domain" },
            { label: "Current gap", value: "Clarity on long-term energetic fit and compensation trajectory" },
            { label: "Target direction", value: "Dual-track exploration (Specialist vs Management vs Strategy)" },
          ],
          wantToKnowNext: "What parts of your current job give you energy versus drain you, your compensation parameters, and your preferred pace of work.",
        },
      },
    ],
  },
  {
    id: 'change-career',
    title: 'CHANGE CAREER',
    subtitle: "I want to do something different without starting again.",
    stage2Question: "What matters most about the change?",
    stage2Options: [
      {
        id: 'use-experience',
        text: 'Use the experience I already have',
        response: {
          hearing: "You want change without discarding the valuable capability and domain instincts you've spent years building.",
          nextMove: "Map transferable capability before searching for new job titles.",
          nextMoveDetail: "Deconstruct your past work into core capability nodes (e.g. diagnostics, operations, client management, technical planning).",
          why: "A job title can hide capabilities that apply elsewhere. Experience in one sector often connects to 3–4 adjacent industries without resetting your seniority.",
          factors: [
            { label: "Existing capability", value: "Multi-year domain experience and transferable instincts" },
            { label: "Current gap", value: "Bridging taxonomy that translates past work into target industry terms" },
            { label: "Target direction", value: "Lateral pivot into high-overlap growth sector" },
          ],
          wantToKnowNext: "What you currently do, which parts you want to keep, which parts you want to leave behind, and what target industries interest you.",
        },
      },
      {
        id: 'earn-more',
        text: 'Earn more',
        response: {
          hearing: "Your current field has compensation ceilings, and you want to pivot into industries where your effort yields higher economic compounding.",
          nextMove: "Benchmark compensation distributions across adjacent Career Graph nodes that share 60%+ skill overlap.",
          nextMoveDetail: "Identify high-leverage bridge skills (e.g. cloud certifications, compliance auditing, enterprise software) that unlock higher salary bands.",
          why: "Significant compensation increases rarely come from incremental raises—they come from positioning existing skills in higher-margin industries.",
          factors: [
            { label: "Existing capability", value: "Strong foundational work ethic and execution capacity" },
            { label: "Current gap", value: "Industry margin leverage and high-value specialization" },
            { label: "Target direction", value: "High-compensation adjacent sectors" },
          ],
          wantToKnowNext: "Your current compensation band, target floor, and whether you're open to remote or relocated opportunities.",
        },
      },
      {
        id: 'meaningful',
        text: 'Do something more meaningful',
        response: {
          hearing: "You're seeking greater mission alignment and societal impact without having to take an unsustainable drop in financial stability.",
          nextMove: "Explore mission-driven organizations where commercial and technical rigor are desperately needed.",
          nextMoveDetail: "Look into clean energy, healthcare infrastructure, civic technology, and educational operations.",
          why: "Mission-aligned sectors often value commercial operational experience because it accelerates organizational maturity.",
          factors: [
            { label: "Existing capability", value: "Commercial or operational discipline" },
            { label: "Current gap", value: "Mission-sector network and domain literacy" },
            { label: "Target direction", value: "High-impact organizations and public-interest infrastructure" },
          ],
          wantToKnowNext: "Which causes or societal challenges resonate with you, and what minimum compensation baseline you require.",
        },
      },
      {
        id: 'environment',
        text: 'Change the way or environment I work',
        response: {
          hearing: "The friction isn't your core skill set—it's the pace, physical demands, shift structure, or cultural constraints of your current environment.",
          nextMove: "Evaluate remote, autonomous, or consulting delivery models using your existing skill stack.",
          nextMoveDetail: "Transition from fixed-shift or high-bureaucracy operations to output-based environments.",
          why: "Changing work context (e.g. field service to remote advisory, corporate to boutique firm) often resolves burnout without requiring an entire reskilling cycle.",
          factors: [
            { label: "Existing capability", value: "Deep domain competence and independent problem solving" },
            { label: "Current gap", value: "Autonomous delivery workflows and portfolio packaging" },
            { label: "Target direction", value: "Flexible, autonomous, or asynchronous work environments" },
          ],
          wantToKnowNext: "Your ideal daily routine, geographical constraints, and whether you prefer team collaboration or deep individual focus.",
        },
      },
    ],
  },
  {
    id: 'build-something',
    title: 'BUILD SOMETHING',
    subtitle: "I'm considering working for myself or starting a business.",
    stage2Question: "Which best describes where you are?",
    stage2Options: [
      {
        id: 'idea-only',
        text: 'I only have an idea',
        response: {
          hearing: "You have strong entrepreneurial curiosity, but need a structured method to evaluate whether the idea represents a genuine commercial problem.",
          nextMove: "Test the commercial problem with 5 prospective customers before building anything.",
          nextMoveDetail: "Conduct structured discovery conversations to validate willingness to pay.",
          why: "Career expertise and business readiness are not the same thing. Validating demand early prevents months of uncompensated effort.",
          factors: [
            { label: "Existing capability", value: "Creative vision and domain observation" },
            { label: "Current gap", value: "Customer problem validation and pricing proof" },
            { label: "Target direction", value: "Validated commercial proposition" },
          ],
          wantToKnowNext: "Who the target customer is, what alternative solutions they currently use, and how much financial runway you have.",
        },
      },
      {
        id: 'service-product',
        text: 'I know what service or product I could offer',
        response: {
          hearing: "You have a clear offering, but need to build the commercial, pricing, and client-acquisition infrastructure around it.",
          nextMove: "Package your service into a fixed-scope pilot offering for your first anchor client.",
          nextMoveDetail: "Define clear deliverables, timeline, and ROI rather than open-ended hourly consulting.",
          why: "Fixed-scope pilot engagements lower buyer friction and generate immediate case study evidence for future sales.",
          factors: [
            { label: "Existing capability", value: "Specific technical or advisory service delivery" },
            { label: "Current gap", value: "Standardized packaging, contracts, and sales pipeline" },
            { label: "Target direction", value: "First 3 paying client engagements" },
          ],
          wantToKnowNext: "Your pricing model, contract templates, and whether you need co-founder support for sales or marketing.",
        },
      },
      {
        id: 'side-project',
        text: "I've already started something on the side",
        response: {
          hearing: "You've proven initial traction or demand, and the decision now is timing and de-risking the transition to full-time.",
          nextMove: "Define explicit monthly recurring revenue and runway milestones before tendering your resignation.",
          nextMoveDetail: "Model cash flow buffers and bridge financing needs in your Career Twin financial parameters.",
          why: "Transitioning with 6–12 months of living expenses and established customer proof dramatically increases venture survival rates.",
          factors: [
            { label: "Existing capability", value: "Early market traction and product/service validation" },
            { label: "Current gap", value: "Financial transition runway and operational scaling" },
            { label: "Target direction", value: "Full-time venture independence" },
          ],
          wantToKnowNext: "Your current side revenue, monthly personal living costs, and pipeline growth rate over the last 90 days.",
        },
      },
      {
        id: 'expertise-to-biz',
        text: 'I want to turn my professional expertise into a business',
        response: {
          hearing: "Your professional experience is becoming an asset that could generate superior economic value independently of an employer.",
          nextMove: "Identify the high-value proprietary frameworks and specialized deliverables from your career history.",
          nextMoveDetail: "Transition from selling hours to selling high-leverage outcomes and proprietary advisory frameworks.",
          why: "Senior professionals often underprice their independent work because they think in salary terms rather than enterprise value delivered.",
          factors: [
            { label: "Existing capability", value: "Decade+ of specialized industry authority" },
            { label: "Current gap", value: "Independent commercial packaging and advisory IP" },
            { label: "Target direction", value: "Specialist consultancy, agency, or productized service" },
          ],
          wantToKnowNext: "What high-stakes business outcomes you've driven, your target corporate client profile, and your existing network reach.",
        },
      },
    ],
  },
];
