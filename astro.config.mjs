// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_CONSENT_ENABLED: envField.boolean({ context: 'client', access: 'public', optional: true, default: true }),
      PUBLIC_PRIVACY_POLICY_URL: envField.string({ context: 'client', access: 'public', optional: true, default: '/legal/privacy' }),
    },
  },

  integrations: [react()],

  image: {
    domains: ['i.pravatar.cc'],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});