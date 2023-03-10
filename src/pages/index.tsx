import fsPromises from "fs/promises";
import path from "path";
import { PageProps_Minimal} from "src/types";

import type { NextPage } from "next";

import * as THEMES from "src/styles/theme";
import PA_Layout from "src/components/PA_Layout";
import Parts_Home_Canvas from "src/components/PARTS_HOME_CANVAS";
import Link from "next/link";
import SE_Layout from "src/components/SE_Layout";


const Page_Home: NextPage<PageProps_Minimal> = () => {
  return (
    <>
      <PA_Layout noPadding={true}>
        <SE_Layout custom={true}>
        <>
        <div className="component">
          <Link href="projects">
          <a><div className="canvas">
            <Parts_Home_Canvas/>
          </div></a>
          </Link>
        </div>
        </>
        </SE_Layout>
      </PA_Layout>
      <style jsx>{`
        .component{
          display:flex;
          align-items:center;
          position:relative;
        }
        
        .canvas{
          width:100%;
          height:100vh;
          position:absolute;
          z-index:-1;
          /* background-color:green; */
        }
      `}</style>
    </>
  );
};


export const getStaticProps = () => {
  return {
    props: {
      head:"HOME",
    },
  };
};

export default Page_Home;
