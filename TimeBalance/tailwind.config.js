/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Esta línea es crucial para que funcione el dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
