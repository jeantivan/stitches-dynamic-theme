import { ReactNode, createContext, useContext, useState } from "react";
import { setCookie } from "cookies-next";

import { TColorMode, TColorModeThemes } from "../types";
import { createColorModeTheme } from "../utils";
import { COLOR_MODE_KEY } from "../constants";

export type TColorModeCtx = {
  colorMode: TColorMode;
  changeColorMode: (mode: TColorMode) => void;
};

const ColorModeCtx = createContext<TColorModeCtx | null>(null);

export const useColorMode = () => useContext(ColorModeCtx);

const ColorModeThemes: TColorModeThemes = {
  dark: createColorModeTheme("dark"),
  light: createColorModeTheme("light"),
};

const ColorModeTheme = ({
  children,
  mode = "dark",
}: {
  children: ReactNode;
  mode: TColorMode;
}) => {
  const [colorMode, setPrimaryColor] = useState<TColorMode>(mode);

  const changeColorMode = (mode: TColorMode) => {
    setCookie(COLOR_MODE_KEY, mode);

    setPrimaryColor(mode);
  };

  return (
    <ColorModeCtx.Provider value={{ colorMode, changeColorMode }}>
      <div className={ColorModeThemes[colorMode]}>{children}</div>
    </ColorModeCtx.Provider>
  );
};

export default ColorModeTheme;
