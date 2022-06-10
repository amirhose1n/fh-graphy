const { DESKTOP_WIDTH } = require("./config");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: "#e3b618",
        },
        green: {
          100: "#4ec9b0",
        },
        purple: {
          300: "#93b1ed",
          500: "#7C93E3",
        },
        gray: {
          100: "#F8F2F2",
          200: "#E5E5E5",
          250: "#d3cccc",
          300: "#A1A0A0",
          350: "#454242",
          400: "#424242",
          450: "#8B8E90",
          850: "#424242",
          900: "#242526",
          950: "#201b1b",
        },
      },
      fontFamily: {
        consolas: "Consolas",
      },
      maxWidth: {
        layout: "1200px",
      },
      screens: {
        desktop: `${DESKTOP_WIDTH}px`,
      },
    },
  },
  plugins: [],
};
