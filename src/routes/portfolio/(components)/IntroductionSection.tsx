import Art from '~/lib/assets/images/programming.svg';

export function IntroductionSection() {
  return (
    <div class="min-h-[80vh] grid 2xl:grid-cols-2 content-stretch h-full gap-16">
      <div class="content-center">
        <div class="flex items-center lowercase text-base-fg-4 mb-4">
          &lt;Hello, world!&gt;
          <div class="ml-1 w-2 h-4 bg-base-fg-4 animate-pulse"></div>
        </div>
        <h2 class="~text-5xl/6xl font-bold uppercase">Full-stack Developer</h2>
      </div>
      <div class="w-full max-2xl:hidden content-center">
        <img src={Art} class="mx-auto max-w-full h-auto object-cover" />
      </div>
      <div class="w-full 2xl:hidden content-center">
        <img src={Art} class="mx-auto max-w-full h-auto object-cover" />
      </div>
    </div>
  );
}
