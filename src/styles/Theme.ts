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
};

const fonts = {
  heading: "'Happy Monkey', cursive",
  body: "'Quicksand', sans-serif",
};

const buttons = {
  starter: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full border border-500",
    baseStyle: {
      backgroundColor: colors.greys, // Light Pink
      color: colors.whites, // Dark Purple
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.pinkmedium, // Brighter Pink
      color: colors.purpledark,
    },
  },
  premium: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full border border-500",
    baseStyle: {
      backgroundColor: colors.forr, // Pastel Purple
      color: colors.cream,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.pinkmedium,
      color: colors.purpledark,
    },
  },
  luxury: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full border border-500",
    baseStyle: {
      backgroundColor: colors.lightmauve, // Light Pink
      color: colors.cream, // Dark Purple
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.pinkmedium,
      color: colors.purpledark,
    },
  },
  ultimate: {
    className:
      "transition-all transform hover:scale-105 text-md font-medium shadow-lg px-6 py-2 rounded-full border border-500",
    baseStyle: {
      backgroundColor: colors.mauve, // Pastel Purple
      color: colors.cream,
      fontFamily: fonts.heading,
    },
    hoverStyle: {
      backgroundColor: colors.pinkmedium,
      color: colors.purpledark,
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
