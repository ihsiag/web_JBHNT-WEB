import "src/styles/reset.css";
import "src/styles/reset_gk.css";

import type { AppProps } from "next/app";
import PN_Menu from "src/components/PN_Menu";
import PN_Profile from "src/components/PN_Profile";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PN_Menu/>
      <PN_Profile/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
