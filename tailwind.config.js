/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          DEFAULT: '#1D9E75',
          dark:    '#0F6E56',
          light:   '#E1F5EE',
          mid:     '#9FE1CB',
          deeper:  '#0a1a0f',
        },
        wa: '#25D366',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        wapulse: 'wapulse 2.2s ease-in-out infinite',
      },
      keyframes: {
        marquee:  { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        wapulse:  { '0%,100%': { boxShadow: '0 6px 24px rgba(37,211,102,.5)' }, '50%': { boxShadow: '0 6px 40px rgba(37,211,102,.75)' } },
      },
    },
  },
  plugins: [],
};
