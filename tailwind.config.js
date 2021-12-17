module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "4vh": "400vh",
        "500cir": "500px",
        "600cir": "600px",
      },
      width: {
        "500cir": "500px",
        "600cir": "600px",
      },
      inset: {
        "14px": "14px",
      },
      zIndex: {
        "-1": "-1",
      },
      fontSize: {
        tiny: ".5rem",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
      contrast: ["hover"],
      invert: ["dark"],
    },
  },
  plugins: [],
};
