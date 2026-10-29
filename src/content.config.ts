import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Spacing presets for the top / bottom padding of any section.
 * See `src/lib/sections.ts` for the classes each preset maps to.
 */
export const spacingPresets = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
const spacing = z.enum(spacingPresets);

/**
 * Fields every section supports. Anything else in a section entry is passed
 * straight to the section component as props (see SectionMapper).
 */
const section = z.looseObject({
  /** Section component in kebab-case, e.g. `faq-accordion` → FaqAccordion.astro */
  type: z.string(),
  /** Optional anchor id rendered on the section root */
  id: z.string().optional(),
  /** Hide the section without deleting it from the file */
  hidden: z.boolean().default(false),
  /** Override the section's default top / bottom padding */
  spacing: z
    .object({
      top: spacing.optional(),
      bottom: spacing.optional(),
    })
    .optional(),
  /** Extra Tailwind classes merged onto the section root (e.g. a background) */
  class: z.string().optional(),
});

/** Optional nested wrapper elements around all sections of a page */
const wrapper = z.object({
  tag: z.enum(['main', 'div']).default('div'),
  class: z.string().optional(),
  /** Raw HTML rendered as the first child of the wrapper (decorative glows, etc.) */
  decor: z.string().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    /** URL path without slashes. Defaults to the file name; `home` maps to `/`. */
    slug: z.string().optional(),
    /** Draft pages are only rendered by `astro dev`, never in a production build */
    draft: z.boolean().default(false),
    /** Pages with a future publish date are left out of production builds */
    publishDate: z.coerce.date().optional(),

    seo: z.object({
      title: z.string(),
      description: z.string().optional(),
      /** Open Graph / Twitter image (path in /public or absolute URL) */
      image: z.string().optional(),
      canonical: z.string().optional(),
      /** false → `noindex` */
      index: z.boolean().default(true),
      /** false → `nofollow` */
      follow: z.boolean().default(true),
    }),

    layout: z
      .object({
        header: z.enum(['v1', 'v2', 'v3', 'none']).default('v1'),
        footer: z.enum(['v1', 'v2', 'v3', 'none']).default('v1'),
        /** true → default bar, or { text, href, ctaText } for custom copy */
        announcement: z
          .union([
            z.boolean(),
            z.object({
              text: z.string(),
              href: z.string().optional(),
              ctaText: z.string().optional(),
            }),
          ])
          .default(false),
        wrappers: z.array(wrapper).default([]),
      })
      .prefault({}),

    sections: z.array(section).default([]),
  }),
});

export const collections = { pages };
