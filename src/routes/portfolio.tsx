import { JSX } from 'solid-js';

export default function Portfolio({ children }: { children: JSX.Element }) {
  return (
    <div class="max-h-screen overflow-auto flex flex-col [scroll-snap-type:_y_proximity]">
      <header class="px-16 py-4 flex justify-between items-center gap-8 [scroll-snap-align:start]">
        <h1>/home/duyda</h1>
        <nav>
          <ul class="flex gap-2">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
}
