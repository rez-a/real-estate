/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      yekan: ['var(--font-yekan)'],
    },
    extend: {},
  },
  plugins: [],
};
