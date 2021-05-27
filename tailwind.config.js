require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  prefix: '',
  purge: {
    enabled: enablePurge,
    content:[
      './src/**/*.html',
      './src/**/*.js',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '150':'37.5rem',
        '200':'50rem',
        '224':'56rem',
        '240':'60rem',
        '280':'70rem',
        'screen-85':'85vh'
      },
      fontSize: {
        '2xs': '.65rem',
      }
      ,boxShadow: {
        'around': '2px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    }
  },
  variants: {
    extend: {
      textAlign: ['focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
