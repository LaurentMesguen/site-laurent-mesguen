/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#2d2d3b',
          850: '#1a1a24',
        },
      },
    },
  },
  plugins: [],
};