/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'color-dark': '#02040a',
      'gray-01': '#434343',
      'gray-02': '#242424',
      'gray-03': 'rgba(156, 155, 156, 25)',
      'gray-04': '#3e3e3e',
    },
    textColor: {
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [],
};
