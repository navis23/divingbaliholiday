/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
        fontFamily: {
            anek : ['Anek Latin', ...defaultTheme.fontFamily.sans],
            dmsans : ['DM Sans', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [],
}

