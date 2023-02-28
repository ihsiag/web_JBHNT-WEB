import "src/styles/reset.css";
import "src/styles/reset_gk.css";

import type { AppProps} from "next/app";
import type { PageProps_Minimal } from "src/types/dataTypes";

import Head from "next/head";
import Misc_GoogleAnalytics from "src/components/MISC_GoogleAnalytics";
import Parts_Breadcrumbs from "src/components/PARTS_BREADCRUMBS";

import { AnimatePresence } from 'framer-motion'

type Override<T extends U, U> = Omit<T, keyof U> & U
export type GKAppProps = Override<
  AppProps<PageProps_Minimal>,
  { pageProps: PageProps_Minimal }
>

function MyApp({ Component, pageProps,router}: GKAppProps) {
  return(
    <>
    <Head>
      <title>{pageProps.title_header} | GK</title>
    </Head>
    {process.env.NODE_ENV === "development"?<></>:<Misc_GoogleAnalytics />}
    <Parts_Breadcrumbs pageNames={pageProps.pageNames_crumbs}/>
    <AnimatePresence mode="wait" onExitComplete = {() => setTimeout(()=>window.scrollTo({top:0,behavior: 'auto'}),0)}>
    {/* <AnimatePresence> */}
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    </>
  );
}

export default MyApp;
