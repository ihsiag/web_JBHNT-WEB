import fsPromises from "fs/promises";
import path from "path";

import type { NextPage } from "next";

import { PageProps_Minimal, T_PRJT_IMPORTED } from "src/types";
import PA_Layout from "src/components/PA_Layout";
import * as THEMES from "src/styles/theme";
import PA_MiniProject from "src/components/PA_MiniProject";
import SE_Layout from "src/components/SE_Layout";

type Props = PageProps_Minimal & {
  projects: T_PRJT_IMPORTED[];
};

const Page_Projects: NextPage<Props> = ({projects}: Props) => {
  return (
    <>
      <PA_Layout>
        <SE_Layout>
          <>
          <div className="component">
            <div className="SE_PRJTS_Containers">
            {projects.map((project, index) =>
              <div className="PA_MiniProject" key={`SE_PRJTS_Container_${index}`} >
                <PA_MiniProject project={project} />
              </div>
              )}
            </div>
          </div>
          </>
        </SE_Layout>
      </PA_Layout>
      <style jsx>{`
        .component {
        }

        .SE_PRJTS_Containers {
          display: grid;
          grid-template-columns:repeat(3,1fr);
          column-gap: ${THEMES.gaps.m}; 
          row-gap: ${THEMES.gaps.l}; 
          /* border: ${THEMES.colors.accent.gray} 2px solid; */
          /* overflow-x: auto; */
          /* overflow-x: scroll; */
          /* white-space: nowrap; */
          -webkit-overflow-scrolling: touch;
        }

        .PA_MiniProject{
        }

      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = async () => {
  const jsonFilePath = path.join(process.cwd(), "public/DB/araara/manager.json");
  const data: Buffer = await fsPromises.readFile(jsonFilePath);
  type T_JSON_IN = { projects: T_PRJT_IMPORTED[] };
  const objectData = JSON.parse(data.toString()) as T_JSON_IN;
  const projects: T_PRJT_IMPORTED[] = objectData.projects;
  projects.sort((a,b)=>(a.id<b.id?-1:+1));
  return {
    props: {
      head:"PROJECTS",
      crumbs:["PROJECTS"],
      projects
    },
  };
};

export default Page_Projects;