import "src/styles/reset.css";
import "src/styles/reset_gk.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { GKContextProvider } from "src/context";
import { PageProps_Minimal } from "src/types";

import SE_Profile from "src/components/SE_Profile";
import SE_Menu from "src/components/SE_Menu";

import {AnimatePresence} from "framer-motion";

type Override<T extends U, U> = Omit<T, keyof U> & U
export type GKAppProps = Override<
  AppProps<PageProps_Minimal>,
  { pageProps: PageProps_Minimal }
>


function MyApp({ Component, pageProps,router }: GKAppProps) {
  return (
    <>
      <Head>
        <title>{pageProps.head} | GK</title>
      </Head>
      <GKContextProvider>
        <>
        <SE_Menu/>
        <SE_Profile/>
        <AnimatePresence mode="wait" onExitComplete={()=>window.scrollTo({top:0,behavior:"auto"})}>
          <Component {...pageProps} />
        </AnimatePresence>
        </>
      </GKContextProvider>
    </>
  );
}

export default MyApp;
