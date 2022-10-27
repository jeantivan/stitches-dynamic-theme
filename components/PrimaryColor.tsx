import { ReactNode, createContext, useContext, useState } from "react";
import { setCookie } from "cookies-next";

import { TColors, TPrimaryColorThemes } from "../types";
import { COLORS, PRIMARY_COLOR_KEY } from "../constants";
import { createPrimaryColorTheme } from "../utils";

export type TPrimaryColor = {
  primaryColor: TColors;
  changePrimaryColor: (color: TColors) => void;
};

const PrimaryColorCtx = createContext<TPrimaryColor | null>(null);

export const usePrimaryColor = () => useContext(PrimaryColorCtx);

export const ColorThemes: TPrimaryColorThemes = COLORS.reduce(
  (acc, curr) => ((acc[curr] = createPrimaryColorTheme(curr)), acc),
  {} as TPrimaryColorThemes
);

const PrimaryColorTheme = ({
  children,
  color = "orange",
}: {
  children: ReactNode;
  color: TColors;
}) => {
  const [primaryColor, setPrimaryColor] = useState<TColors>(color);

  const changePrimaryColor = (color: TColors) => {
    setCookie(PRIMARY_COLOR_KEY, color);

    setPrimaryColor(color);
  };

  return (
    <PrimaryColorCtx.Provider value={{ primaryColor, changePrimaryColor }}>
      <div className={ColorThemes[primaryColor]}>{children}</div>
    </PrimaryColorCtx.Provider>
  );
};

export default PrimaryColorTheme;
