import type { AppProps } from "next/app";
import { globalCss } from "../stitches.config";

const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    backgroundColor: "$slate3",
    fontFamily: "sans-serif",
  },
  "*": {
    boxSizing: "border-box",
    margin: 0,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
