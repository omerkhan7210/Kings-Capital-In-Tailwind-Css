/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./build/*.html'],
  theme: {
   
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors:{
        'themeColor':'#0ea500'
      },
      backgroundImage: {
        'contact-footer': "url('/build/imgs/banner.webp')",
        'top-banner': "url('/build/imgs/banner.webp')",
      }
    },
  },
  plugins: [],
}

