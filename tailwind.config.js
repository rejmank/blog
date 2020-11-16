

module.exports = {
  purge: ["./**/{pages,components,tailwind}/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "neon-orange": "#d2793f",
        "orange": {600:"#c1a1d0"}
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
      },
      fontFamily: {
       display: ["Aliee"],
       body: ["Consola"]
       },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.blue.900"),
          blockquote: {
            borderLeftColor: theme("colors.gray.700"),
          },
          "ol > li::before": {
            color: theme("colors.gray.700"),
          },
          "ul > li::before": {
            backgroundColor: theme("colors.gray.700"),
          },
          a: {
            color: "#c1a1d0",
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
