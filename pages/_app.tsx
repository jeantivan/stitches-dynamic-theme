import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { getCookie, setCookie, hasCookie } from "cookies-next";
import { globalCss } from "../stitches.config";
import PrimaryColorTheme from "../components/PrimaryColor";
import { TColorMode, TColors } from "../types";
import ColorModeTheme from "../components/ColorMode";
import { COLOR_MODE_KEY, PRIMARY_COLOR_KEY } from "../constants";

const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    fontFamily: "sans-serif",
  },
  "*": {
    boxSizing: "border-box",
    margin: 0,
  },
  ".app-container": {
    width: "100vw",
    height: "100vh",
    backgroundColor: "$background",
    color: "$text",
  },
});

type AppOwnProps = { primaryColor: TColors; colorMode: TColorMode };

function MyApp({
  Component,
  pageProps,
  primaryColor,
  colorMode,
}: AppProps & AppOwnProps) {
  globalStyles();

  return (
    <ColorModeTheme mode={colorMode}>
      <PrimaryColorTheme color={primaryColor}>
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      </PrimaryColorTheme>
    </ColorModeTheme>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  const { req, res } = context.ctx;

  if (!hasCookie(PRIMARY_COLOR_KEY, { req, res })) {
    setCookie(PRIMARY_COLOR_KEY, "orange", { req, res });
  }

  return {
    ...ctx,
    primaryColor: (getCookie(PRIMARY_COLOR_KEY, { req, res }) ||
      "orange") as TColors,
    colorMode: (getCookie(COLOR_MODE_KEY, { req, res }) ||
      "dark") as TColorMode,
  };
};

export default MyApp;
