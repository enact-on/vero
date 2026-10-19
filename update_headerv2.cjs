const fs = require('fs');

let headerCode = fs.readFileSync('src/components/layout/HeaderV2.astro', 'utf8');

const newNav = `
          <!-- Desktop Navigation -->
          <nav
            class="hidden md:flex items-center gap-6 text-[14px] font-medium text-gray-600 relative"
          >
            {
              navigation.header.map((item) => (
                <div class="group/nav-item h-16 flex items-center">
                  <a
                    class="hover:text-gray-950 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    href={item.path}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg class="w-3 h-3 text-gray-400 group-hover/nav-item:text-gray-900 transition-transform duration-200 group-hover/nav-item:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  
                  {item.hasDropdown && (
                    <div class="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] opacity-0 invisible group-hover/nav-item:opacity-100 group-hover/nav-item:visible transition-all duration-300 translate-y-2 group-hover/nav-item:translate-y-0 z-50 pointer-events-none group-hover/nav-item:pointer-events-auto">
                      <div class="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-6">
                        <div class="grid grid-cols-2 gap-x-8 gap-y-6">
                          {navigation.footer.slice(0,4).map((section) => (
                            <div class="space-y-3">
                              <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wider">{section.title}</h4>
                              <ul class="space-y-2">
                                {section.links.slice(0,3).map((link) => (
                                  <li>
                                    <a href={link.path} class="text-gray-600 hover:text-indigo-600 font-medium transition-colors inline-flex items-center group/link">
                                      {link.label}
                                      <svg class="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            }
          </nav>
        </div>
        
        <div class="flex items-center gap-3">
          <div class="hidden sm:flex items-center gap-3">
            <a
              class="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-950 px-3 py-1.5 transition-colors"
              href="#">Sign in</a
            >
            <a
              class="text-xs sm:text-sm font-medium text-gray-900 border border-gray-300 bg-white hover:bg-gray-50 px-3.5 py-1.5 rounded-lg shadow-sm transition-all"
              href="#">Book a demo</a
            >
            <a
              class="text-xs sm:text-sm font-semibold text-white bg-black hover:bg-neutral-800 px-4 py-1.5 rounded-lg shadow-sm transition-all active:scale-[0.98]"
              href="#">Get Started</a
            >
          </div>
          
          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-md bg-white border border-gray-200 text-gray-600 focus:outline-none">
             <span class="block w-4 h-0.5 bg-current rounded-full transition-transform duration-300 origin-center -translate-y-1"></span>
             <span class="block w-4 h-0.5 bg-current rounded-full transition-opacity duration-300"></span>
             <span class="block w-4 h-0.5 bg-current rounded-full transition-transform duration-300 origin-center translate-y-1"></span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Drawer Menu -->
      <div id="mobile-drawer" class="fixed inset-0 top-[65px] bg-white/95 backdrop-blur-md z-40 flex flex-col pt-6 pb-20 px-6 opacity-0 invisible translate-x-full transition-all duration-300 ease-in-out md:hidden h-[calc(100vh-65px)] overflow-y-auto">
        <nav class="flex flex-col space-y-6 mb-8">
          {
            navigation.header.map((item) => (
              <div class="border-b border-gray-100 pb-4">
                <a href={item.path} class="text-lg font-semibold text-gray-900 flex justify-between items-center">
                  {item.label}
                  {item.hasDropdown && (
                    <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              </div>
            ))
          }
        </nav>
        <div class="mt-auto flex flex-col gap-3">
          <a class="w-full text-center font-medium text-gray-900 border border-gray-300 bg-white hover:bg-gray-50 px-4 py-3 rounded-xl shadow-sm transition-all" href="#">Book a demo</a>
          <a class="w-full text-center font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-xl shadow-sm transition-all" href="#">Get Started</a>
          <a class="w-full text-center font-medium text-gray-600 py-2" href="#">Sign in</a>
        </div>
      </div>
      
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const btn = document.getElementById('mobile-menu-btn');
          const drawer = document.getElementById('mobile-drawer');
          const spans = btn?.querySelectorAll('span');
          
          let isOpen = false;
          
          btn?.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
              drawer?.classList.remove('opacity-0', 'invisible', 'translate-x-full');
              drawer?.classList.add('opacity-100', 'visible', 'translate-x-0');
              document.body.style.overflow = 'hidden';
              
              if(spans) {
                spans[0].style.transform = 'translateY(2px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-2px) rotate(-45deg)';
              }
            } else {
              drawer?.classList.add('opacity-0', 'invisible', 'translate-x-full');
              drawer?.classList.remove('opacity-100', 'visible', 'translate-x-0');
              document.body.style.overflow = '';
              
              if(spans) {
                spans[0].style.transform = 'translateY(-4px) rotate(0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'translateY(4px) rotate(0)';
              }
            }
          });
        });
      </script>
    </header>
`;

const navMatch = headerCode.match(/<nav[\s\S]*?<\/header>/i);
if (navMatch) {
  headerCode = headerCode.replace(navMatch[0], newNav.trim());
  fs.writeFileSync('src/components/layout/HeaderV2.astro', headerCode);
}
