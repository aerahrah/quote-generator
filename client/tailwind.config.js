/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    scrollbar: ["rounded"],
  },
  theme: {
    screens: {
      sm: "348px",
      // => @media (min-width: 640px) { ... }
      md: "648px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
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
      nav: "60px",
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
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
