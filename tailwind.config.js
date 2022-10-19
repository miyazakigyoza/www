module.exports = {
  theme: {
    fontFamily: {
      sans: ['Noto Sans JP', 'ui-sans-serif', 'system-ui'],
      serif: ['Noto Serif Japanese', 'ui-serif', 'serif'],
      enTitle: ['IM Fell English SC'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm:      '1rem',
        md:      '1rem',
        lg:      '1rem',
        xl:      '4rem',
        '2xl':   '8rem',
      },
    },
  },
  extend: {
    fontFamily: {
      'sans': ['Noto Sans JP', 'ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}