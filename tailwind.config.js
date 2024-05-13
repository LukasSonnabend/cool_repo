/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#E6DFF1',
          secondary: '#C0DEDD',
          accent: '#F1DFDE',
          background: '#363636',
          dark: '#151515',
        }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
