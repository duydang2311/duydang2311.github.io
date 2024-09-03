import { defineConfig } from '@solidjs/start/config';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig({
  server: {
    preset: 'static',
    prerender: {
      routes: ['/', '/portfolio'],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      solidSvg({
        defaultAsComponent: false,
        svgo: {
          enabled: true,
          svgoConfig: { plugins: ['preset-default', 'removeDimensions'] },
        },
      }),
    ],
  },
});
