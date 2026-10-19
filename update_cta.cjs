const fs = require('fs');

let content = fs.readFileSync('src/pages/home-v3.astro', 'utf-8');

const newCta = `    <!-- 7. FINAL CALL TO ACTION (Premium Light) -->
    <section class="w-full py-32 relative overflow-hidden bg-white border-t border-gray-200/60">
      <!-- Ambient light mesh background -->
      <div class="absolute inset-0 w-full h-full z-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-200/50 via-purple-200/50 to-emerald-100/50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
      </div>
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <!-- Floating badge -->
        <div data-animate="fade-up" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-gray-700 mb-8">
          <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
          Start building today
        </div>

        <h2 data-animate="fade-up" class="text-h1 text-gray-950 font-[650] tracking-[-0.05em] leading-[1.05] mb-6">
          Build your team of revenue agents.
        </h2>
        <p data-animate="fade-up" class="text-[18px] text-gray-600 font-[400] leading-[28px] max-w-2xl mx-auto mb-10">
          Create AI agents that understand your business, discover high-intent accounts, and automate your pipeline from idea to outcome.
        </p>
        
        <div data-animate="fade-up" class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a href="#" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-gray-950 text-white font-[600] transition-all hover:bg-black hover:-translate-y-0.5 shadow-lg shadow-gray-900/20 group">
            Get started free
            <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <a href="#" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-white border border-gray-200 text-gray-800 font-[600] transition-all hover:bg-gray-50 hover:-translate-y-0.5 shadow-sm">
            Book a demo
          </a>
        </div>
        
        <div data-animate="fade-up" class="mt-12 flex flex-wrap items-center justify-center gap-6 text-[13px] text-gray-500 font-medium">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px] text-indigo-500">check_circle</span> No credit card required
          </span>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px] text-indigo-500">check_circle</span> 14-day full feature trial
          </span>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px] text-indigo-500">check_circle</span> SOC 2 Type II compliant
          </span>
        </div>
      </div>
    </section>`;

content = content.replace(/<!-- 7\. FINAL CALL TO ACTION[\s\S]*?<\/section>/, newCta);
fs.writeFileSync('src/pages/home-v3.astro', content, 'utf-8');
console.log('Replaced CTA with premium light version');
