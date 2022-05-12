module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stars:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../src/assets/images/stars.jpg')",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        PtSans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
