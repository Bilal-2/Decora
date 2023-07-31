/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d4a373",
        secondary: "#faedcd",
        tertiary: "#fefae0",
        quaternary: "#e9edc9",
        quinary: "#ccd5ae",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "heroVideo": "url('/src/assets/media/hero_video.mp4')",

      },
    },
  },
  plugins: [],
};
