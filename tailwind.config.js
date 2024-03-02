/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'md':{'max':'530px'},
      'md2':{'max':'400px'}
    }
  },
  plugins: [],
}

