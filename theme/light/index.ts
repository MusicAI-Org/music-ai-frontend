import { baseTheme } from "../base";
import { colors } from "../base/color";

export const lightTheme = {
  ...baseTheme,
  name: "light",
  color: {
    ...colors,
    // TODO: this is just for testing
    bgDark: "#CBCFD7",
  },
};
