import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F3E5AB',
          500: '#D4AF37',
          600: '#AA7C11',
          700: '#855E09'
        },
        obsidian: {
          900: '#09090B',
          800: '#121215',
          700: '#1A1A1E',
          600: '#27272A'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
