import fsPromises from "fs/promises";
import path from "path";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { PageProps_Minimal, T_PRJT_DATA, T_PRJT_DATA2, T_MEDIA, T_PRJT_FORMATTED, T_PRJT_IMPORT, T_PRJT_SECTION_FORMATTED, T_MEDIA_FORMATTED } from "src/types";
import PA_Layout from "src/components/PA_Layout";
import SE_PRJT_Catch from "src/components/SE_PRJT_Catch";
import SE_PRJT_Medium from "src/components/SE_PRJT_Medium";
import SE_PRJT_Desc from "src/components/SE_PRJT_Desc";
import SE_PRJT_OtherProjects from "src/components/SE_PRJT_OtherProjects";
import * as THEMES from "src/styles/theme";
import SE_Layout from "src/components/SE_Layout";


type Props = PageProps_Minimal & {
  project:T_PRJT_FORMATTED;
};

const Page_Project: NextPage<Props> = ({project}: Props) => {
  const data={
    title:project.title,
    subtitle:project.subtitle,
    mentions:project.mentions
  };
  const data2 = {
    oneLine:project.oneLine,
    keywords:project.keywords
  }
  return (
    <>
      <PA_Layout>
        <>
          <SE_Layout>
            <SE_PRJT_Catch data={data} data2={data2}/>
          </SE_Layout>   
          
          {/* <SE_Layout custom={true}>
            <SE_PRJT_Medium projectId={projectId} projectFormattedMedium={projectFormattedMedium} />
          </SE_Layout>

          <SE_Layout>
            <SE_PRJT_Desc content_md={projectDesc} />
          </SE_Layout>
          
          <SE_Layout>
              <SE_PRJT_OtherProjects otherProjects={otherProjects} />
          </SE_Layout>
             */}
          <style jsx>{`
            .component {
              /* border-bottom:${THEMES.colors.accent.red} solid 2px; */
              margin-bottom: 100px;
            }

            .imageWrap {
              position: relative;
              width: 100%;
              height: 100%;
            }

            .symbol {
              display: flex;
              justify-content: center;
              padding-top: calc(${THEMES.blockUnits.m} * 2);
              padding-bottom: calc(${THEMES.blockUnits.m} * 2);
            }

            .circle {
              text-align: center;
              width: ${THEMES.blockUnits.m};
              height: ${THEMES.blockUnits.m};
              line-height: ${THEMES.blockUnits.m};
              border-radius: 50%;
              background-color: ${THEMES.colors.text.main};
            }
          `}</style>    
          </>    
      </PA_Layout>
    </>
  );
};

export default Page_Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const jsonFilePath = path.join(process.cwd(), "public/DB/projects/manager.json");
  const data: Buffer = await fsPromises.readFile(jsonFilePath);
  type Json_In = { projects: Json_Project[] };
  const objectData = JSON.parse(data.toString()) as Json_In;
  const projects: Json_Project[] = objectData.projects;
  const paths = projects.map((project, index) => `/projects/${project.asUrl.toLowerCase()}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let pageId = "";
  if (typeof ctx.params?.project === "string") {
    pageId = ctx.params.project;
  }

  const jsonFilePath = path.join(process.cwd(), "public/DB/projects/manager.json");
  const data: Buffer = await fsPromises.readFile(jsonFilePath);
  type T_JSON_IN = { projects: T_PRJT_IMPORT[] };
  const objectData = JSON.parse(data.toString()) as T_JSON_IN;
  const projects: T_PRJT_IMPORT[] = objectData.projects;
  const projectIndex = projects.map((project) => project.asUrl.toLowerCase()).indexOf(pageId);
  const project = projects[projectIndex];

  const formattedSections = await Promise.all(
    project.sections.map(async (section,_is)=>{
      const formattedMedium = await Promise.all(
        section.medium.map(async(media:T_MEDIA,_im)=>{
          const _path = `/DB/projects/${media.path.slice(2)}`;
          const _extPath = media.path;
          if (media.type === "image") {
            return { type: "image", src: _path, formattedContent: "", caption: media.caption };
          } else if (media.type === "video") {
            return { type: "video", src: _path, formattedContent: "", caption: media.caption };
          } else if (media.type === "markdown") {
            const markdownFilePath = path.join(process.cwd(), `public/${_path}`);
            const data_md: string = await fsPromises.readFile(markdownFilePath, "utf-8");
            return { type: "markdown", src: _path, formattedContent: data_md, caption: media.caption };
          } else {
            //if(media.type==="youtube") {
            return { type: "youtube", src: _extPath, formattedContent: "", caption: media.caption };
          }
        })
      )
      return{
        sectionId:section.sectionId,
        sectionTitle:section.sectionTitle,
        oneLine:section.oneLine,
        description:section.description,
        medium:formattedMedium
      } 
    })
  );
  
  const formattedProject = {
    id:project.id,
    asUrl:project.asUrl,
    title:project.title,
    subtitle:project.subtitle,
    oneLine:project.oneLine,
    keywords:project.keywords,
    mentions:project.mentions,
    bannar:project.bannar,
    formattedSections:formattedSections,
    description:project.description
  };


  const otherProjectIndices: number[] = [];

  if (projectIndex !== 0) {
    if (projectIndex !== projects.length - 1) {
      otherProjectIndices.push(projectIndex - 1);
      otherProjectIndices.push(projectIndex + 1);
    } else {
      otherProjectIndices.push(projectIndex - 2);
      otherProjectIndices.push(projectIndex - 1);
    }
  } else {
    otherProjectIndices.push(projectIndex + 1);
    otherProjectIndices.push(projectIndex + 2);
  }

  const otherProjects = otherProjectIndices.map((pIx, _i) => {
    return projects[pIx];
  });

  return {
    props: {
      head: project.asUrl,
      crumbs: ["PROJECTS", project.asUrl],
      bScrollToTop: true,
      project:formattedProject,
      otherProjects,
    },
  };
};
