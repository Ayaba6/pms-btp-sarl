/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pmsBlue: '#0055ff', // Inspiré du bleu du logo
        pmsRed: '#b91c1c',  // Inspiré de la brique/bâtiment
      },
    },
  },
  plugins: [],
}