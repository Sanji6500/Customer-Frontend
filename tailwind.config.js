/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "860px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Muslich: ["Mulish", "sans-serif"],
        MediumPoppins: ["Poppins", "sans-serif"],
        InterSemiBold: ["Inter", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        proximaNova: ["Roboto", "sans-serif"],
      },
      colors: {
        Darky: "#858484",
      },

      keyframes: {
        pop: {
          "0%": { transform: " scale(0.4)" },
          "100%": { transform: " scale(1)" },
        },
        popclose: {
          "0%": { transform: " scale(1)" },
          "100%": { transform: " scale(0.4)" },
        },

        alert: {
          "0%": { transform: "translateX(100%) " },
          "100%": { transform: " translateX(0%)" },
        },
      },
      animation: {
        popup: "pop 0.5s ease-in-out ",
        popupClose: "popclose 0.5s ease-in-out ",
        AlertOpen: "alert 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({});
      addUtilities({
        html: {
          "@media (max-width: 1024px)": {},
        },
      });
    }),
  ],
};
