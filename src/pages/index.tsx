import fsPromises from "fs/promises";
import path from "path";
import { PageProps_Minimal} from "src/types/dataTypes";

import type { NextPage } from "next";

import * as THEMES from "src/styles/theme";
import Layout_Page_Parent from "src/components/LAYOUT_PAGE_PARENT";
import Parts_Home_Canvas from "src/components/PARTS_HOME_CANVAS";
import Link from "next/link";


const Page_Home: NextPage<PageProps_Minimal> = ({title_header}:PageProps_Minimal) => {
  return (
    <>
      <Layout_Page_Parent title={title_header}>
        <>
        <div className="component">
          <Link href="projects">
          <a><div className="canvas">
            <Parts_Home_Canvas/>
          </div></a>
          </Link>
        </div>
        </>
      </Layout_Page_Parent>
      <style jsx>{`
        .component{
          display:flex;
          align-items:center;
          position:relative;
        }
        
        .canvas{
          height:${THEMES.blockUnits.vert.l};
          position:absolute;
          z-index:1;
          top:calc(50vh -  ${THEMES.blockUnits.m});
          left:50%;
          transform:translate(-50%,-65%);
        }
      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = () => {
  return {
    props: {
      title_header:"HOME",
    },
  };
};

export default Page_Home;
