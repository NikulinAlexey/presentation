/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        dark: "#7588a3",
        "grey-light": "#808080",
        "grey-deep-dark": "#121212",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      keyframes: {
        floatUp: {
          "0%": {
            transform: "translateY(-50%)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(50%)",
            opacity: "0",
          },
        },
      },
      animation: {
        "arrow-float": "floatUp 100s infinite linear",
      },
    },
  },
  plugins: [],
};
