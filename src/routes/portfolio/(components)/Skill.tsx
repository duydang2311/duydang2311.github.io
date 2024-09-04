import clsx from 'clsx';
import { createResource, lazy } from 'solid-js';
import { Tooltip } from '@ark-ui/solid';
import { Portal } from 'solid-js/web';

const className = 'relative h-16 w-fit drop-shadow-lg';

const tooltipContents = {
  csharp: () => (
    <div>
      <h1>C#</h1>
      <p>Web development, scripting, desktop development.</p>
      <p>Probably will add more :).</p>
    </div>
  ),
  ts: () => (
    <div>
      <p>TypeScript</p>
    </div>
  ),
};

export function Skill(props: {
  id: string;
  light: () => Promise<typeof import('*.svg?component-solid')>;
  dark?: () => Promise<typeof import('*.svg?component-solid')>;
}) {
  const Light = lazy(props.light);
  const Dark = props.dark ? lazy(props.dark) : null;
  const TooltipContent =
    props.id in tooltipContents
      ? tooltipContents[props.id as keyof typeof tooltipContents]
      : null;

  function Main() {
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

  if (!TooltipContent) {
    return <Main />;
  }

  return (
    <Tooltip.Root
      openDelay={0}
      closeDelay={0}
      positioning={{ fitViewport: true }}
      interactive
      closeOnPointerDown={false}
      closeOnClick={false}
      closeOnEscape={false}
      closeOnScroll={false}
    >
      <Tooltip.Trigger>
        <Main />
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner class="z-50">
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          <Tooltip.Content class="bg-base-fg-4/5 pt-2 p-4 border-2 border-base-fg-4/10 border-dashed rounded-xl backdrop-blur max-w-[32rem]">
            <TooltipContent />
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
