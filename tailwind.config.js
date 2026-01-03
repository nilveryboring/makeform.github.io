/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.ts',
    './components/**/*.tsx',
    './pages/**/*.{md,mdx}',
    './theme.config.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
