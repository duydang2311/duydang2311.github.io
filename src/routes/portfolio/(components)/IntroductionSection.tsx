import Art from '~/lib/assets/images/programming.svg';
export function IntroductionSection() {
  return (
    <div class="min-h-[80vh] grid 2xl:grid-cols-2 content-stretch h-full gap-16">
      <div class="content-center">
        <h2 class="text-8xl uppercase font-bold whitespace-nowrap">
          Full-stack <br />
          Developer
        </h2>
        <div class="grid grid-cols-2 gap-8 mt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac scelerisque enim, ut laoreet libero. Duis mattis diam in risus
            elementum, non pretium dui elementum. Integer lorem risus, finibus
            non convallis id, vestibulum quis dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac scelerisque enim, ut laoreet libero. Duis mattis diam in risus
            elementum, non pretium dui elementum. Integer lorem risus, finibus
            non convallis id, vestibulum quis dui.
          </p>
        </div>
      </div>
      <div class="w-full max-2xl:hidden content-center">
        <img src={Art} class="mx-auto max-w-full h-auto object-cover" />
      </div>
    </div>
  );
}
