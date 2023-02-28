import "src/styles/reset.css";
import "src/styles/reset_gk.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
