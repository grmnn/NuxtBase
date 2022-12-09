/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './modules/**/*.vue',
    './stories/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './app.vue',
  ],
  theme: {
    colors: {
      black: '#000',
      grey: {
        100: '#999',
        200: '#888',
        300: '#777',
        400: '#666',
        500: '#555',
        600: '#444',
        700: '#333',
        800: '#222',
        900: '#111',
      },

      transparent: 'transparent',
      white: '#fff',
      primary: '#0ff',
      error: '#f00',
    },
    fontFamily: {
      inter: ['Inter', 'monospace'],
    },
    extend: {
      'cubic': 'cubic-bezier(.17,.67,.33,.97)',
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
  },
}
