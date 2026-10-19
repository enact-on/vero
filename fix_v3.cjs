const fs = require('fs');

let content = fs.readFileSync('src/pages/home-v3.astro', 'utf-8');

// 1. Fix BaseLayout
content = content.replace('headerStyle="v2" footerStyle="v2"', 'headerStyle="v1" footerStyle="v1"');

// 2. Fix Marquee logos
const logoBlockPattern = /(<span[^>]*class="font-\[\d00\][^>]*>)/g;
content = content.replace(logoBlockPattern, (match) => {
    return match.replace(/\s*data-animate="fade-up"\s*/g, ' ');
});

// 3. Fix Section 4 and 4B
const section_4_and_4B = `  <!-- 4. COMPLETE CONTEXT ON YOUR COMPANY (Gumloop Knowledge Graph + Multi-App Connectors) -->
  <section class="py-20 bg-white border-y border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <div data-animate="fade-up" class="text-eyebrow text-indigo-600 mb-2">Omniscient Context</div>
        <h2 data-animate="fade-up" class="text-h2 text-gray-950 mb-4">Complete context on your company &amp; deals.</h2>
        <p class="text-base text-gray-600">Your CRM notes, sales collateral, battlecards, product updates, and customer transcripts connect into one living intelligence graph.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1: Knowledge Graph -->
        <div class="bg-gray-50 border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold"><span class="material-symbols-outlined text-[18px]">schema</span></span>
              <span class="text-[10px] font-code bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">Dynamic Graph</span>
            </div>
            <h3 data-animate="fade-up" class="font-[600] text-gray-900 text-[20px] mb-2">Company Knowledge Graph</h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Agents read and cite your verified documentation, pricing calculators, security whitepapers, and customer case studies without hallucination.</p>
          </div>
          <Image src={imgDiscover} alt="Graph" class="w-full h-auto mt-4 rounded-lg shadow-sm border border-gray-200/50" />
        </div>
        <!-- Card 2: Live Agent Activity Log -->
        <div class="bg-gray-50 border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold"><span class="material-symbols-outlined text-[18px]">monitoring</span></span>
              <span class="text-[10px] font-code bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">Live Feed</span>
            </div>
            <h3 data-animate="fade-up" class="font-[600] text-gray-900 text-[20px] mb-2">Live Agent Activity Log</h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Monitor every action your agents take in real-time. See reasoning chains, data retrieval sources, and outbound messaging before it sends.</p>
          </div>
          <Image src={imgUnderstand} alt="Activity" class="w-full h-auto mt-4 rounded-lg shadow-sm border border-gray-200/50" />
        </div>
        <!-- Card 3: Extensible Skills Library -->
        <div class="bg-gray-50 border border-gray-200/80 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold"><span class="material-symbols-outlined text-[18px]">extension</span></span>
              <span class="text-[10px] font-code bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200">Skill Library</span>
            </div>
            <h3 data-animate="fade-up" class="font-[600] text-gray-900 text-[20px] mb-2">Extensible Skills Library</h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-4">Equip agents with specific capabilities like LinkedIn scraping, SEC filing analysis, or personalized video generation via pre-built skills.</p>
          </div>
          <Image src={imgAct} alt="Skills" class="w-full h-auto mt-4 rounded-lg shadow-sm border border-gray-200/50" />
        </div>
      </div>
    </div>
  </section>

  <!-- 4B. MEET YOUR TEAM WHERE THEY ACTUALLY WORK -->
  <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left: Realistic Slack & Gmail Mock UI -->
      <div class="lg:col-span-7" data-animate="fade-up">
        <Image src={imgIntegrations} alt="Integrations" class="w-full h-auto drop-shadow-2xl rounded-2xl border border-gray-200/50" />
      </div>
      <!-- Right Side: Content -->
      <div class="lg:col-span-5">
        <div data-animate="fade-up" class="text-eyebrow text-indigo-600 mb-3">Collaboration</div>
        <h2 data-animate="fade-up" class="text-h2 text-gray-950 mb-5 leading-tight">Meet your team where they actually work.</h2>
        <p class="text-base text-gray-600 mb-6 leading-relaxed">Orbit doesn't force your reps into another cumbersome destination tool. Agents deliver insights directly into Slack, email drafts right inside Gmail and Outlook, and push tasks into Salesforce automatically.</p>
        <div class="space-y-3 text-sm text-gray-700 font-medium">
          <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</span><span>Slack &amp; Microsoft Teams instant alert feeds</span></div>
          <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">✓</span><span>Gmail &amp; Outlook 1-click tailored email injection</span></div>
          <div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs">✓</span><span>Native Chrome extension for LinkedIn Sales Navigator</span></div>
        </div>
      </div>
    </div>
  </section>
`;

content = content.replace(/<!-- 4\. COMPLETE CONTEXT[\s\S]*?<!-- 5\. ENTERPRISE-GRADE CONTROLS/m, section_4_and_4B + '  <!-- 5. ENTERPRISE-GRADE CONTROLS');

// 4. Fix Section 5 (Enterprise Controls)
const section_5 = `<!-- 5. ENTERPRISE-GRADE CONTROLS (Gumloop's Iconic Dark Container Section) -->
  <section class="py-24 bg-[#0a0c10] text-white relative overflow-hidden" id="enterprise">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div data-animate="fade-up" class="text-eyebrow text-indigo-400 mb-2">Controls &amp; Governance</div>
        <h2 data-animate="fade-up" class="text-h2 text-white mb-4">Enterprise-grade controls and visibility.</h2>
        <p class="text-base text-gray-400">Granular spending budgets, audit logs, credential vaults, and sovereign cloud deployments built for the strictest compliance teams.</p>
      </div>
      <!-- Single Column Image -->
      <div class="w-full" data-animate="fade-up">
        <Image src={imgBannerPipeline} alt="Pipeline Analytics" class="w-full h-auto drop-shadow-2xl rounded-2xl border border-white/10" />
      </div>
      <!-- 4-Card Security & Governance Grid (Gumloop style) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div class="bg-[#12161f]/70 border border-white/10 p-4 rounded-xl">
          <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3"><span class="material-symbols-outlined text-[18px]">verified</span></div>
          <h5 data-animate="fade-up" class="text-xs font-bold text-white mb-1">SOC 2 Type II Certified</h5>
          <p class="text-[11px] text-gray-400">Independently audited annually with continuous monitoring via Vanta.</p>
        </div>
        <div class="bg-[#12161f]/70 border border-white/10 p-4 rounded-xl">
          <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3"><span class="material-symbols-outlined text-[18px]">vpn_key</span></div>
          <h5 data-animate="fade-up" class="text-xs font-bold text-white mb-1">SAML SSO &amp; SCIM</h5>
          <p class="text-[11px] text-gray-400">Connect Okta, Google Workspace, Azure AD with role-based provisioning.</p>
        </div>
        <div class="bg-[#12161f]/70 border border-white/10 p-4 rounded-xl">
          <div class="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3"><span class="material-symbols-outlined text-[18px]">gavel</span></div>
          <h5 data-animate="fade-up" class="text-xs font-bold text-white mb-1">GDPR &amp; CCPA Sovereign</h5>
          <p class="text-[11px] text-gray-400">Automated opt-outs, right to erasure, and zero consumer PII persistence.</p>
        </div>
        <div class="bg-[#12161f]/70 border border-white/10 p-4 rounded-xl">
          <div class="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center mb-3"><span class="material-symbols-outlined text-[18px]">lock</span></div>
          <h5 data-animate="fade-up" class="text-xs font-bold text-white mb-1">Encrypted Credential Vault</h5>
          <p class="text-[11px] text-gray-400">API keys never exposed to users or LLM contexts. AES-256 at rest.</p>
        </div>
      </div>
    </div>
  </section>
`;

content = content.replace(/<!-- 5\. ENTERPRISE-GRADE CONTROLS[\s\S]*?<!-- 6\. CUSTOMER PROOF/m, section_5 + '  <!-- 6. CUSTOMER PROOF');

fs.writeFileSync('src/pages/home-v3.astro', content, 'utf-8');
console.log('Done');
