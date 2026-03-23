/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '576px', // 固定寬度
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1296px'
      }
    },
    extend: {
      colors: {
        primary: {
        50: '#F5F5F5',
        100: '#FAEAF2',
        200: '#9C0053',
        300: '#FE2525',
        },
        borderline: {
          100: '#E1E1E1',
          200: '#C38CA8',
          300: '#FE2525',
        }
      },
    },
  },
  plugins: [],
}
