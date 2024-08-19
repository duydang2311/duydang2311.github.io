import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{js,ts,jsx,tsx}'],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        base: {
          1: 'var(--theme-base-1)',
          'fg-1': 'var(--theme-base-fg-1)',
          'fg-2': 'var(--theme-base-fg-2)',
          'fg-3': 'var(--theme-base-fg-3)',
          'fg-4': 'var(--theme-base-fg-4)',
        },
      },
    },
  },
  plugins: [fluid],
  corePlugins: {
    preflight: false,
  },
};
