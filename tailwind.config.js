/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'purple-900': '#1e1145',
        'purple-800': '#2d1b69',
        'purple-700': '#3b2378',
        'purple-600': '#4f2d91',
        'pink-500': '#ec4899',
        'pink-400': '#f472b6',
        'pink-300': '#f9a8d4',
        'gold-400': '#fbbf24',
        'gold-500': '#f59e0b',
        'gold-300': '#fcd34d',
        'dark-900': '#0f0a1a',
        'dark-800': '#1a1028',
        'dark-700': '#261a38',
      },
    },
  },
  plugins: [],
}
