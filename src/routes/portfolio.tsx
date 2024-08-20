import { Title } from '@solidjs/meta';
import { JSX } from 'solid-js';
import { AuroraBackground } from '~/lib/components/AuroraBackground';

export default function Portfolio({ children }: { children: JSX.Element }) {
  return (
    <>
      <Title>Portfolio - duydang2311</Title>
      <AuroraBackground class="fixed inset-0" />
      <div class="relative max-h-screen overflow-auto flex flex-col [scroll-snap-type:_y_proximity] [scroll-behavior:smooth]">
        <div id="top"></div>
        <header class="~px-4/16 py-4 flex justify-between items-center gap-8 [scroll-snap-align:start]">
          <div class="flex items-center">
            <h1 class="sr-only">Duy Dang Portfolio</h1>
            <h2>/home/duyda</h2>
          </div>
          <nav>
            <ul class="flex gap-2">
              <li>
                <a href="#etc-skills">Skills</a>
              </li>
            </ul>
          </nav>
        </header>
        <div>{children}</div>
      </div>
    </>
  );
}
