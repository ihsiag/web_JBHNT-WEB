import "src/styles/reset.css";
import "src/styles/reset_gk.css";

import type { AppProps} from "next/app";
import type { PageProps_Minimal } from "src/types";

import Head from "next/head";
import { AnimatePresence } from 'framer-motion'
import Misc_GoogleAnalytics from "src/components/MISC_GoogleAnalytics";
import SE_Menu from "src/components/SE_Menu";

type Override<T extends U, U> = Omit<T, keyof U> & U
export type GKAppProps = Override<
  AppProps<PageProps_Minimal>,
  { pageProps: PageProps_Minimal }
>

function MyApp({ Component, pageProps,router}: GKAppProps) {
  return(
    <>
    <Head>
      <title>{pageProps.head} | GK</title>
    </Head>
    {process.env.NODE_ENV === "development"?<></>:<Misc_GoogleAnalytics />}
    <SE_Menu pageNames={pageProps.crumbs}/>
    <AnimatePresence mode="wait" onExitComplete = {() => setTimeout(()=>window.scrollTo({top:0,behavior: 'auto'}),0)}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    </>
  );
}

export default MyApp;
