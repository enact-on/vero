---
draft: false
publishDate: 2026-10-29
seo:
  title: "Vero for Enterprise"
  description: "Turn every signal into your next opportunity. Vero helps revenue teams discover the right accounts, understand buying intent, automate prospecting, and build pipeline faster."
  image: /og-image.png
  index: true
  follow: true
layout:
  header: v1
  footer: v3
  announcement: false
  wrappers:
    - { tag: main, class: "w-full pt-16 bg-surface" }
    - { tag: div, class: "flex flex-col w-full" }
    - tag: div
      class: "relative w-full overflow-hidden bg-surface"
      decor: >-
        <div class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-primary-fixed/35 blur-[120px] rounded-full"></div>
        <div class="pointer-events-none absolute top-48 right-10 w-[380px] h-[380px] bg-secondary-fixed/40 blur-[90px] rounded-full"></div>
# Each section supports: id, hidden: true, class (extra Tailwind classes) and
# spacing: { top, bottom } with presets none | xs | sm | md | lg | xl.
# Add `- type: markdown-content` to render the markdown body below this frontmatter.
sections:
  # 1. Hero
  - type: hero-input
    badge: "Series A &amp; Enterprise GTM • Backed by Y Combinator alumni"
    title: 'Your AI sales agent finds <span class="text-primary underline decoration-primary-fixed decoration-wavy decoration-2">high-intent leads</span> and contacts them for you.'
    description: "Enter your website. Vero learns your business ICP, identifies your best prospects across 85+ live intent channels, and runs verified multichannel outreach automatically."
    input:
      icon: language
      placeholder: "Enter your website (e.g. stripe.com)"
      value: "https://monolith-data.io"
    button: { label: "Launch my agent for free", icon: arrow_forward }
    avatars:
      - { initials: SL, tone: primary-container }
      - { initials: MR, tone: secondary-container }
      - { initials: AK, tone: tertiary-container }
      - { initials: "+2k", tone: primary }
    rating: { stars: 5, score: "4.9 / 5" }
    quote: "“Vero booked 18 enterprise demos in week one without human fatigue.”"
    image: { src: /src/assets/images/astr-theme-hero.png, alt: "Vero Dashboard" }

  # 2. Social proof
  - type: logo-ticker
    title: "Trusted by 2,500+ high-growth revenue leaders and GTM architects worldwide"
    logos:
      - { name: Ramp, style: tighter }
      - { name: Datastream, style: semibold }
      - { name: Vercel, style: bold }
      - { name: Klaviyo, style: uppercase }
      - { name: Gusto, style: tighter }
      - { name: Snowflake, style: semibold }

  # 3. 4-step agent showcase
  - type: feature-progress-cards
    eyebrow: "Continuous Autopilot"
    title: "Your sales agent runs 24/7. And gets better every week."
    description: "From finding the right buyer to sending hyper-relevant messages, your agent handles it end-to-end."
    features:
      - step: "01 / 04"
        title: "Finds &amp; scores your best leads first"
        description: "Your agent detects heavy job intent signals, scores every prospect against your target criteria, and prioritizes the accounts most likely to convert before competitors even notice."
        mockupPosition: right
        chips:
          - { label: "Competitor churn intent +48%", tone: secondary }
          - { label: "Executive hire: VP Growth", tone: primary }
          - { label: "Series B raised ($35M)", tone: container }
        mockup:
          kind: accounts
          title: "Priority Account Radar"
          badge: "12 High-Surge Accounts Today"
          accounts:
            - initials: NX
              tone: primary
              name: "Nexus Logistics Inc."
              meta: "540 Employees • Enterprise Supply Chain"
              score: "Score 98/100"
              scoreTone: primary
              note: "3 VP triggers detected"
            - initials: KV
              tone: secondary
              name: "Kinetix Vector"
              meta: "1,200 Employees • AI Infrastructure"
              score: "Score 94/100"
              scoreTone: primary-fixed
              note: "Budget expanded Q2"
      - step: "02 / 04"
        title: "Only your best prospects. Nothing else."
        description: "Every lead is pre-filtered to match your exact ICP parameters. Your agent will never reach out to bad fits, unqualified titles, or outdated records that burn your domain reputation."
        mockupPosition: left
        mockup:
          kind: checklist
          title: "Strict ICP Precision Waterfall"
          badge: "Filtered 1,420 → 84 verified"
          rows:
            - { label: "Revenue: $15M to $150M ARR", status: "PASS (100%)", pass: true }
            - { label: "Buyer Authority: VP or C-Level in Sales/GTM", status: "PASS (100%)", pass: true }
            - { label: "Zero spam-trap or unverified SMTP", status: "128 DISCARDED", pass: false }
      - step: "03 / 04"
        title: "Multichannel outreach that books demos"
        description: "Your agent reaches out via tailored cold email and LinkedIn message sequences, scheduled natively with human-grade intervals. No robotic templates."
        mockupPosition: right
        note: { icon: verified, label: "100% human-in-the-loop review optional" }
        mockup:
          kind: message
          title: "Autonomous Outreach Composer"
          badge: "Optimized for Deliverability"
          subject: "Subject: Quick note regarding your team's expansion in EMEA"
          body: "“Marcus, noticed you just opened hiring for 4 Account Execs in London. When scaling cross-region reps, pipeline visibility usually takes a hit in month two. We built Vero to give leaders automated coverage across unassigned tier-1 accounts...”"
          hook: "Personalization hook: 10-K SEC Filing + LinkedIn Job Post"
          projection: "Projected Reply: 38.4%"
      - step: "04 / 04"
        title: "Gets better every week"
        description: "Your agent studies which subject lines, buyer titles, and value props book the highest-value demos. It continually adjusts copy tone and persona prioritization against real outcomes."
        mockupPosition: left
        button: { label: "Launch agent for free" }
        mockup:
          kind: chart
          title: "Weekly Self-Tuning Performance Lift"
          badge: "+64% Qualified Pipeline"
          bars:
            - { value: "14%", label: "Wk 1", height: "28%", tone: primary-fixed }
            - { value: "27%", label: "Wk 2", height: "48%", tone: primary-fixed }
            - { value: "42%", label: "Wk 3", height: "68%", tone: secondary-fixed }
            - { value: "64%", label: "Wk 4", height: "94%", tone: primary, highlight: true }

  # 4. Setup steps
  - type: setup-steps
    eyebrow: { icon: bolt, label: "Frictionless Deployment" }
    title: "3 minutes to set up. First meetings today."
    description: "Enter your website. Your agent takes it from there."
    steps:
      - number: "01"
        tone: primary-fixed
        title: "Enter your website"
        description: "Vero crawls your site, docs, and case studies to understand what you sell, your target ICP, and unique differentiators in 60 seconds."
        footnote: "Zero manual prompt engineering"
        footnoteTone: primary
      - number: "02"
        tone: secondary-fixed
        title: "Your agent finds buyers"
        description: "Detects intent spikes across 85+ live data signals, maps the exact buying committee, and drafts personalized sequences for each decision maker."
        footnote: "Multi-party signal correlation"
        footnoteTone: secondary
      - number: "03"
        tone: primary
        title: "Meetings land on calendar"
        description: "Replies, objections, and booking link clicks are handled automatically. Qualified prospects drop straight into your AEs' calendars."
        footnote: "Direct CRM and calendar sync"
        footnoteTone: primary

  # 5. Comparison
  - type: comparison-table
    title: "One Agent. Replaces your fragmented outreach stack."
    description: "Stop paying for 5 disconnected SaaS subscriptions that don't talk to each other."
    columns:
      - variant: old
        label: "The Old Way"
        title: "Disconnected Tool Chain"
        price: "$920+"
        priceNote: "per rep / month"
        items:
          - "Account Scraper subscription ($180/mo)"
          - "B2B Contact database credits ($240/mo)"
          - "Email sequencer + warmup infrastructure ($200/mo)"
          - "Generic AI copywriting assistant tool ($100/mo)"
          - "15+ hours spent every week manually copying CSVs"
      - variant: new
        badge: "All-In-One Intelligence"
        label: "The Vero Way"
        title: "1 Autonomous Sales Agent"
        price: "$99"
        priceNote: "per month total"
        items:
          - "Continuous 85+ signal account intent discovery"
          - "Built-in 99.2% verified email &amp; phone waterfall"
          - "Contextual multi-step email &amp; LinkedIn outreach"
          - "Weekly automated prompt self-optimization"
          - "Direct 2-way sync to Salesforce, HubSpot, Slack"

  # 6. Metrics & testimonials
  - type: metrics-testimonials
    metrics:
      - value: "3.4x"
        tone: primary
        title: "Higher Reply Rate"
        description: "compared to static sales template sequencers"
      - value: "15 hrs"
        tone: default
        title: "Saved Per SDR Weekly"
        description: "zero manual prospect list enrichment needed"
      - value: "&lt; 3 min"
        tone: secondary
        title: "Average Launch Time"
        description: "from landing on Vero to live automated prospecting"
    testimonials:
      - quote: "“Vero identified 34 enterprise companies actively replacing our primary competitor. We put 2 reps on the meetings booked and closed $140k in new ARR within 45 days.”"
        initials: SL
        tone: primary
        name: "Sarah Lin"
        role: "Head of Sales Operations, CloudScale"
      - quote: "“We replaced an entire stack of ZoomInfo, Apollo, and cold email sequencers. The messaging quality is genuinely better than what our junior SDRs were drafting manually.”"
        initials: MV
        tone: secondary
        name: "Marcus Vance"
        role: "VP Revenue, HyperGrowth Technologies"

  # 7. Pricing
  - type: pricing-plans
    title: "Simple, outcome-aligned pricing."
    description: "Start with a 14-day free trial. Scale when meetings are booked."
    plans:
      - variant: featured
        name: "Pro Agent"
        badge: "MOST POPULAR"
        description: "Ideal for high-growth tech companies and scaling sales teams."
        price: "$99"
        period: "/ month"
        features:
          - "2 Autonomous SDR Agents (Runs 24/7)"
          - "Up to 1,800 verified prospects / month"
          - "Real-time 85+ buyer intent signal alerts"
          - "Multichannel: Email + LinkedIn outreach"
          - "HubSpot &amp; Salesforce two-way sync"
        cta: { label: "Start 14-day free trial" }
      - variant: standard
        name: "Enterprise Custom"
        badge: "DEDICATED"
        description: "For enterprise RevOps and multi-region outbound divisions."
        price: "Custom"
        period: "/ tailored volume"
        features:
          - "Unlimited autonomous agents &amp; mailboxes"
          - "Custom proprietary data feeds &amp; 10-K scanners"
          - "SOC-2 Type II + SAML SSO &amp; role security"
          - "Dedicated GTM strategist &amp; prompt engineer"
        cta: { label: "Schedule enterprise briefing", href: "#", path: contact }

  # 8. Bottom CTA
  - type: cta-input
    badge: { icon: auto_awesome, label: "Instant Setup" }
    title: "Your next 10 customers are already looking for you. Let your agent find them."
    description: "Start booking qualified sales meetings on pure autopilot in under three minutes."
    input:
      icon: public
      placeholder: "Enter your website URL..."
      value: "https://acme-analytics.com"
    button: { label: "Launch agent", icon: arrow_forward }
    checks:
      - "14-day free trial"
      - "Live in 3 minutes"
      - "No credit card required"
---
