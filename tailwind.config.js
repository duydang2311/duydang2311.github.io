/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,md,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Inter', 'ui-system', 'sans-serif'],
				sans: ['Inter', 'ui-system', 'sans-serif'],
				mono: ["'Roboto Mono'", 'monospace']
			},
			typography: {
				DEFAULT: {
					css: {
						code: {
							fontWeight: 400
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
