/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs de marque issues du logo PMS
        pmsBlue: '#3A62AE',
        pmsRed: '#A51F1F',
        ink: {
          DEFAULT: '#0D1522',
          900: '#0D1522',
          800: '#152033',
          700: '#22304A',
        },
        sand: {
          50: '#FBF9F5',
          100: '#F5F1EA',
          200: '#EAE3D6',
          300: '#D9CFBD',
        },
      },
      fontFamily: {
        display: ['"Archivo"', 'system-ui', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.12)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        kenburns: 'kenburns 9s ease-out forwards',
        marquee: 'marquee 60s linear infinite',
      },
    },
  },
  plugins: [],
}
