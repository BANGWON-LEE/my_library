/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        brand: {
          'white-color': '#FFFFFF',
          'blue-color': '#1A2DF3',
          'black-color': '#000000',
        },
        common: {
          'title-Color': '#FDD80D',
          'background-color': '#242424',
          'footer-color': '#F0F0F0',
        },
        contact: {
          'white-color': '#FFFFFF',
          'font-color': '#1D67CD',
          'input-color': '#E5EBFA',
          'btn-color': '#1D67CD',
          'btn-hover-color': '#0F4999',
        },
        services: {
          'font-color': '#fde047',
          'sub-title-color': '#C7C7C7',
        },
        company: {
          'color-blue': '#170DF2',
          'color-black': '#000000CC',
        },
        primary: {
          bg: '#262626',
          title: '#FDD80D',
          skyblue: '#0099FF',
          blue: '#00317F',
          purple: '#A926E6',
          white: '#FAFAFA',
        },
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
};
