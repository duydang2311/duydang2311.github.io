import { ParentProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { cn } from '~/lib/utils/styles';

interface AuroraBackgroundProps extends JSX.HTMLAttributes<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  class: className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      class={cn(
        'relative flex flex-col h-screen items-center justify-center transition-bg',
        className,
      )}
      {...props}
    >
      <div class="absolute inset-0 overflow-hidden">
        <div
          class={cn(
            `
            [--gradient:repeating-linear-gradient(100deg,var(--theme-base-1)_0%,var(--theme-base-1)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--theme-base-1)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
