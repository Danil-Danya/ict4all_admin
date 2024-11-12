/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      width: {
        container: 'calc(100% - 300px)'
      },
      backgroundImage: {
        gradient: 'conic-gradient(from 270deg at 50% 50%, rgba(55, 111, 255, 0.15) 0deg, rgba(0, 19, 155, 0.15) 145.80000042915344deg, rgba(141, 1, 127, 0.15) 188.99999141693115deg, rgba(101, 0, 203, 0.15) 232.19999313354492deg, rgba(50, 0, 101, 0.15) 360deg)',
      },
      content: {
        empty: ''
      },
      colors: {
        bg: {
          blue: '#376FFF',
          gray: 'F0F0F0',
          red: '#F64248',
          modal: 'rgba(0, 0, 0, 0.66)'
        },
        text: {
          blue: '#376FFF',
          red: '#F64248'
        }
      },
      boxShadow: {
        input: '0px 18px 40px 0px rgba(115, 120, 124, 0.15)',
        icon: {
          blue: '0 0 10px #376FFF, 0 0 20px #376FFF, 0 0 40px #376FFF',
          red: '0 0 10px #FF131B, 0 0 20px #FF131B, 0 0 40px #FF131B'
        }
      },
      borderColor:{
        input: '#376FFF',
        upload: '1px solid 376FFF dashed'
      },
      borderWidth: {
        input: '1px'
      }
     },
     fontFamily: {
      cursive: 'mar'
     }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

