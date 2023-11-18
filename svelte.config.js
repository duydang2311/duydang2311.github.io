import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
  extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({
    extensions: ['.md'],
    highlight: {
      highlighter: async (code, lang = 'text') => {
        const highlighter = await shiki.getHighlighter({ theme: 'vitesse-light' })
        const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
        return `{@html \`${html}\` }`
      }
    },
    layout: {
      _: './src/lib/components/mdsvex/layout.svelte'
    },
  })],

	kit: {
		adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/duydang2311.github.io' : '',
    }
	},
};

export default config;
