/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    scrollbar: ["rounded"],
    extend: {
      animation: ["motion-safe"],
    },
  },
  theme: {
    screens: {
      sm: "348px",
      md: "648px",
      lg: "1024px",
      xl: "1280px",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      sm: "364px",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      sm: "380px",
      nav: "70px",
    },
    height: {
      sm: "70vh",
      md: "85vh",
      full: "100%",
      screen: "100vh",
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
      4: "4%",
    },
    extend: {
      animation: {
        "fade-scale-enter": "fade-scale-enter 100ms ease-out",
        "fade-scale-exit": "fade-scale-exit 100ms ease-out",
      },
      keyframes: {
        "fade-scale-enter": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-scale-exit": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
