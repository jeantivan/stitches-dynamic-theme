import { gray } from "@radix-ui/colors";
import { createTheme } from "./stitches.config";
import { TColorMode, TColors } from "./types";

export const createPrimaryColorTheme = (color: TColors) => {
  return createTheme({
    colors: {
      primary: `$${color}9`,
    },
  });
};

export const createColorModeTheme = (mode: TColorMode) => {
  if (mode === "light") {
    return createTheme({
      colors: {
        ...gray,

        background: "$gray1",
        text: "$gray12",
      },
    });
  }

  return createTheme({
    colors: {
      background: "$gray2",
      text: "white",
    },
  });
};
