import fsPromises from "fs/promises";
import path from "path";
import { PageProps_Minimal,Json_Dev } from "src/types";

import type { NextPage } from "next";
import Image from "next/image";

import * as THEMES from "src/styles/theme";
import Layout_Page_Parent from "src/components/PA_Layout";
import { ExtLink } from "src/utils";
import Link from "next/link";
import styled from "styled-components";

type Props = PageProps_Minimal & {
  contents: Json_Dev;
};

const StyleLink = styled.div`
  a{
    text-decoration: underline;
    text-decoration-color: ${THEMES.colors.text.sub};;
    text-underline-offset: 2px;
  }
`

const Page_Dev: NextPage<Props> = ({ title_header,contents }: Props) => {
  return (
    <>
      <Layout_Page_Parent title={title_header}>
        <>
          <div className="component">
            <div className="pageTitle">
              <p>雑多なメモ。これから開発されていくページです。</p>
            </div>


              {contents.map((content,cindex)=>{
                return(
                <div className="section" key={`page_dev_section_${cindex}`}>
                  <div className="sectionTitle">
                    <p>● {content.title}</p>
                  </div>
                  <ul className="sectionTopics">
                    {content.topics.map((topic,tindex)=>
                      <li className="topic" key={`page_dev_section_${cindex}_${tindex}`}>
                        {topic.url.length > 1 
                        ? topic.type==="int" 
                          ? <StyleLink><Link href={topic.url}><a><p>{topic.title}</p></a></Link></StyleLink>
                          : <StyleLink><ExtLink href={topic.url}><p>{topic.title}</p></ExtLink></StyleLink>
                        : <p>{topic.title}</p>
                        }
                      </li>
                    )}
                  </ul>
                </div>
                )
              })}

              
          </div>
        </>
      </Layout_Page_Parent>
      <style jsx>{`
        .component{
        }

        .component p{
          color:${THEMES.colors.text.sub};
        }

        .inlineWrap{
          display:flex;
        }

        .pageTitle p{
          font-size:${THEMES.fontSizes.l};
        }

        .sectionTitle p{
          font-size:${THEMES.fontSizes.m};
        }

        .sectionTopics p{
          font-size:${THEMES.fontSizes.s};
        }

        .pageTitle{
          padding-bottom:${THEMES.blockUnits.hori.m};
        }

        .section{
          border-top:1px solid ${THEMES.colors.accent.red};
          padding-bottom:${THEMES.blockUnits.hori.m};
        }

        .sectionTitle{
          padding-bottom:${THEMES.blockUnits.hori.xs};
        }
      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = async () => {
  const jsonFilePath = path.join(process.cwd(), "public/DB/dev/manager.json");
  const data: Buffer = await fsPromises.readFile(jsonFilePath);
  type Json_In = { contents: Json_Dev };
  const objectData = JSON.parse(data.toString()) as Json_In;
  const contents: Json_Dev = objectData.contents;
  return {
    props: {
      title_header:"DEV(*)",
      pageNames_crumbs:["DEV(*)"],
      contents
    },
  };
};

export default Page_Dev;
