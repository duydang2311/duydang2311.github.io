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
			fontSize: {
				h1: '1.476rem',
				h2: '1.383rem',
				h3: '1.296rem',
				h4: '1.215rem',
				h5: '1.138rem',
				h6: '1.067rem',
				p: '1rem'
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
