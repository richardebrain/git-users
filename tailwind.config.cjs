/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      fontMono:['Space Mono', 'monospace']
    },

    colors:{
      bgLight:'#f6f8ff',
      bgDark:'#141d2f',
      bgLightDark:'#1e2a47',
      btnBlue:'#0079ff',
      stats:'#f6f8ff',
      smText:'#697c9a',
      blueText:'#0079ff',
      readOnlyText:'rgb(105, 124, 154)'
    },
    extend: {
     boxShadow:{
      cardShw:' 0 20px 20px #e2e5f7',
     },
     transitionProperty:{
        all:'all',
     },
     transitionDelay:{
        0.3:'0.3s',
     },
      transitionDuration:{
        0.3:'0.3s',
      },
      transitionTimingFunction:{  
        'ease-in-out':'ease-in-out',
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
