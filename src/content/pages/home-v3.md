---
draft: false
publishDate: 2026-10-29
seo:
  title: "Vero — Build, Automate, & Control Revenue Agents"
  description: "Turn every signal into your next opportunity. Vero helps revenue teams discover the right accounts, understand buying intent, automate prospecting, and build pipeline faster."
  image: /og-image.png
  index: true
  follow: true
layout:
  header: v1
  footer: v1
  announcement: false
  wrappers:
    - { tag: div, class: overflow-x-hidden }
# Each section supports: id, hidden: true, class (extra Tailwind classes) and
# spacing: { top, bottom } with presets none | xs | sm | md | lg | xl.
# Add `- type: markdown-content` to render the markdown body below this frontmatter.
sections:
  # 1. Hero
  - type: hero-canvas
    badge:
      label: Vero Revenue Agents v2.4
      text: Built for Series A/B GTM
    title: 'Build, share, &amp; control <br class="hidden sm:inline" /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">autonomous revenue agents.</span>'
    description: Turn every raw market signal, buying committee surge, and transcript into qualified outbound pipeline. Give your GTM team the power to automate multi-step prospecting without writing code.
    buttons:
      - { label: Get Started for free, href: "#", variant: primary }
      - { label: Book a demo, href: "#", variant: secondary }
    browserUrl: vero.enacton.com
    image: /src/assets/images/astr-theme-hero.png
    imageAlt: Vero Dashboard

  # 2. Logo strip & stats bar
  - type: logo-stats-bar
    eyebrow: The agent infrastructure powering high-growth revenue teams
    logos:
      - { name: shopify, weight: semibold, size: lg, tracking: tight }
      - { name: instacart, weight: bold, size: base, tracking: tight, animate: true }
      - { name: gusto, weight: semibold, size: lg, tracking: wide }
      - { name: ramp, weight: bold, size: base, animate: true }
      - { name: VERKADA, weight: bold, size: base, tracking: tight, animate: true }
      - { name: Opendoor, weight: medium, size: base, tracking: wide }
    stats:
      - { value: 2.4B+, label: Signals analyzed weekly, tone: dark }
      - { value: "85,000+", label: Agents deployed live, tone: primary }

  # 3. Let your experts build the agents
  - type: feature-checklist
    id: features
    eyebrow: Build &amp; Deploy
    title: Let your revenue experts build the agents.
    description: Understanding your buying persona and deal mechanics is the only prerequisite to automating it. No waitlists for engineering or waiting on RevOps bottlenecks.
    buttons:
      - { label: Explore Agent Templates, href: "#", variant: primary }
      - { label: Read documentation, href: "#", variant: secondary }
    features:
      - { icon: bolt, tone: primary, label: CRM &amp; Webhook Triggers }
      - { icon: sync, tone: emerald, label: Recurring Cron Schedules }
      - { icon: hub, tone: purple, label: 150+ GTM Connectors }
      - { icon: auto_awesome, tone: pink, label: Self-improving Prompts }
      - { icon: security, tone: blue, label: Strict Data Hygiene }
      - { icon: verified_user, tone: amber, label: Human-in-the-loop Guardrails }
    image: /src/assets/images/figma/feature-1.png
    imageAlt: Feature

  # 4. Complete context on your company
  - type: feature-cards
    eyebrow: Omniscient Context
    title: Complete context on your company &amp; deals.
    description: Your CRM notes, sales collateral, battlecards, product updates, and customer transcripts connect into one living intelligence graph.
    cards:
      - icon: schema
        tone: primary
        tag: Dynamic Graph
        title: Company Knowledge Graph
        description: Agents read and cite your verified documentation, pricing calculators, security whitepapers, and customer case studies without hallucination.
        image: /src/assets/images/figma/image-4.png
        imageAlt: Graph
      - icon: monitoring
        tone: emerald
        tag: Live Feed
        title: Live Agent Activity Log
        description: Monitor every action your agents take in real-time. See reasoning chains, data retrieval sources, and outbound messaging before it sends.
        image: /src/assets/images/figma/feature-2.png
        imageAlt: Activity
      - icon: extension
        tone: purple
        tag: Skill Library
        title: Extensible Skills Library
        description: Equip agents with specific capabilities like LinkedIn scraping, SEC filing analysis, or personalized video generation via pre-built skills.
        image: /src/assets/images/figma/feature-3.png
        imageAlt: Skills

  # 4B. Meet your team where they actually work
  - type: feature-mockup-split
    image: /src/assets/images/figma/integrations.png
    imageAlt: Integrations
    eyebrow: Collaboration
    title: Meet your team where they actually work.
    description: Vero doesn't force your reps into another cumbersome destination tool. Agents deliver insights directly into Slack, email drafts right inside Gmail and Outlook, and push tasks into Salesforce automatically.
    checklist:
      - { label: Slack &amp; Microsoft Teams instant alert feeds, tone: emerald }
      - { label: Gmail &amp; Outlook 1-click tailored email injection, tone: primary }
      - { label: Native Chrome extension for LinkedIn Sales Navigator, tone: purple }

  # 5. Enterprise-grade controls
  - type: security-grid
    id: enterprise
    eyebrow: Controls &amp; Governance
    title: Enterprise-grade controls and visibility.
    description: Granular spending budgets, audit logs, credential vaults, and sovereign cloud deployments built for the strictest compliance teams.
    image: /src/assets/images/figma/banner-pipeline.png
    imageAlt: Pipeline Analytics
    cards:
      - icon: verified
        tone: primary
        title: SOC 2 Type II Certified
        description: Independently audited annually with continuous monitoring via Vanta.
      - icon: vpn_key
        tone: emerald
        title: SAML SSO &amp; SCIM
        description: Connect Okta, Google Workspace, Azure AD with role-based provisioning.
      - icon: gavel
        tone: purple
        title: GDPR &amp; CCPA Sovereign
        description: Automated opt-outs, right to erasure, and zero consumer PII persistence.
      - icon: lock
        tone: pink
        title: Encrypted Credential Vault
        description: API keys never exposed to users or LLM contexts. AES-256 at rest.

  # 6. Customer proof
  - type: testimonial-bento
    id: customers
    eyebrow: Social Proof
    title: In agents, revenue teams trust.
    description: Hear from sales leaders using Vero to replace fragmented scrapers and manual research.
    testimonials:
      - tone: primary
        company: { name: gusto, mark: g, markColor: red, markShape: square }
        link: { label: Read case study, href: "#" }
        quote: '"Vero powers AI prospecting agents across our go-to-market engine, driving net-new pipeline, reducing churn, and elevating sales rep performance in week one."'
        stat: $1.5M+
        statLabel: Additional ARR unlocked in 90 days
        author:
          name: Ryan Schwartz
          role: VP Marketing Systems &amp; Intelligence
          avatar: https://i.pravatar.cc/150?u=ryan
      - tone: emerald
        company: { name: instacart, mark: i, markColor: orange, markShape: circle }
        link: { label: Read case study, href: "#" }
        quote: '"Vero has been critical in helping all our revenue teams — including non-technical sales ops — adapt AI agents into workflows. Our prep time plummeted by 80%."'
        stat: 3.4x
        statLabel: Outbound pipeline ROI vs legacy cold lists
        author:
          name: Pali Bhat
          role: Chief Product &amp; Commercial Officer
          avatar: https://i.pravatar.cc/150?u=pali

  # 6B. Recently shipped
  - type: changelog-cards
    id: changelog
    eyebrow: Continuous Innovation
    title: Recently shipped.
    link: { label: See all updates, href: "#" }
    entries:
      - date: OCT 14, 2024
        tone: primary
        title: 16 New GTM Connectors
        description: Connect live accounts with Amplitude, BrightData, Apollo v2, ZoomInfo, Clearbit, and 6sense intent signals.
        cta: View docs
      - date: OCT 11, 2024
        tone: emerald
        title: 0.38s Sub-second Execution
        description: Agent reasoning latency slashed by 45% using speculative token decoding and localized embedding caches.
        cta: Benchmark report
      - date: SEP 28, 2024
        tone: amber
        title: Autonomous Voice Agent
        description: Trigger outbound pre-call qualification briefings and automated calendar scheduling links via conversational SMS.
        cta: Request access
      - date: SEP 21, 2024
        tone: pink
        title: Fine-Grained Prompt Locks
        description: Role-based lock states prevent unauthorized SDR tweaks to approved corporate messaging sequences.
        cta: Security settings

  # 7. Final call to action
  - type: cta-mesh
    badge: Start building today
    title: Build your team of revenue agents.
    description: Create AI agents that understand your business, discover high-intent accounts, and automate your pipeline from idea to outcome.
    buttons:
      - { label: Get started free, href: "#", variant: primary }
      - { label: Book a demo, href: "#", variant: secondary }
---
