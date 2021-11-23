module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        noir:{
          light: '#787F86',
          DEFAULT:'#222222',
          dark: '#383C43',
        },
        blanc:{
          DEFAULT:'#FFFFFF',
        },
        jaune:{
          DEFAULT:'#FFD600',
          dark:'',
        },
        bleu:{
          light:'#5A6CAD',
          DEFAULT:'#0F31AF',
          dark: '#0C288D',
        },
        display:{
          DEFAULT: 'flex',
        },
      },
      // Pour intégrer les images au background
      backgroundImage: {
        'maps' : "url('')",
      },

    },
  },
  variants: {
    extend: {
      theme:{
        
      }
    },
  },
  plugins: [],
}
