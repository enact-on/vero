const fs = require('fs');
let content = fs.readFileSync('src/pages/home-v3.astro', 'utf-8');

const socialProof = `    <!-- 6. CUSTOMER PROOF (Premium Bento Social Proof) -->
    <section class="py-32 bg-gradient-to-b from-white to-[#F8F9FA] relative overflow-hidden" id="customers">
      <!-- Decorative background blur -->
      <div class="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center mb-20">
          <div data-animate="fade-up" class="text-[12px] font-[800] tracking-[0.093em] text-[#87868B] uppercase mb-4">
            Social Proof
          </div>
          <h2 data-animate="fade-up" class="text-h2 text-gray-950 mb-6">
            In agents, revenue teams trust.
          </h2>
          <p class="text-[18px] text-gray-600 font-[400] leading-[28px]">
            Hear from sales leaders using Orbit to replace fragmented scrapers
            and manual research.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Testimonial 1 -->
          <div data-animate="fade-up" class="group relative bg-white rounded-[24px] p-10 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
            <!-- Huge Background Quote -->
            <div class="absolute -top-6 -left-2 text-[180px] font-serif text-gray-50 leading-none select-none pointer-events-none group-hover:text-indigo-50/50 transition-colors duration-500">
              "
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-8">
                <span class="font-[800] text-[24px] tracking-tight text-gray-900 flex items-center gap-2">
                  <div class="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded text-[14px] font-bold">g</div>
                  gusto
                </span>
                <a href="#" class="inline-flex items-center gap-1.5 text-[13px] font-[600] text-indigo-600 hover:text-indigo-700 transition-colors">
                  Read case study <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <p class="text-[17px] text-gray-700 leading-[1.7] mb-10 font-[400]">
                "Orbit powers AI prospecting agents across our go-to-market
                engine, driving net-new pipeline, reducing churn, and elevating
                sales rep performance in week one."
              </p>
            </div>
            
            <div class="relative z-10">
              <div class="text-[56px] font-[700] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-2">
                $1.5M+
              </div>
              <div class="text-[14px] text-gray-500 font-[500] mb-8">
                Additional ARR unlocked in 90 days
              </div>
              
              <div class="pt-6 border-t border-gray-100 flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?u=ryan" alt="Ryan Schwartz" class="w-full h-full object-cover" />
                </div>
                <div>
                  <div class="text-[15px] text-gray-900 font-[600]">Ryan Schwartz</div>
                  <div class="text-[13px] text-gray-500">VP Marketing Systems & Intelligence</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div data-animate="fade-up" class="group relative bg-white rounded-[24px] p-10 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
            <!-- Huge Background Quote -->
            <div class="absolute -top-6 -left-2 text-[180px] font-serif text-gray-50 leading-none select-none pointer-events-none group-hover:text-emerald-50/50 transition-colors duration-500">
              "
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-8">
                <span class="font-[800] text-[24px] tracking-tight text-gray-900 flex items-center gap-2">
                  <div class="w-6 h-6 bg-orange-500 text-white flex items-center justify-center rounded-full text-[14px] font-bold">i</div>
                  instacart
                </span>
                <a href="#" class="inline-flex items-center gap-1.5 text-[13px] font-[600] text-emerald-600 hover:text-emerald-700 transition-colors">
                  Read case study <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              <p class="text-[17px] text-gray-700 leading-[1.7] mb-10 font-[400]">
                "Orbit has been critical in helping all our revenue teams —
                including non-technical sales ops — adapt AI agents into
                workflows. Our prep time plummeted by 80%."
              </p>
            </div>
            
            <div class="relative z-10">
              <div class="text-[56px] font-[700] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-2">
                3.4x
              </div>
              <div class="text-[14px] text-gray-500 font-[500] mb-8">
                Outbound pipeline ROI vs legacy cold lists
              </div>
              
              <div class="pt-6 border-t border-gray-100 flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?u=pali" alt="Pali Bhat" class="w-full h-full object-cover" />
                </div>
                <div>
                  <div class="text-[15px] text-gray-900 font-[600]">Pali Bhat</div>
                  <div class="text-[13px] text-gray-500">Chief Product & Commercial Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

content = content.replace(/<!-- 6\. CUSTOMER PROOF.*?<!-- 6B\. RECENTLY SHIPPED/s, socialProof + '\n    <!-- 6B. RECENTLY SHIPPED');

fs.writeFileSync('src/pages/home-v3.astro', content, 'utf-8');
console.log('Replaced Social Proof with Premium Bento layout');
