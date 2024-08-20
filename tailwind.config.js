import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

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
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [fluid, addVariablesForColors],
  corePlugins: {
    preflight: false,
  },
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
