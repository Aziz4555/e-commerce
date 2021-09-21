module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        whitesmoke: '#f5f5f5',
        gray_cart:'#D4D4D4'
      },

      transitionDuration:{
        '1500':'1500ms',
        '5000':'5000ms'
      },

      keyframes: {
        "slideRight":{
          '0%': {
            right: '-25%',
          },
          '100%': {
            right: '0',
          },
        },
        "slideLeft":{
          '0%': {
            right: '0',
          },
          '100%': {
            right: '-25%',
          },
        },
        "slideRightResponsive":{
          '0%': {
            right: '-91.666667%',
          },
          '100%': {
            right: '0',
          },
        },
        "slideLeftResponsive": {
          '0%': {
            right: '0',
          },
          '100%': {
            right: '-91.666667%',
          }
        },

        "zoom" :{
          '0%': {
            transform:'scale(1)',
          },
          '100%' : {
            transform: 'scale(1.2)',
          }
        }
      },

      animation:{
        'slideRight': 'slideRight 0.8s',
        'slideLeft': 'slideLeft 0.8s',
        'slideRightResponsive':'slideRightResponsive 0.8s',
        'slideLeftResponsive':'slideLeftResponsive 0.8s',
        'zoom': 'zoom 0.5s infinite'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
