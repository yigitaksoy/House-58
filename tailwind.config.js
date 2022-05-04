module.exports = {
  mode: "jit",
  content: [
    "./public/*.{html,js}",
    "./src/*.{html,js}",
    "src/components/**/*.{html,js}",
    "src/pages/**/*.{html,js}",
    "src/sections/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["alfarn-2, sans-serif"],
      ethno: ["ethnocentric, sans-serif"],
    },
    fontWeight: {
      black: 700,
    },

    colors: {
      "cool-dark": "#1a1a1a",
      "cool-darker": "#121212",
      "cool-black": "#0f0f0f",
      "cool-white": "#ffffff",
      "cool-dimmer": "#666",
      "cool-dimmed": "#999",
      "cool-dim": "#FFFFCC",
      "cool-blue": "#00bbff",
      "cool-bright": "#00a7ff",
      "cool-blue2": "#0099fe",
      "cool-blue3": "#02a0ff",
      "cool-beige": "#e9e9e9",
    },
  },
  variants: {},
  plugins: [],
};
