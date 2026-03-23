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
    },
  },
  plugins: [],
}
