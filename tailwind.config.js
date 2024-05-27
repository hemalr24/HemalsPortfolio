/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        'primary': '#CAF0F8',
        'nav-blue': '#1768AC',
        'black': '#262D33',
        'react': '#61DAFB',
        'react-hover': '#45D4FF',
        'tailwind': '#38BDF8',
        'tailwind-hover': '#4DC0E9',
        'nextjs': '#000000',
        'nextjs-hover': '#202020',
        'strapi': '#2F2E8B',
        'strapi-hover': '#1D1C6B',
        'css': '#1572B6',
        'css-hover': '#1E5FAA',
        'html': '#E34F26',
        'html-hover': '#E45D26',
        'javascript': '#F7DF1E',
        'javascript-hover': '#FFD700',
        'c': '#A8B9CC',
        'c-hover': '#7F8FA4',
        'python': '#3C78A9',
        'python-hover': '#4B8BBE',
        'java': '#F89820',
        'java-hover': '#FFA726',
      },
      scrollbar: ['rounded', 'dark'],
      fontFamily: {
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'h1': '4rem',
        'h2': '2.2rem',
        'p': '1.3rem',
        'tags': '1.1rem',
      },
      height: {
        'image': '32rem',
        'card': '28rem',
      },
      animation: {
        'slide': 'slide 15s linear infinite',
        'fade-in': 'fade-in 2s;'
      },
      scale: {
        '60': '.60',
        '70': '.70',
        '80': '.80',
        '85': '.85',
        '90': '.90',
        '110': '1.10',
        '120': '1.20',
        '130': '1.30',
        '140': '1.40',
        '150': '1.50',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}