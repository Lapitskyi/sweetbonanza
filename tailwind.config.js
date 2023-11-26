/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2.5': '0.625rem',
        '15': '3.75rem',
      },
      spacing: {
        '13.5': '3.375rem',
        '21.75': '5.438rem',
        '28.25': '7.063rem',
        '37': '9.25rem',
        '31.25': '7.813rem',
        '53': '13.25rem',
        '74.75': '18.688rem',
        '82': '20.5rem',
        '144.25': '36.063rem',
        '154': '38.5rem',
        '166': '41.5rem',
        '167.5': '41.875rem',
        '168': '42rem',
        '168.5': '42.125rem',
        '186': '46.5rem',
        '197.25': '49.313rem',
      },
      lineHeight: {
        '3.5': '0.875rem',
        '18': '4.5rem',
      },
      letterSpacing: {
        '0.05': '0.013rem',
        '0.08': '0.02rem',
        '0.1': '0.025rem',
      },
      borderRadius: {
        '2.5': '0.625rem',
        '14': '3.5rem',
      },
      margin: {
        '12.5': '3.125rem',
      },
      padding: {
        '12.5': '3.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '29': '7.25rem',
      },
      colors: {
        'primary-dark': '#0B0B0A',
        'secondary-dark': '#131313',
        'dark': '#202020',
        'nero': '#282828',
        'primary-gold': '#EBBE7D',
        'primary-gray': '#999999',
        'secondary-gray': '#353535',
        'snow': '#FCFCFC',
        'modal': 'rgba(0, 0, 0, 0.70)',
        'primary-red': '#FD4646'
      },
      gridTemplateColumns: {
        '360': 'repeat(2, minmax(300px, 360px))',
      },
      gridTemplateRows: {
        '360-700': 'minmax(0, 360px), minmax(0,1fr)'
      },
      backgroundSize: {},
      backgroundPosition: {
        'top-bottom': 'top bottom'
      },
      backgroundImage: {
        'home-bg': 'url("/images/home/bg.png")',
        'home': 'url("/images/home/bg.png"), lightgray -8.659px 0px / 126.804% 100% no-repeat',
        'registration-bg': 'url("/images/registration/bg-registration.png")',
        'done': 'url("/images/icons/done.svg")',
        'gradient-bg': 'linear-gradient(180deg, #130625 0%, #1B0929 100%)'
      },
      boxShadow: {
        'registration': 'box-shadow: 0px 4px 24px 0px rgba(21, 19, 14, 0.64)'
      },
      zIndex: {
        'min1': '-1',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
      },
      screens: {
        '1450': '1450px'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        backInDown: "backInDown 1s ease-in-out",
        'pulse-one': 'pulse-one 1s ease-in-out',
        fadeInLeft:'fadeInLeft 1s ease-in-out',
        fadeInRight:'fadeInRight 1s ease-in-out',
        fadeInDown:'fadeInDown 1s ease-in-out'
      },
      keyframes: {
        fadeInLeft:{
          'from': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          },
          'to' :{
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        fadeInRight:{
          'from': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
          },
          'to' :{
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        fadeInDown:{
          'from': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
          },
          'to' :{
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'pulse-one': {
          'from': {
            transform: 'scale3d(1, 1, 1)'
          },
          '50%': {
            transform: 'scale3d(1.05, 1.05, 1.05)'
          },
          'to':{
            transform: 'scale3d(1, 1, 1)'
          }
        },
        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        },
        backInDown: {
          '0%': {
            transform: 'translateY(-1200px) scale(0.7)',
            opacity: 0.7,
          },
          '80%': {
            transform: 'translateY(0px) scale(0.7)',
            opacity: 0.7
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }

      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    'GothamProRegular': ['GothamProRegular'], // 400
  },

}

