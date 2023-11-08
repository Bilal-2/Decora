/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fefae0",
        secondary: "#faedcd",
        tertiary: "#d4a373",
        quaternary: "#e9edc9",
        quinary: "#ccd5ae",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        textcolor2: "#f97316" ,
        btncolor1 : "#f97316",
        btncolor2: "#0a0a0a",
        btncolor3: "#ffffff"
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      xxl : '1536px'
      
      },
      backgroundImage: {
        "heroVideo": "url('/src/assets/media/hero_video.mp4')",

      },
    },
  },
  plugins: [require("daisyui",'@tailwindcss/aspect-ratio')],
};
