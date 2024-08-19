import { JSX } from 'solid-js';

export default function Portfolio({ children }: { children: JSX.Element }) {
  return (
    <div class="max-h-screen overflow-auto flex flex-col [scroll-snap-type:_y_proximity] [scroll-behavior:smooth]">
      <header class="~px-4/16 py-4 flex justify-between items-center gap-8 [scroll-snap-align:start]">
        <h1>/home/duyda</h1>
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
  );
}
