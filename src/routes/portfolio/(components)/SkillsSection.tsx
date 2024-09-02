import { Component, createMemo, Index, lazy } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { skills as dataSkills } from './_data/skills';

export function SkillsSection() {
  const skills = dataSkills.map((a) => ({
    ...a,
    items: a.items.map((a) => ({ ...a, image: lazy(a.image) })),
  }));

  return (
    <div
      id="etc-skills"
      class="flex flex-col min-h-screen [scroll-snap-align:start] pt-4 pb-8"
    >
      <h2>/etc/skills</h2>
      <ul class="mt-4 flex flex-col justify-between grow gap-16">
        <Index each={skills}>
          {(skill) => (
            <li class="flex items-start gap-8">
              <h3 class="uppercase min-w-min w-96 mb-4">{skill().group}</h3>
              <ul class="flex flex-wrap items-center gap-8">
                <Index each={skill().items}>
                  {(item) => {
                    const Image = item().image;
                    return (
                      <li>
                        <Image class="size-24 drop-shadow-lg" />
                      </li>
                    );
                  }}
                </Index>
              </ul>
            </li>
          )}
        </Index>
      </ul>
    </div>
  );
}
