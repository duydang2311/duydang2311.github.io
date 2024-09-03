import clsx from 'clsx';
import { createResource, lazy } from 'solid-js';

const className = 'relative h-16 w-fit drop-shadow-lg';

export function Skill(props: {
  id: string;
  light: () => Promise<typeof import('*.svg?component-solid')>;
  dark?: () => Promise<typeof import('*.svg?component-solid')>;
}) {
  const Light = lazy(props.light);
  const Dark = props.dark ? lazy(props.dark) : null;

  return (
    <div class="relative group">
      <div class="absolute inset-0 rounded-lg border-2 border-transparent border-dashed bg-transparent transition ease-in-out scale-105 group-hover:scale-125 group-hover:bg-base-fg-1/5 group-hover:border-base-fg-1/10" />
      <Light
        class={clsx(
          className,
          props.dark == null ? 'dark:invert' : 'dark:hidden',
        )}
      />
      {Dark && <Dark class={clsx(className, 'hidden dark:block')} />}
    </div>
  );
}
