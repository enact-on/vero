import type { ImageMetadata } from 'astro';
import { cn } from './cn';

export type SpacingPreset = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SectionSpacing {
  top?: SpacingPreset;
  bottom?: SpacingPreset;
}

/** Props every section component accepts (set from page frontmatter) */
export interface BaseSectionProps {
  id?: string;
  spacing?: SectionSpacing;
  class?: string;
}

const TOP: Record<SpacingPreset, string> = {
  none: 'pt-0',
  xs: 'pt-6 lg:pt-8',
  sm: 'pt-8 lg:pt-12',
  md: 'pt-12 lg:pt-16',
  lg: 'pt-12 lg:pt-24',
  xl: 'pt-16 lg:pt-32',
};

const BOTTOM: Record<SpacingPreset, string> = {
  none: 'pb-0',
  xs: 'pb-6 lg:pb-8',
  sm: 'pb-8 lg:pb-12',
  md: 'pb-12 lg:pb-16',
  lg: 'pb-12 lg:pb-24',
  xl: 'pb-16 lg:pb-32',
};

const PY = /^((?:[\w-]+:)*)py-(.+)$/;
const PT = /^(?:[\w-]+:)*pt-/;
const PB = /^(?:[\w-]+:)*pb-/;

/**
 * Build the class list for a section root.
 *
 * `defaults` is the section's own class list including its default padding.
 * When the page sets `spacing.top` / `spacing.bottom`, every padding class for
 * that side (at any breakpoint, including `py-*`) is replaced by the preset.
 * `extra` classes are merged last with tailwind-merge.
 */
export function sectionClass(
  defaults: string,
  { spacing, class: extra }: BaseSectionProps = {},
): string {
  let classes = defaults;

  if (spacing?.top || spacing?.bottom) {
    const tokens = defaults.split(/\s+/).filter(Boolean).flatMap((token) => {
      const py = token.match(PY);
      return py ? [`${py[1]}pt-${py[2]}`, `${py[1]}pb-${py[2]}`] : [token];
    });

    classes = tokens
      .filter((token) => !(spacing.top && PT.test(token)) && !(spacing.bottom && PB.test(token)))
      .concat(spacing.top ? TOP[spacing.top] : [], spacing.bottom ? BOTTOM[spacing.bottom] : [])
      .join(' ');
  }

  return extra ? cn(classes, extra) : classes;
}

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,jpg,jpeg,webp,avif,gif,svg}',
  { eager: true },
);

/**
 * Resolve an image path written in markdown to an optimisable asset.
 *
 * Any path containing `assets/` (e.g. `/src/assets/images/hero.png`,
 * `../../assets/images/hero.png`) resolves to the imported ImageMetadata.
 * Other values (`/public` paths, remote URLs) are returned unchanged.
 */
export function resolveImage(src: string | ImageMetadata | undefined): string | ImageMetadata | undefined {
  if (!src || typeof src !== 'string') return src;

  const index = src.indexOf('assets/');
  if (index === -1) return src;

  const key = `/src/${src.slice(index)}`;
  const image = images[key];
  if (!image) throw new Error(`Image not found: "${src}" (looked for ${key})`);
  return image.default;
}
