/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sense': ['var(--font-josefin-sans)'],
        'open-sans': ['var(--font-open-sans)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
};
export default config;
