---
draft: false
publishDate: 2026-10-29
seo:
  title: "Vero — Premium GTM Intelligence"
  description: "Turn every signal into your next opportunity. Vero helps revenue teams discover the right accounts, understand buying intent, automate prospecting, and build pipeline faster."
  image: /og-image.png
  index: true
  follow: true
layout:
  header: v1
  footer: v1
  announcement: false
  wrappers:
    - { tag: main, class: "w-full bg-[#FAFAF8] text-[#171719] font-['Manrope'] overflow-hidden" }
# Each section supports: id, hidden: true, class (extra Tailwind classes) and
# spacing: { top, bottom } with presets none | xs | sm | md | lg | xl.
# Add `- type: markdown-content` to render the markdown body below this frontmatter.
sections:
  # 1. HERO
  - type: hero-glow
    eyebrow: GTM Intelligence, Reimagined
    title: "Know who’s ready to buy."
    highlight: Before anyone else.
    description: Vero turns every market signal into a clear next move—so your revenue team can find demand, reach the right people, and build pipeline with precision.
    buttons:
      - { label: Start building pipeline, href: "#", variant: primary, icon: arrow_forward }
      - { label: Explore the platform, href: "#", variant: secondary }
    image: /src/assets/images/figma/hero-image.png
    imageAlt: Vero Dashboard

  # 2. SOCIAL PROOF LOGOS
  - type: logo-marquee
    label: Trusted by modern revenue teams at
    logos:
      - name: VERTEX
      - name: arcwise
        italic: true
      - name: MONO
      - name: NORTHSTAR
      - name: Plain
        italic: true
      - name: Layers

  # 3. FEATURE: INTELLIGENCE
  - type: feature-showcase
    eyebrow: 01 / INTELLIGENCE
    title: Know where the opportunity is before your competitors do.
    description: Vero connects scattered buying signals into one complete, continuously updated view of every account in your market.
    image: /src/assets/images/figma/feature-1.png
    imageAlt: Intelligence Dashboard

  # 4. WORKFLOW GRID
  - type: workflow-steps
    eyebrow: 02 / ONE CONTINUOUS WORKFLOW
    title: From market signal to meaningful conversation.
    steps:
      - { icon: search, tone: purple, title: Discover, description: Find accounts showing real buying intent. }
      - { icon: receipt_long, tone: purple, title: Enrich, description: Complete every account and contact record. }
      - { icon: temp_preferences_custom, tone: green, title: Understand, description: Turn activity into a clear buying narrative. }
      - { icon: group, tone: purple, title: Personalize, description: Create relevant messaging for each person. }
      - { icon: bolt, tone: green, title: Engage, description: Activate coordinated plays across channels. }
      - { icon: code, tone: purple, title: Sync, description: Keep your systems and teams aligned. }

  # 5. DISCOVER, UNDERSTAND, ACT
  - type: feature-rows
    rows:
      - eyebrow: DISCOVER
        title: See the market move in real time.
        description: Track the signals that reveal active demand across every account in your market—not just the companies already in your CRM.
        link: { label: Explore account discovery, href: "#" }
        image: /src/assets/images/figma/image-4.png
        imageAlt: Discover Dashboard
        imagePosition: right
      - eyebrow: UNDERSTAND
        title: Know the story behind every signal.
        description: Vero AI connects people, events, and behavior into an account narrative your team can trust—and act on immediately.
        link: { label: Explore account intelligence, href: "#" }
        image: /src/assets/images/figma/feature-2.png
        imageAlt: Understand Dashboard
        imagePosition: left
      - eyebrow: ACT
        title: Move at the moment that matters.
        description: Turn intelligence into coordinated action across your GTM stack, with the right message, owner, and channel built into every play.
        link: { label: Explore activation, href: "#" }
        image: /src/assets/images/figma/feature-3.png
        imageAlt: Act Dashboard
        imagePosition: right

  # 6. AI AGENTS
  - type: agent-tabs
    eyebrow: 03 / AI AGENTS
    title: "More intelligence.<br />Less manual work."
    description: Deploy purpose-built agents that research, reason, and create—while your team stays in control.
    agents:
      - title: Intelligence with AI & automation
        description: AI resolves routine queries, augments agents in real time, and learns from every interaction - raising containment
        panel:
          name: Research agent
          status: Completed in 48 seconds
          tone: green
          goalLabel: GOAL
          goal: Research Acme’s GTM strategy and identify a compelling reason to engage this quarter.
          steps:
            - { label: Company and market research, meta: 12 sources }
            - { label: Strategic initiative analysis, meta: 8 sources }
            - { label: Executive priority mapping, meta: 5 sources }
          result:
            label: FINDING
            badge: High confidence
            title: Enterprise expansion is Acme’s top priority
            description: Leadership commentary, hiring patterns, and product investments point to a new enterprise GTM motion launching this quarter.
            sources: "Sources: Earnings call · 4 job posts · Executive interview · Technology data"
      - title: Contact center built on AI-human harmony
        description: Context, AI, and reliability in every conversation, so agents respond smarter and customers feel understood.
        panel:
          name: Resolution agent
          status: Completed in 12 seconds
          tone: primary
          goalLabel: GOAL
          goal: Identify customer intent and automate response for tier-1 billing inquiries.
          steps:
            - { label: Intent classification, meta: CRM data }
            - { label: Invoice retrieval, meta: ERP system }
            - { label: Draft automated response, meta: LLM logic }
          result:
            label: ACTION TAKEN
            badge: Resolved
            title: Automated response sent to customer
            description: Customer was provided with a secure link to their latest invoice and a summary of charges.
            sources: "System: Zendesk · Stripe"
      - title: Unified Communication Stack
        description: Experience high reliability with 99.99% uptime for uninterrupted messaging and voice communication at scale.
        panel:
          name: Routing agent
          status: Completed in 3 seconds
          tone: orange
          goalLabel: GOAL
          goal: Analyze incoming call complexity and route to the best available agent.
          steps:
            - { label: Voice transcription, meta: Live audio }
            - { label: Sentiment analysis, meta: NLP engine }
            - { label: Skills-based matching, meta: Routing logic }
          result:
            label: ACTION TAKEN
            badge: Routed
            title: Call transferred to Enterprise Support
            description: High priority detected. Call seamlessly routed to a senior agent with full context injected into their workspace.
            sources: "System: Vero Communications"

  # 7. CUSTOMER STORY
  - type: testimonial-quote
    eyebrow: CUSTOMER STORY
    testimonials:
      - company: NORTHSTAR LABS
        quote: "“Vero gave our team a shared understanding of where demand was forming—then helped us act before the market caught up.”"
        initials: RB
        avatarTone: sand
        name: Rachel Bennett
        role: VP of Revenue, Northstar Labs
        link: { label: Read the customer story, href: "#" }
      - company: ACME CORP
        quote: "“The level of intelligence we get from Vero is unmatched. It has completely transformed how our sales team prioritizes outreach.”"
        initials: DC
        avatarTone: blue
        name: David Chen
        role: Chief Sales Officer, Acme Corp
        link: { label: Read the customer story, href: "#" }
      - company: GLOBEX INC
        quote: "“We saw a 40% increase in meeting booking rates within the first quarter. The signal accuracy is absolutely phenomenal.”"
        initials: SJ
        avatarTone: rose
        name: Sarah Jenkins
        role: Director of Growth, Globex Inc
        link: { label: Read the customer story, href: "#" }

  # 8. HOW TEAMS USE VERO
  - type: persona-cards
    eyebrow: HOW TEAMS USE VERO
    title: One platform. Every revenue team.
    description: Vero gives every function in your go-to-market motion the intelligence they need to move faster and win more.
    cards:
      - image: /src/assets/images/figma/card-sales.png
        imageAlt: Sales
        badge: Sales
        badgeTone: primary
        title: Find and close your best opportunities, faster.
        description: Vero surfaces the accounts showing real buying signals right now, enriches every record automatically, and gives your reps a clear reason to reach out—so they spend more time selling and less time researching.
        link: { label: Explore for sales teams, href: "#" }
      - image: /src/assets/images/figma/card-marketing.png
        imageAlt: Marketing
        badge: Marketing
        badgeTone: green
        title: Run campaigns that reach the market before it moves.
        description: Connect market signals to your campaigns so every impression reaches an account that's already in motion. Vero tells you which segments are heating up—so you invest in demand that's real, not assumed.
        link: { label: Explore for marketing teams, href: "#" }
      - image: /src/assets/images/figma/card-revops.png
        imageAlt: Revenue Operations
        badge: Revenue Operations
        badgeTone: gray
        title: Build the data foundation your GTM stack depends on.
        description: Vero keeps your CRM clean, your scoring accurate, and your integrations in sync. Give every team a single source of truth on account activity so nothing falls through the cracks between systems.
        link: { label: Explore for revenue operations, href: "#" }

  # 9. PIPELINE INTELLIGENCE
  - type: image-banner
    eyebrow: 04 / PIPELINE INTELLIGENCE
    title: See what’s creating pipeline—not just what happened.
    description: Connect signals and actions to revenue so every team knows which accounts, plays, and moments drive growth.
    image: /src/assets/images/figma/banner-pipeline.png
    imageAlt: Pipeline Intelligence

  # 10. INTEGRATIONS
  - type: integrations-showcase
    eyebrow: 05 / INTEGRATIONS
    title: Built for the stack you already have.
    description: Vero connects to your systems of record and action, creating an intelligence layer across your entire go-to-market motion.
    tags: [CRM, Engagement, Data, Marketing, Communication]
    link: { label: Explore all integrations, href: "#" }
    image: /src/assets/images/figma/integrations.png
    imageAlt: Integrations

  # 11. STATISTICS
  - type: stats-counter
    title: Revenue teams use Vero to turn fragmented activity into a repeatable advantage.
    stats:
      - { value: 2.8×, label: faster opportunity creation }
      - { value: 37%, label: higher rep productivity }
      - { value: +51%, label: more pipeline coverage }
      - { value: 14 hrs, label: "saved per rep, per month" }
    note: Aggregate results across active Vero customers. Individual results may vary.

  # 12. FAQ (listed in reading order; alternates left / right column)
  - type: faq-two-column
    eyebrow: FREQUENTLY ASKED QUESTIONS
    title: Everything you need to know.
    faqs:
      - question: What makes Vero different from intent data providers?
        answer: Vero does more than surface anonymous activity. It unifies first- and third-party signals, identifies the people behind them, explains why an account matters, and activates the next best action.
        open: true
      - question: How long does implementation take?
        answer: Implementation typically takes 2-4 weeks depending on your tech stack and data volume. Our onboarding team provides a dedicated Slack channel and guides you through the process.
      - question: Does Vero work with our existing GTM stack?
        answer: Yes, Vero integrates natively with Salesforce, HubSpot, Marketo, Outreach, Salesloft, and leading data warehouses like Snowflake and BigQuery.
      - question: How does Vero identify buying signals?
        answer: Vero tracks first-party signals (website visits, content downloads, product usage) and third-party intent data across the B2B web to score account activity in real-time.
      - question: Is Vero suitable for enterprise teams?
        answer: Absolutely. Vero is built with enterprise-grade security (SOC2 Type II), role-based access control, and scalable infrastructure designed to handle complex GTM motions.
      - question: Can we customize scoring for our business?
        answer: Yes, you can customize signal weighting, define your own ideal customer profile (ICP) criteria, and create specific scoring models for different product lines or regions.

  # 13. CTA
  - type: cta-banner
    icon: rocket_launch
    title: Build your next pipeline advantage.
    description: See how Vero can help your team find demand earlier, act faster, and grow with greater precision.
    buttons:
      - { label: Get started, href: "#", variant: primary, icon: arrow_forward }
      - { label: Book a demo, href: "#", variant: outline }
    backgroundImage: /src/assets/images/cta-bg.png
    backgroundImageAlt: CTA Background
---
