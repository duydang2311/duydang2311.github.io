import clsx from 'clsx';
import { lazy } from 'solid-js';

const className = 'h-16 drop-shadow-lg transition ease-in-out hover:scale-110';

export function Skill(props: {
  id: string;
  light: () => Promise<typeof import('*.svg')>;
  dark?: () => Promise<typeof import('*.svg')>;
}) {
  const Light = lazy(props.light);
  const Dark = props.dark ? lazy(props.dark) : null;
  return (
    <>
      <Light
        class={clsx(
          className,
          props.dark == null ? 'dark:invert' : 'dark:hidden',
        )}
      />
      {Dark && <Dark class={clsx(className, 'hidden dark:block')} />}
    </>
  );
}
