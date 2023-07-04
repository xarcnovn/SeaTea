/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/main-bg.png')",
        plot: "url('/plot-bg.png')",
        improvements: "url('/improvements-bg.png')"
      }
    }
  },
  plugins: []
}
