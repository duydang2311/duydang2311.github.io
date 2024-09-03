import { Component, createMemo, Index, lazy } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { skills } from './_data/skills';
import { Skill } from './Skill';

export function SkillsSection() {
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
              <ul class="flex flex-wrap items-center gap-12">
                <Index each={skill().items}>
                  {(item) => {
                    return <Skill {...item()} />;
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
