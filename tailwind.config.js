// tailwind.config.js
// import colors from "./src/styles/colors"; // Import the colors

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add the new custom colors

        pinklight: "#FFC0D3",
        pinkdull: "#ffbfd4",
        pinkmedium: "#F999B7",
        pinkdark: "#f06292",
        blue: "#b4d9f3",
        mauve: "#693f4e",
        lightmauve: "#8d4c62",
        purpledark: "#3f0968", // Consolidates both #3f0967 and #3f0968
        lightpurple: "#7030a0",
        cream: "#f8e8d3",
        greys: "#707070",
        blacks: "#0a0a0aff",
        whites: "#f2f2f2",
      },
      fontFamily: {
        // Ensure these fonts are imported in your global CSS (e.g., index.css)
        monkey: ['"Happy Monkey"', "cursive"], // Fallback to a generic cursive font
        quicksand: ['"Quicksand"', "sans-serif"],
      },
      spacing: {
        header: "100px",
      },
      keyframes: {
        // ... (Keep your existing keyframes)
        snowfall: {
          "0%": { transform: "translateY(-10%)", opacity: "1" },
          "100%": { transform: "translateY(110vh)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        snowdrift: {
          "0%": {
            transform: "translateY(-20%) translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(120vh) translateX(100vw)",
            opacity: "0",
          },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(50%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        floatSparkle: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-10px) translateX(5px)" },
          "50%": { transform: "translateY(0px) translateX(0px)" },
          "75%": { transform: "translateY(10px) translateX(-5px)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 10px rgba(249, 153, 183, 0.7)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 20px rgba(249, 153, 183, 1)",
          },
        },
      },
      animation: {
        snowfall: "snowfall 10s linear infinite",
        float: "float 3s ease-in-out infinite",
        snowdrift: "snowdrift 15s linear infinite",
        twinkle: "twinkle 1.5s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        floatSparkle: "floatSparkle 4s ease-in-out infinite",
        slideDown: "slideDown 0.3s ease-out forwards",
        pulseGlow: "pulseGlow 2s infinite",
      },
    },
  },
  plugins: [],
};
