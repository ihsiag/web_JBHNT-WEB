import fsPromises from "fs/promises";
import path from "path";

import type { NextPage } from "next";

import { PageProps_Minimal, T_PRJT_IMPORTED } from "src/types";
import PA_Layout from "src/components/PA_Layout";
import * as THEMES from "src/styles/theme";
import SE_PRJTS_Container from "src/components/SE_PRJTS_Container";
import PA_MiniProject from "src/components/PA_MiniProject";
import { MutableRefObject, useEffect, useRef, useState} from "react";

type Props = PageProps_Minimal & {
  projects: T_PRJT_IMPORTED[];
};

const Page_Projects: NextPage<Props> = ({projects}: Props) => {
  const screenRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [bWheel,setBWheel] = useState(false);
  const horizontalScroll = (e:WheelEvent)=>{
    if(bWheel)return;
    e.preventDefault();
    setBWheel(true);
    setTimeout(()=>{
      screenRef.current.scrollLeft += e.deltaY*10;
      setBWheel(false);
    },5);
  }
  useEffect(()=>{
  //   screenRef.current!.onwheel = ev => {
  //     ev.preventDefault()

  //     let delta = (ev.deltaY / Math.abs(ev.deltaY)) * window.innerWidth
  //     if (delta > 0) {
  //         delta += screenRef.current!.scrollLeft
  //         delta = Math.floor(delta / window.innerWidth) * window.innerWidth
  //     } else {
  //         delta += screenRef.current!.scrollLeft
  //         delta = Math.ceil(delta / window.innerWidth) * window.innerWidth
  //     }
  //     screenRef.current!.scrollLeft = delta
  // }
    screenRef.current.addEventListener("wheel",horizontalScroll);
    return ()=>screenRef.current&&screenRef.current.removeEventListener("wheel",horizontalScroll);
  },[])
  return (
    <>
      <PA_Layout>
        <>
        <div className="component">
          <div className="SE_PRJTS_Containers hideScrollBar " ref={screenRef}>
          {projects.map((project, index) =>
            // <SE_PRJTS_Container
            //   key={`SE_PRJTS_Container_${index}`}
            //   projectForContainer={{
            //     urlToProject: `/projects/${project.asUrl.toLowerCase()}`,
            //     bannar: {
            //       path:`/DB/projects/${project.bannar.path.slice(2)}`,
            //       bVideo:project.bannar.bVideo
            //     },
            //     client: project.client,
            //     abstract: project.abstract,
            //     title:project.title,
            //     mentions:project.mentions,
            //     year: project.year.toString(),
            //     tags: project.tags,
            //   }}
            // />
            <div className="PA_MiniProject" key={`SE_PRJTS_Container_${index}`} >
              <PA_MiniProject project={project} />
            </div>
            )}
          </div>
        </div>
        </>
      </PA_Layout>
      <style jsx>{`
        .component {
        }

        .SE_PRJTS_Containers {
          display: flex;
          column-gap: ${THEMES.gaps.m}; 
          /* border: ${THEMES.colors.accent.gray} 2px solid; */
          overflow-x: auto;
          /* overflow-x: scroll; */
          scroll-behavior: smooth;
          overflow-y:none;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }

        .PA_MiniProject{
          width:45%;
          flex-grow:0;
          flex-shrink:0;
        }

        .hideScrollBar{
          scrollbar-width: none;
        }

        .hideScrollBar::-webkit-scrollbar{/*スクロールバー非表示（Chrome・Safari）*/
          display:none;
        }
      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = async () => {
  const jsonFilePath = path.join(process.cwd(), "public/DB/PROJECTS/manager.json");
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