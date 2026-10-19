export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  branding: {
    logo: {
      alt: string;
    };
    favicon: {
      svg: string;
      ico?: string;
      png?: string;
      appleTouch?: string;
    };
    colors: {
      // Primary Brand Palette (Orange)
      primary: string;
      primaryHover: string;
      primaryActive?: string;
      primarySoft: string;
      primarySoftHover?: string;
      primaryBorder?: string;
      primaryGlow?: string;

      // Gradient Accents
      gradientStart?: string;
      gradientMiddle?: string;
      gradientEnd?: string;

      // Base Theme Colors
      themeColor: string;
      backgroundColor: string;
      surfaceColor?: string;
      gray50?: string;
      textPrimary?: string;
      textSecondary?: string;
      textMuted?: string;
      borderColor?: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Vero',
  description: 'Turn every signal into your next opportunity. Vero helps revenue teams discover the right accounts, understand buying intent, automate prospecting, and build pipeline faster.',
  url: 'https://vero-theme.example.com',
  ogImage: '/og-image.png',
  author: 'Enacton',
  email: 'hello@vero.example.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 SaaS Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'US',
  },
  socialLinks: [
    'https://github.com/enacton',
  ],
  twitter: {
    site: '@vero',
    creator: '@vero',
  },
  branding: {
    logo: {
      alt: 'Vero Brand Logo',
    },
    favicon: {
      svg: '/favicon.svg',
      ico: '/favicon.ico',
      png: '/favicon-32x32.png',
      appleTouch: '/apple-touch-icon.png',
    },
    colors: {
      // Primary Orange Palette
      primary: '#EA580C',          // Tailwind Orange 600 - bold, high-contrast, modern primary
      primaryHover: '#C2410C',     // Tailwind Orange 700 - rich interactive hover
      primaryActive: '#9A3412',    // Tailwind Orange 800 - active/pressed
      primarySoft: '#FFF7ED',      // Tailwind Orange 50 - soft badge & pill background
      primarySoftHover: '#FFEDD5', // Tailwind Orange 100 - soft badge hover
      primaryBorder: '#FED7AA',    // Tailwind Orange 200 - subtle primary border
      primaryGlow: 'rgba(234, 88, 12, 0.12)', // Ambient hero glow

      // Gradient Accents
      gradientStart: '#EA580C',
      gradientMiddle: '#F97316',
      gradientEnd: '#FB923C',

      // Base Theme Colors
      themeColor: '#EA580C',
      backgroundColor: '#FAFAF8',
      surfaceColor: '#FFFFFF',
      gray50: '#F8F7F4',           // Soft warm neutral section background (replaces cold gray-50)
      textPrimary: '#111111',
      textSecondary: '#666666',
      textMuted: '#8A8A8A',
      borderColor: '#E8E8E5',
    },
  },
};

export default siteConfig;
