import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-full',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'transform will-change-transform',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-transparent text-foreground border border-[#717989] hover:bg-[var(--swatch-blueberry-800)] hover:text-white hover:border-transparent clay-hover',
        secondary:
          'bg-white text-foreground border border-[var(--border)] hover:bg-[var(--swatch-lemon-400)] hover:text-foreground hover:border-[var(--border)] clay-hover active:scale-[0.98]',
        outline:
          'bg-transparent text-foreground border border-[#717989] hover:bg-[var(--swatch-pomegranate-400)] hover:text-white clay-hover active:scale-[0.98]',
        ghost:
          'bg-transparent text-foreground-secondary hover:bg-[var(--swatch-ube-300)]/20 hover:text-foreground active:scale-[0.98]',
        link:
          'bg-transparent text-foreground-secondary hover:text-foreground underline-offset-4 hover:underline',
        destructive:
          'bg-[var(--swatch-pomegranate-400)] text-white hover:bg-[#e15f6c] clay-hover active:scale-[0.98]',
      },
      size: {
        sm: 'h-8 px-3 text-xs [&_svg]:h-4 [&_svg]:w-4',
        md: 'h-12 px-5 text-base [&_svg]:h-5 [&_svg]:w-5',
        lg: 'h-14 px-7 text-lg [&_svg]:h-6 [&_svg]:w-6',
      },
      fullWidth: {
        true: 'w-full',
      },
      icon: {
        true: 'rounded-full',
      },
    },
    compoundVariants: [
      { icon: true, size: 'sm', class: 'h-8 w-8 px-0' },
      { icon: true, size: 'md', class: 'h-10 w-10 px-0' },
      { icon: true, size: 'lg', class: 'h-12 w-12 px-0' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
