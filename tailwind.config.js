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
          highlight: '#FFD700', // Gold
          info: '#87CEEB', // Sky Blue
          success: '#90EE90', // Light Green
          warning: '#FFA500', // Orange
          error: '#FF6347', // Tomato Red
        }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
