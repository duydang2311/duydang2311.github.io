import Art from '~/lib/assets/images/programming.svg';
import { createEffect, Ref } from 'solid-js';
import { animate } from 'motion';

export function IntroductionSection() {
  let h2: HTMLHeadingElement = undefined!;

  createEffect(() => {
    animate(
      h2!,
      { opacity: [0, 1], y: ['0.5rem', 0], scale: [0.96, 1] },
      { duration: 1 },
    );
  });

  return (
    <div class="min-h-[70vh] content-center">
      <div class="mx-auto w-fit text-center">
        <div class="mb-4">
          <div class="flex justify-center items-center lowercase text-base-fg-4">
            <p>&dollar; echo 'hello world'</p>
            <div class="ml-1 w-2 h-4 bg-base-fg-4 animate-pulse"></div>
          </div>
        </div>
        <h2
          ref={h2}
          class="w-full max-sm:text-5xl ~text-6xl/8xl font-bold uppercase tracking-tight"
        >
          I'm a <br class="xl:hidden" />
          Software Engineer.
        </h2>
      </div>
    </div>
  );
}
