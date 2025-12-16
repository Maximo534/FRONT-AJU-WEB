const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({matchUtilities, theme}){
      matchUtilities(
        {
          'icon-size': (value)=>({
            width: value,
            height: value,
            mindWidth: value,
            minHeight: value
          })
        },
        {
          values: theme('spacing')
        }
      );
    }),
  ],
};
