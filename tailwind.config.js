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
      'dark': '#02040a',
      'gray-01': '#434343',
      'gray-02': '#242424',
      'gray-03': 'rgba(156, 155, 156, 25)',
      'gray-04': '#3e3e3e',
      'light': '#fff',
    },
    backgroundColor: {
      'dark': '#02040a',
      'gray-01': '#434343',
      'gray-02': '#242424',
      'gray-03': 'rgba(156, 155, 156, 25)',
      'gray-04': '#3e3e3e',
      'blue': '#1683FF',
      'yellow': '#E3CD3C',
    },
    textColor: {
      'white': '#fff',
      'black': '#000',
    },
    extend: {},
  },
  plugins: [],
};
