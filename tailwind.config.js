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
          primary: "#e5ebf5",
          secondary: "#eddd6a",
          accent: "#54D38B",
          neutral: "#14191F",
          "base-100": "#F6F8FF",
          info: "#86A0EE",
          success: "#17AB86",
          warning: "#E19119",
          error: "#FC5D5A",
        },
      },
    ],
  },
};
