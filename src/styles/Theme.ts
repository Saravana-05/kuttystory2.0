const colors = {
  pinklight: "#f0d2d4",
  pinkdull: "#ffcbcb",
  pinkmedium: "#e595a2",
  pinkdark: "#fb9ca6",
  blue: "#b4d9f3",
  mauve: "#693f4e",
  lightmauve: "#8d4c62",
  purpledark: "#3d0766ff",
  lightpurple: "#682a97ff",
  cream: "#f8e8d3",
  greys: "#707070",
  blacks: "#0a0a0aff",
  whites: "#f2f2f2",
  pinkhome: "#b86c78",
  babypink: "#F999B7",
  forr: "#a24d59ff",
  gold: "#FFD700",       // ✨ Added gold color
  darkGold: "#C9A100",  
  white:"#fafafa" // darker gold for hover
};

const fonts = {
  heading: "Work Sans Extralight', cursive",
  body: "'Work Sans'",
};

const buttons = {
  starter: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full",
    baseStyle: {
      backgroundColor: colors.gold, // ✨ Gold base
      color: colors.blacks,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.darkGold, // ✨ Darker gold hover
      color: colors.blacks,
    },
  },
  premium: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full",
    baseStyle: {
      backgroundColor: colors.gold,
      color: colors.blacks,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.darkGold,
      color: colors.blacks,
    },
  },
  luxury: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full",
    baseStyle: {
      backgroundColor: colors.gold,
      color: colors.blacks,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.darkGold,
      color: colors.blacks,
    },
  },
  ultimate: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full",
    baseStyle: {
      backgroundColor: colors.gold,
      color: colors.blacks,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.darkGold,
      color: colors.blacks,
    },
  },
  cta: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full",
    baseStyle: {
      backgroundColor: colors.purpledark,
      color: colors.whites,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.pinkdark,
      color: colors.purpledark,
    },
  },
};

export { colors, fonts, buttons };
