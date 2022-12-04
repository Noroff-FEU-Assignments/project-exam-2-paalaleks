/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "my-cyan": "#074d51",
        "green-5": "#d7f0e4",
        "green-1": "#183e46",
        "green-2": "#14353c",
        "accent-2": "#225560",
        "green-contact": "#036c49",
        "dark-footer": "#0f1216",
        "darkblue-1": "#14191f",
      },
      fontFamily: {
        futuraPt: ["futura-pt", "sans-serif"],
        futuraPtBold: ["futura-pt-bold", "sans-serif"],
        PlateletOTRegular: ["platelet"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F6F8FF",

          secondary: "#D926A9",

          accent: "#54D38B",

          neutral: "#F6F8FF",

          "base-100": "#14191f",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
