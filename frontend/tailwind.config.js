const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: "#1d4ed8", // corporate blue
          dark: "#1e3a8a",
          light: "#60a5fa",
        },
      },
      spacing: {
        section: "4rem", // consistent section spacing
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
