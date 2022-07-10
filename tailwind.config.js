/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#CC5B2A",
          "secondary": "#549787",
          "accent": "#FFE07F",
          "neutral": "#445C47",
          "base-100": "#CFEAED",
          "info": "#65AA9B",
          "success": "#5FC7CF",
          "warning": "#AA8708",
          "error": "#EE745B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
