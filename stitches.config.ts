import { createStitches } from "@stitches/react";
import {
  orange,
  amber,
  mint,
  grass,
  blue,
  tomato,
  grayDark,
} from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      ...orange,
      ...amber,
      ...mint,
      ...grass,
      ...blue,
      ...tomato,
      ...grayDark,
      primary: orange.orange9,
      background: grayDark.gray2,
      text: "white",
    },
  },
});
