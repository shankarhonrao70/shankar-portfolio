module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        neonBlue: "#22d3ee",
        neonPurple: "#7c3aed",
        deepBg: "#0b1320",
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        pulseGlow: {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
      },

      boxShadow: {
        glow: "0 0 25px rgba(34, 211, 238, 0.6)",
        purpleGlow: "0 0 25px rgba(124, 58, 237, 0.6)",
      },
    },
  },

  plugins: [],
};