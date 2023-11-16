/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,md,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Manrope', 'ui-system', 'sans-serif'],
        body: ['Manrope', 'ui-system', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')]
}

