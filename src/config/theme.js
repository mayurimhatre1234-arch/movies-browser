const common = {
  breakpoint: {
    small: "480px",
    medium: "767px",
    large: "1024px",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const lightTheme = {
  ...common,
  color: {
    white: "#FFFFFF",
    lightGrey: "#F5F5FA",
    grey: "#E4E6F0",
    darkerGrey: "#7E839A",
    stormGray: "#74788B",
    black: "#000000",
    blackSpecial: "#18181B",

    mineShaft: "#333333",
    lightBlue: "#D6E4FF",
    blue: "#0044CC",
    yellow: "#FCD420",

    imageBG: "#C4C4C4",
    boxShadow: "#BAC7D580",

    navBg: "#18181B",
    navBgMobile: "#000000",
    navText: "#FFFFFF",
  },
};

export const darkTheme = {
  ...common,
  color: {
    white: "#1E1E2A",
    lightGrey: "#121218",
    grey: "#2A2A3A",
    darkerGrey: "#9A9AB0",
    stormGray: "#9A9AAE",
    black: "#FFFFFF",
    blackSpecial: "#E4E4E8",

    mineShaft: "#D0D0D0",
    lightBlue: "#1A2A44",
    blue: "#4488FF",
    yellow: "#FCD420",

    imageBG: "#2A2A3A",
    boxShadow: "#00000040",

    navBg: "#18181B",
    navBgMobile: "#000000",
    navText: "#FFFFFF",
  },
};

// Default export for backwards compatibility (used by pageStateSlice for breakpoint)
export const theme = lightTheme;
