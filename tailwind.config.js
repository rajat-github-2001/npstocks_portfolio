/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': '#E44C4B',
      'green': '#21CD9D',
      'secondary': '#9BA0A4',
      'primary': '#FFFFFF',
      'gray': '#FFFFFF14',
      'black': '#000'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

