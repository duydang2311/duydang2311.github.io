import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';

export default function Home() {
  return (
    <main class="flex">
      <Title>Hello World</Title>
      <A href="/portfolio" end>
        Portfolio
      </A>
    </main>
  );
}
