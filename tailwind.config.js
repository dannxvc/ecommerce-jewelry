/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'xxl': '50rem',
        main:'4rem',
      },
      width: {
        'xxl': '50rem',
      }
    },
    fontSize: {
      sm: '.8rem',
      base: '1rem',
      md:'1.2rem',
      l:'3rem',
      xl: '4rem',
    },
    fontFamily: {
      'body': 'Poppins, sans-serif',
    },
    colors: {
      'black': '#2F2F38',
      'purple': '#BF94EB',
      'purple-light': '#E7D9F4',
      'purple-transparent': '#F6EEFF',
      'orange': '#F27D85',
      'white': '#FFFFFF',
      'transparent':'transparent',
      'glass':'rgba(var(--glass), 0.95)',
      'glass-dark':'rgba(var(--glass-dark), 0.5)',
    }
  },
  plugins: [],
}
