/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': 'Poppins'
    },
    extend: {
      colors: {
        'main': {
          'primary': '#0e4b37',
          'secondary': '#0bc6d0',
          'interactive': '#f34573',
          'box': '#ffffff',
        },
        'background': {
          DEFAULT: '#f1f1f1',
        },
        'danger': {
          'main': '#ea1010',
        },
        'neutral': {
          light: {
            10: '#ffffff',
            20: '#f5f5f5',
            30: '#ededed',
            40: '#e0e0e0',
            50: '#c2c2c2',
            60: '#9e9e9e',
            70: '#757575',
            80: '#616161',
            90: '#222222',
            100: '#0a0a0a',
          },
        },
        'success': {
          'border': '#b3eab5',
          'focus': '#8ddf96',
          'hover': '#169f24',
          'main': '#1bbf2b',
          'pressed': '#127f1d',
          'secondary': '#d1f2d5',
        },
      },
    }
  },
  plugins: [],
};