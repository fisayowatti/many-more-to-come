/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter-Regular", "sans-serif"],
        eden: ["edenbold", "serif"],
        script: ["SCRIPTBL", "cursive"],
      },
      borderWidth: {
        22: "22px",
      },
    },
  },
  plugins: [],
};
