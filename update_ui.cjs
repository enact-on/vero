const fs = require('fs');

let content = fs.readFileSync('src/pages/home-v3.astro', 'utf-8');

const changelog = `    <!-- 6B. RECENTLY SHIPPED (Premium Changelog) -->
    <section class="py-32 bg-[#F4F4F6]" id="changelog">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <div data-animate="fade-up" class="text-[12px] font-[800] tracking-[0.093em] text-[#87868B] uppercase mb-4">
              Continuous Innovation
            </div>
            <h2 data-animate="fade-up" class="text-h2 text-[#171719]">
              Recently shipped.
            </h2>
          </div>
          <a data-animate="fade-up" class="inline-flex items-center gap-2 text-[14px] font-[600] text-[#171719] hover:text-[#6558D9] transition-colors group" href="#">
            See all updates <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div data-animate="fade-up" class="bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(22,22,26,0.06)] border border-[#E3E2DD] p-8 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6558D9] to-[#9B92F2] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F6] text-[#69686E] text-[11px] font-[600] tracking-wider mb-6">
                OCT 14, 2024
              </div>
              <h4 class="text-[20px] font-[600] text-[#171719] mb-3 leading-tight group-hover:text-[#6558D9] transition-colors">16 New GTM Connectors</h4>
              <p class="text-[14px] text-[#69686E] leading-[1.6]">Connect live accounts with Amplitude, BrightData, Apollo v2, ZoomInfo, Clearbit, and 6sense intent signals.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-[#E3E2DD] flex items-center justify-between text-[13px] text-[#171719] font-[600]">
              <span class="group-hover:text-[#6558D9] transition-colors">View docs</span>
              <span class="material-symbols-outlined text-[16px] text-[#AAA9AD] group-hover:text-[#6558D9] group-hover:translate-x-1 transition-all">arrow_forward</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div data-animate="fade-up" class="bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(22,22,26,0.06)] border border-[#E3E2DD] p-8 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F6] text-[#69686E] text-[11px] font-[600] tracking-wider mb-6">
                OCT 11, 2024
              </div>
              <h4 class="text-[20px] font-[600] text-[#171719] mb-3 leading-tight group-hover:text-[#10B981] transition-colors">0.38s Sub-second Execution</h4>
              <p class="text-[14px] text-[#69686E] leading-[1.6]">Agent reasoning latency slashed by 45% using speculative token decoding and localized embedding caches.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-[#E3E2DD] flex items-center justify-between text-[13px] text-[#171719] font-[600]">
              <span class="group-hover:text-[#10B981] transition-colors">Benchmark report</span>
              <span class="material-symbols-outlined text-[16px] text-[#AAA9AD] group-hover:text-[#10B981] group-hover:translate-x-1 transition-all">arrow_forward</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div data-animate="fade-up" class="bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(22,22,26,0.06)] border border-[#E3E2DD] p-8 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F6] text-[#69686E] text-[11px] font-[600] tracking-wider mb-6">
                SEP 28, 2024
              </div>
              <h4 class="text-[20px] font-[600] text-[#171719] mb-3 leading-tight group-hover:text-[#F59E0B] transition-colors">Autonomous Voice Agent</h4>
              <p class="text-[14px] text-[#69686E] leading-[1.6]">Trigger outbound pre-call qualification briefings and automated calendar scheduling links via conversational SMS.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-[#E3E2DD] flex items-center justify-between text-[13px] text-[#171719] font-[600]">
              <span class="group-hover:text-[#F59E0B] transition-colors">Request access</span>
              <span class="material-symbols-outlined text-[16px] text-[#AAA9AD] group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all">arrow_forward</span>
            </div>
          </div>

          <!-- Card 4 -->
          <div data-animate="fade-up" class="bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(22,22,26,0.06)] border border-[#E3E2DD] p-8 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EC4899] to-[#F472B6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F6] text-[#69686E] text-[11px] font-[600] tracking-wider mb-6">
                SEP 21, 2024
              </div>
              <h4 class="text-[20px] font-[600] text-[#171719] mb-3 leading-tight group-hover:text-[#EC4899] transition-colors">Fine-Grained Prompt Locks</h4>
              <p class="text-[14px] text-[#69686E] leading-[1.6]">Role-based lock states prevent unauthorized SDR tweaks to approved corporate messaging sequences.</p>
            </div>
            <div class="mt-8 pt-6 border-t border-[#E3E2DD] flex items-center justify-between text-[13px] text-[#171719] font-[600]">
              <span class="group-hover:text-[#EC4899] transition-colors">Security settings</span>
              <span class="material-symbols-outlined text-[16px] text-[#AAA9AD] group-hover:text-[#EC4899] group-hover:translate-x-1 transition-all">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;

const cta = `    <!-- 7. FINAL CALL TO ACTION (Premium Dark) -->
    <section class="w-full py-32 bg-[#171719] flex items-center justify-center relative overflow-hidden">
      <!-- Glow background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#6558D9] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 data-animate="fade-up" class="text-h2 text-white mb-6">
          Build your team of revenue agents.
        </h2>
        <p data-animate="fade-up" class="text-[18px] text-[#A09FA7] font-[400] leading-[28px] max-w-2xl mx-auto mb-12">
          Create AI agents that understand your business, discover high-intent accounts, and automate your pipeline from idea to outcome.
        </p>
        
        <div data-animate="fade-up" class="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a href="#" class="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-[#171719] font-[600] transition-transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            Get started free
          </a>
          <a href="#" class="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-[#37363C] text-white hover:bg-white/5 transition-all hover:-translate-y-0.5">
            Book a demo
          </a>
        </div>
        
        <div data-animate="fade-up" class="mt-12 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#A09FA7]">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-[#10B981]">check_circle</span> No credit card required
          </span>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-[#10B981]">check_circle</span> 14-day full feature trial
          </span>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-[#10B981]">check_circle</span> SOC 2 Type II compliant
          </span>
        </div>
      </div>
    </section>`;

// Regex to replace from section 6B down to the end of section 7
content = content.replace(/<!-- 6B\. RECENTLY SHIPPED[\s\S]*?<!-- 7\. FINAL CALL TO ACTION[\s\S]*?<\/section>/g, changelog + '\n\n' + cta);

fs.writeFileSync('src/pages/home-v3.astro', content, 'utf-8');
console.log('Successfully updated sections 6B and 7.');
