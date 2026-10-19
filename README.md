# Orbit - Premium B2B SaaS Astro Theme

Orbit is a production-quality, premium SaaS website theme built with Astro. It represents a fictional AI-powered GTM (Go-to-Market) intelligence platform, designed to showcase modern B2B SaaS design patterns, product-led storytelling, and enterprise credibility.

## Features

- **Production-Ready Astro Framework**: Built with Astro 4+, optimized for speed with zero-JS by default where applicable.
- **19 Complete Pages**: From home and pricing to specific persona solutions (Sales, Marketing, RevOps, Enterprise), resources (Blog, Guides), company pages, legal, and authentication.
- **Product UI System**: Contains 10 highly detailed, CSS-only realistic SaaS product interface components (e.g. `AccountIntelligence`, `WorkflowBuilder`, `Analytics`, `IntegrationUI`, `Pipeline`) that look like real software.
- **Responsive Design**: fully fluid and mobile-optimized layouts using CSS Grid and Flexbox.
- **Design System**: Global CSS tokens (`tokens.css`) for easy white-labeling and brand consistency.

## Developer Instructions

### Prerequisites
- **Node.js**: v18.17.1 or higher is required. **Crucially, ensure you are running the 64-bit (x64) version of Node.js on a 64-bit Windows machine.**
- **Package Manager**: `npm`, `pnpm`, or `yarn` can be used.

### Installation

1. **Clone the repository** (if you haven't already).
2. **Navigate to the directory**:
   ```bash
   cd orbit
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

### Troubleshooting: "Cannot find native binding" Error
If you encounter the `Error: Cannot find native binding... is not a valid Win32 application` error when running `npm install` or `npm run dev`:

**To fix this:**
1. Uninstall your current version of Node.js.
2. Download the **64-bit (x64)** installer from the [official Node.js website](https://nodejs.org/).
3. Delete your existing `node_modules` folder and `package-lock.json` file in this project.
4. Run `npm cache clean --force`.
5. Run `npm install` again.

### Running the Development Server

Start the local development server:
```bash
npm run dev
```
The site will be available at `http://localhost:4321`.

### Building for Production

To create a production build of your site:
```bash
npm run build
```
This command compiles your Astro project into the `dist/` directory, which can then be deployed to your preferred static hosting platform (Vercel, Netlify, Cloudflare Pages, etc.).

### Project Structure
- `src/components/common/`: Reusable primitive UI elements (Buttons, Container, Badges, SEO, Logo).
- `src/components/navigation/`: Header, Footer, and Mobile Navigation.
- `src/components/product/`: The 10 advanced product UI mockups.
- `src/layouts/`: `BaseLayout` for core HTML scaffolding and `MarketingLayout` with attached navigation.
- `src/pages/`: All 19 route pages.
- `src/styles/`: Global CSS and Design Tokens (refer to `DESIGN.md`).

### Customization
Refer to `DESIGN.md` for detailed information on modifying the design system, colors, typography, and components.
