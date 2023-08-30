/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      lineHeight: {
        '0': 1,
        '1': 1.1,
        '2': 1.2,
        '3': 1.3,
        '4': 1.4,
        '5': 1.5,
      },
    },
  },
  plugins: [],
}
