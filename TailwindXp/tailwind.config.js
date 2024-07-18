/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  purge: {
    mode: 'jit',
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  },
  darkMode: 'class',
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#25865f2',
        indigo: colors.indigo,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
    },
  },
  plugins: [],
}

