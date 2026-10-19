# Orbit Design System

## Brand
Orbit is a fictional B2B SaaS platform focused on AI-powered GTM intelligence, sales intelligence, prospecting, automation, and revenue operations. The brand feels intelligent, precise, fast, data-driven, trustworthy, and enterprise-ready.

## Design Principles
1. **Data Density with Clarity:** Interfaces must present dense B2B data (like account intelligence) without feeling cluttered.
2. **Product-Led Storytelling:** Visuals should primarily be realistic product UIs instead of abstract illustrations.
3. **Subtle Motion:** Animations should enhance understanding (e.g., workflow progression) but never distract.
4. **Enterprise Trust:** The design must feel reliable and sophisticated, avoiding overly playful or "trendy startup" aesthetics.

## Typography
- **Primary Font:** Inter (Sans-serif) via Google Fonts.
- **Hierarchy:** Strong headings (`text-display`, `text-h1`, `text-h2`) with tight line-heights, comfortable body text (`text-body-large`) for readability.
- **Scale:** Modular scale applied globally in `src/styles/typography.css`.

## Color Tokens
Defined in `src/styles/tokens.css`
- **Background:** `#FAFAF8`
- **Surface:** `#FFFFFF`
- **Primary Text:** `#111111`
- **Secondary Text:** `#666666`
- **Muted Text:** `#8A8A8A`
- **Border:** `#E8E8E5`
- **Primary Accent:** `#4F46E5` (Indigo)
- **Primary Soft:** `#EEF2FF`

## Layout & Grid
- **Container Max Width:** 1280px via `Container.astro`.
- **Responsive Padding:** 20px (Mobile), 32px (Tablet), 40px (Desktop), 48px (Large Desktop) handled natively.
- **Grid Patterns:** "Zig-zag" layout implemented for features, and "Bento Grid" for the hero section.

## Product UI Components
To achieve the "believable SaaS" look without images, we've built a suite of native CSS/HTML Astro components in `src/components/product/`:
1. **ProductShell:** The window/browser chrome that wraps other UI components.
2. **AccountIntelligence:** Data tables showing intent scores and signals.
3. **ProspectIntelligence:** Contact profiles, buying committee visualizations, and recent engagement triggers.
4. **WorkflowBuilder:** A visual drag-and-drop style canvas for automation paths.
5. **AIPersonalization:** Split-pane email drafter with contextual AI insights.
6. **AIResearch:** Document summary view with live updating mock data.
7. **Analytics:** Revenue forecast charts (pure CSS) and metric grids.
8. **IntegrationUI:** App connectivity status board.
9. **Pipeline:** Kanban board visualization for deals.
10. **AIAgent:** Interactive chat log showing natural language querying.

## Accessibility
- Proper semantic HTML `<nav>`, `<main>`, `<article>`, `<section>`.
- Accessible SVG icons and responsive contrast.
- Standard link replacements (`href="/"`) established for placeholders.
- Mobile menus toggle safely across viewport bounds.

## Performance
- **Zero-JS:** The entire marketing site heavily leverages CSS-only animations and interactions, with inline JS kept to a strict minimum (only for mobile nav toggling).
- Layouts do not use horizontal overflow squashing on mobile. Component grids wrap cleanly to `1fr` below `640px` and `768px`.
