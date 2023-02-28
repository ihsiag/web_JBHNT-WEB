import fsPromises from "fs/promises";
import path from "path";
import { PageProps_Minimal,Json_Info } from "src/types/dataTypes";

import type { NextPage } from "next";
import Image from "next/image";

import * as THEMES from "src/styles/theme";
import Layout_Page_Parent from "src/components/LAYOUT_PAGE_PARENT";
import Parts_Info_Intro_Names from "src/components/PARTS_INFO_INTRO_NAMES";
import Parts_Info_Intro_Texts from "src/components/PARTS_INFO_INTRO_TEXTS";
import Parts_Info_Intro_Abst from "src/components/PARTS_INFO_INTRO_ABST";
import Parts_Venn_Canvas from "src/components/PARTS_VENN_CANVAS";
import Parts_Info_Careers from "src/components/PARTS_INFO_CAREERS";

type Props = PageProps_Minimal & {
  info: Json_Info;
};

const Page_Info: NextPage<Props> = ({ title_header,info }: Props) => {
  return (
    <>
      <Layout_Page_Parent title={title_header}>
        <>
          <div className="component">

            <div className="intro_name section">
              <Parts_Info_Intro_Names name={info.introduction.name} role={info.introduction.role}/>
            </div>

            <div className="intro_abst section">
              <Parts_Info_Intro_Abst abst={info.introduction.abst}/>
            </div>  

            <div className="intro_text section">
              <Parts_Info_Intro_Texts texts={info.introduction.texts} />
            </div>

            {/* <div className="intro_venn section">
              <div className="imgWrap">
                <Image src ="/element/venn.png" layout="fill" objectFit="contain"/>
              </div>
            </div> */}

            <div className="symbol section">
              <div className="circle"></div>
            </div>

            <div className="intro_career_histories section">
              <Parts_Info_Careers title={"略歴"} contentList={info.career.histories} />
            </div>

            <div className="intro_career_histories section">
              <Parts_Info_Careers title ={"展示/選出/受賞"} contentList={info.career.opportunities} />
            </div>

          </div>
        </>
      </Layout_Page_Parent>
      <style jsx>{`
        .component{
        }

        .section{
          padding-bottom:calc(${THEMES.blockUnits.m} * 2);
        }

        .intro_name{
          padding-top:150px;
        }

        .intro_abst{
          padding-bottom:${THEMES.blockUnits.m};
        }

        .intro_venn{
          /* height:${THEMES.blockUnits.vert.l}; */
          height:800px;
          padding-bottom:${THEMES.blockUnits.vert.m};
        }

        .imgWrap{
          position:relative;
          width:100%;
          height:100%;
        }

        .symbol{
          display:flex;
          justify-content:center;
        }

        .circle{
          text-align:center;
          width:${THEMES.blockUnits.l};
          height:${THEMES.blockUnits.l};
          line-height: ${THEMES.blockUnits.l};
          border-radius:50%;
          background-color:${THEMES.colors.text.main};
        }
      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = async () => {
  const jsonFilePath = path.join(process.cwd(), "public/DB/info/manager.json");
  const data: Buffer = await fsPromises.readFile(jsonFilePath);
  type Json_In = { info: Json_Info };
  const objectData = JSON.parse(data.toString()) as Json_In;
  const info: Json_Info = objectData.info;
  return {
    props: {
      title_header:"INFO",
      pageNames_crumbs:["INFO"],
      info
    },
  };
};

export default Page_Info;
