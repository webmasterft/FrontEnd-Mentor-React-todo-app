/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {
      colors: {
        gray: '#9495A5',
        lightGray: '#F2F2F2',
        gray2: '#979797',
        gray3: '#E3E4F1',
        purple: '#494C6B',
        purple2: '#5B5E7E',
        purple3: '#393A4B',
        purple4: '#C8CBE7',
        blue: '#3A7CFD',
        darkblue: '#25273D',
      },
    },
  },
  plugins: [],
};
