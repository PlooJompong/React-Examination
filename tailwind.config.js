/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      },
      backgroundColor: {
        "navy": "#0a192f",
        "light-navy": "#112240",
        "light-slate": "#CCD6F6",
        "bright-green": "#64ffda",
        "bright-purple": "#767ffe"
      },
      textColor: {
        "navy": "#0a192f",
        "light-navy": "#112240",
        "light-slate": "#CCD6F6",
        "bright-green": "#64ffda",
        "bright-purple": "#767ffe"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  darkMode: 'class',
}


