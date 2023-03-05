import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import * as THEMES from "src/styles/theme";
import P_Layout from "src/components/PA_Layout";
import S_ImageWrap from "src/styles/ST_ImageWrap";
import { PageProps_Minimal } from "src/types";


const Page_Home: NextPage<PageProps_Minimal> = () => {
  return (
    <>
      <P_Layout>
        <>
          <div className="component">
          </div>
        </>
      </P_Layout>
      <style jsx>{`
        .component {
          width: 100%;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
};

export const getStaticProps = () =>{
  return {
    props:{
      head:"HOME"
    }
  }
}



export default Page_Home;
