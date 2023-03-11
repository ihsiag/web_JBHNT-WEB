import fsPromises from "fs/promises";
import path from "path";
import * as THEMES from "src/styles/theme";


import type { NextPage } from "next";
import Layout_Page_Parent from "src/components/PA_Layout";


import { PageProps_Minimal} from "src/types";


const Page_Versions: NextPage<PageProps_Minimal> = () => {
  return (
    <>
      <Layout_Page_Parent>
        <>
        <div className="component">
        <ul className="data">
          <li><p>-</p></li>
          <li><p>VERSION 1.01(CURRENT)</p><p>:</p><p>https://www.gaishikudo.com</p></li>
          <li><p>VERSION 1.00</p><p>:</p><p>https://vercel.com/ihsiag/web-gk-web/GXAvyQ3Y3wtU7TXXyQ7vpgNDkm6D</p></li>
          <li><p>VERSION 0.10</p><p>:</p><p>https://vercel.com/ihsiag/web-gk-web/GMNPjD2qVpu8iVFjW3gZ8pebfrVz</p></li>
        </ul>
        </div>
        </>
      </Layout_Page_Parent>
      <style jsx>{`
      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = () => {
  return {
    props: {
      title_header:"VERSIONS(*)",
      pageNames_crumbs:["VERSIONS(*)"],
    },
  };
};

export default Page_Versions;