/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#11984d',
      tertiary: '#023f6a',
    },  
    fontFamily: {
      'body':["Poppins","sans-serif"],
      'navbar': ["Raleway","sans-serif"],
    }, 
    extend: {
      
    },
  },
  plugins: [],
}