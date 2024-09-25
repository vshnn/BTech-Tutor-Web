/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
      'body':["Poppins","sans-serif"],
      'navbar': ["Raleway","sans-serif"],
    }, 
    extend: {
      colors: {
        primary: '#1b212f',
        secondary: '#11984d',
        tertiary: '#023f6a',
    }, 
      
    },
  },
  plugins: [],
}