// NERDQ PRO React base styles
import typography from "assets/theme-dark/base/typography";

// NERDQ PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
