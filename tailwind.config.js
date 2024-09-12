/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      },
    },
  },
  plugins: [],
};
