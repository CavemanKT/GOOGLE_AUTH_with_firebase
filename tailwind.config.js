// Tailwind is a big library and you don't want loads of unused styles in your production app which could lead to poor front end performance.

// Tailwind can purge all the unused styles, speeding things up nicely for your users.

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
