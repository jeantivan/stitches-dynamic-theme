import { createStitches } from "@stitches/react";
import {
  orange,
  amber,
  mint,
  grass,
  blue,
  tomato,
  slate,
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
      ...slate,
      primary: orange.orange9,
    },
  },
});
