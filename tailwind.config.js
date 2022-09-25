/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'xxl': '50rem',
      },
      width: {
        'xxl': '50rem',
      }
    },
    fontSize: {
      sm: '.8rem',
      base: '1rem',
      md:'1.2rem',
      l:'2rem',
      xl: '4rem',
    },
    fontFamily: {
      'body': 'Poppins, sans-serif',
    },
    colors: {
      'black': '#2F2F38',
      'purple': '#BF94EB',
      'purple-light': '#EDEDFF',
      'orange': '#F27D85'
    }
  },
  plugins: [],
}
