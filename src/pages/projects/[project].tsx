import fsPromises from "fs/promises";
import path from "path";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils";
import Image from "next/image";
import styled from "styled-components";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout_Page_Parent from "src/components/LAYOUT_PAGE_PARENT";

import { useState } from "react";
import { PageProps_Minimal, Json_Project, LoadedNextImage } from "src/types/dataTypes";
import { type } from "os";
import { info } from "console";

type Project_MediaData = {
  type: string;
  src: string;
  formattedContent: string;
  caption: string;
};

type Project_InfoData = {
  title: string;
  oneLine: string;
  mentions: string[];
};

type Project_TagData = {
  year: number;
  client: string;
  abstract: string;
  tags: string[];
};

type Project_DescData = {
  description: string;
  //credit
};

const StyleNextImage = styled.div`
  & > span img {
    position: relative !important; //to hold apect
    width: 100% !important; //to hold apect
    height: unset !important; //to hold apect
  }
  & > span {
    border-radius: ${THEMES.rs.xs};

    position: unset !important; //to hold apect
  }
`;
const StyleReactMarkdown = styled.div`
  font-family: ${THEMES.fontFamilies.gsans};
  font-weight: ${THEMES.fontWeights.n};
  min-height: calc(${THEMES.blockUnits.l} * 2);
  max-width: 800px;
  background-color: ${THEMES.colors.bg.main};
  padding: calc(${THEMES.blockUnits.m} * 2) ${THEMES.paddings.xl} calc(${THEMES.blockUnits.m} * 2) ${THEMES.paddings.xl};
  border-radius: ${THEMES.rs.xs};
  /* border:solid 1px ${THEMES.colors.accent.red}; */
  filter: drop-shadow(${THEMES.dropShadows.default});
  h1 {
    font-family: ${THEMES.fontFamilies.gsans};
    font-size: ${THEMES.fontSizes.l};
    padding-bottom: ${THEMES.paddings.vert.l};
  }
  h1 em {
  }
  h1 strong {
    font-size: ${THEMES.fontSizes.m};
    font-weight: ${THEMES.fontWeights.sub.b};
  }
  h4 {
    font-size: ${THEMES.fontSizes.m};
    font-weight: ${THEMES.fontWeights.n};
    text-align: right;
    padding-top: ${THEMES.paddings.vert.l};
  }
  p {
    font-size: ${THEMES.fontSizes.m};
    font-weight: ${THEMES.fontWeights.n};
    line-height: ${THEMES.lineHeights.wide};
    letter-spacing: 1.5px;
    padding-bottom: ${THEMES.paddings.vert.m};
  }

  p strong {
    font-weight: ${THEMES.fontWeights.b};
  }
`;
const StyleVideo = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(${THEMES.dropShadows.weak});
  & video {
    border-radius: ${THEMES.rs.s};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyleMarkDown = styled.div`
  & p {
    font-size: ${THEMES.fontSizes.m};
    line-height: 2;
    letter-spacing: 0.075rem;
    font-weight: ${THEMES.fontWeights.n};
  }

  & a {
    display: inline;
    width: fit-content;
    text-decoration: underline;
    text-underline-offset: 2px;
    padding: 0 ${THEMES.paddings.hori.s};
    transition-duration: ${THEMES.animations.duration.l};
    border-radius: ${THEMES.rs.xs};
  }

  & a:hover {
    background-color: ${THEMES.colors.accent.red};
  }
`;

const StyleOtherProjectVideo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  & video {
    border-radius: ${THEMES.rs.s};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyeldOtherProjectImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  & span {
    border-radius: ${THEMES.rs.s};
  }
`;

type Props = PageProps_Minimal & {
  projectId: number;
  infoData: Project_InfoData;
  tagData: Project_TagData;
  descData: Project_DescData;
  mediumData: Project_MediaData[];
  otherProjects: Json_Project[];
};

const Page_Project: NextPage<Props> = ({ title_header, projectId, infoData, tagData, descData, mediumData, otherProjects }: Props) => {
  return (
    <>
      <Layout_Page_Parent title={title_header}>
        <>
          <div className="component">
            <div className="test">
              <div className="infoArea">
                <InParts_Info infoData={infoData} />
              </div>
              <div className="tagArea">
                <InParts_Tag tagData={tagData} />
              </div>

              {/* <h1>開発中のページです。</h1> */}
            </div>

            <div className="midumArea">
              <InParts_Medium projectId={projectId} mediumData={mediumData} />
            </div>
            <div className="symbol section">
              <div className="circle"></div>
            </div>
            <div className="descArea">
              <InParts_Desc descData={descData} />
            </div>
            <div className="symbol section">
              <div className="circle"></div>
            </div>
            <div className="creditArea"></div>
            <div className="otherProjectsArea">
              <InParts_OtherProjects otherProjects={otherProjects} />
            </div>
          </div>
          <style jsx>{`
            .component {
              /* border-bottom:${THEMES.colors.accent.red} solid 2px; */
              margin-bottom: 100px;
            }

            .test {
              display: flex;
              padding-top: 100px;
              padding-bottom: 50px;
              margin-bottom: 50px;
              border-bottom: 2px solid ${THEMES.colors.accent.gray};
            }

            .infoArea {
              /* width:calc(200% / 3); */
            }

            .tagArea {
              /* width:calc(100% / 3); */
            }

            .descArea {
              /* padding-bottom:calc(${THEMES.blockUnits.m} * 3); */
            }

            .mediumArea {
              width: 100%;
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
      </Layout_Page_Parent>
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
  type Json_In = { projects: Json_Project[] };
  const objectData = JSON.parse(data.toString()) as Json_In;
  const projects: Json_Project[] = objectData.projects;
  const projectIndex = projects.map((project) => project.asUrl.toLowerCase()).indexOf(pageId);
  const project = projects[projectIndex];

  const projectId = project.id;

  const infoData: Project_InfoData = {
    title: project.title,
    oneLine: project.oneLine,
    mentions: project.mentions,
  };

  const tagData: Project_TagData = {
    year: project.year,
    client: project.client,
    abstract: project.abstract,
    tags: project.tags,
  };

  const descData: Project_DescData = {
    description: project.description,
    //credit
  };

  const mediumData: Project_MediaData[] = await Promise.all(
    project.medium.map(async (media) => {
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
  );

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
      title_header: project.asUrl,
      pageNames_crumbs: ["PROJECTS", project.asUrl],
      bScrollToTop: true,
      projectId,
      infoData,
      tagData,
      descData,
      mediumData,
      otherProjects,
    },
  };
};

const InParts_Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <div className="imageWrap">
        <StyleNextImage>
          <Image src={src} alt={alt} quality={100} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
        </StyleNextImage>
      </div>
      <style jsx>{`
        .imageWrap {
          width: 100%;
          filter: drop-shadow(${THEMES.dropShadows.weak});
        }
      `}</style>
    </>
  );
};
const InParts_Tag = ({ tagData }: { tagData: Project_TagData }) => {
  return (
    <>
      <div className="component">
        <ul className="dataBlocks">
          <li className="year">
            <p>{tagData.year.toString().toUpperCase()},</p>
          </li>
          <li className="client">
            <p>{tagData.client.toUpperCase()},</p>
          </li>
          <li className="abst">
            <p>{tagData.abstract.toUpperCase()},</p>
          </li>
          <li className="tags">
            {tagData.tags.map((tag, index) => (
              <div key={`parts_projects_projectContainer_tags_${index}`} className="tag">
                <p className="text">● {tag.toUpperCase()}</p>
                <p className="splitter">,</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          height: 100%;
          /* border-left:1px solid ${THEMES.colors.text.main}; */
          padding-left: ${THEMES.paddings.hori.l};
        }

        .component p {
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.n};
          line-height: ${THEMES.lineHeights.wide};
          letter-spacing: 1.2px;
          /* text-align:right; */
        }

        .dataBlocks {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: ${THEMES.gaps.hori.l};
          background-color: ${THEMES.colors.bg.sub};
          border-radius: ${THEMES.rs.s};
          /* border-left:2px solid ${THEMES.colors.accent.gray}; */
        }

        .year p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.n};
        }

        .tags {
          display: flex;
          /* justify-content: flex-end; */
          flex-wrap: wrap;
        }

        .tag {
          display: flex;
          width: fit-content;
        }

        .tag p {
          padding-right: ${THEMES.gaps.hori.m};
        }
      `}</style>
    </>
  );
};
const InParts_Info = ({ infoData }: { infoData: Project_InfoData }) => {
  return (
    <>
      <div className="component">
        <ul className="dataBlocks">
          <li className="title">
            <p>{infoData.title.length > 0 ? infoData.title : "---"}</p>
          </li>
          <li className="oneLine">
            <p>{infoData.oneLine}</p>
          </li>
          <li className="mentions">
            {infoData.mentions.map((mention, _i) => (
              <p key={`project_inParts_desc_${_i}`}>- {mention}</p>
            ))}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .component {
          /* border-left:2px solid ${THEMES.colors.text.main}; */
        }

        .dataBlocks {
          /* background-color:${THEMES.colors.bg.sub};
      border-radius:${THEMES.rs.s}; */
          padding: ${THEMES.gaps.hori.l};
        }

        .title p {
          font-size: ${THEMES.fontSizes.xl};
          /* font-weight:${THEMES.fontWeights.b}; */
        }

        .oneLine p {
          font-size: ${THEMES.fontSizes.m};
        }

        .mentions p {
          font-size: ${THEMES.fontSizes.s};
        }

        .description p {
          font-size: ${THEMES.fontSizes.s};
        }

        .title {
          padding-bottom: ${THEMES.paddings.vert.m};
        }

        .oneLine {
          padding-bottom: ${THEMES.paddings.vert.m};
        }
      `}</style>
    </>
  );
};
const InParts_Desc = ({ descData }: { descData: Project_DescData }) => {
  return (
    <>
      <div className="component">
        <div className="description">
          <StyleMarkDown>
            <ReactMarkdown linkTarget={"_blank"} transformLinkUri={null}>
              {descData.description}
            </ReactMarkdown>
          </StyleMarkDown>
        </div>
      </div>
      <style jsx>{`
        .component {
          /* border-left:2px solid ${THEMES.colors.accent.red};
        border-right:2px solid ${THEMES.colors.accent.red}; */
          padding-left: 25px;
        }
      `}</style>
    </>
  );
};
const InParts_Medium = ({ projectId, mediumData }: { projectId: number; mediumData: Project_MediaData[] }) => {
  return (
    <>
      <div className="component">
        {mediumData.map((data, index) => {
          return (
            <div className="mediaArea" key={`{project_${projectId}_mediaArea_${index}}`}>
              <div className="mediaContent">
                {data.type === "image" ? (
                  <InParts_Image src={data.src} alt="project image" />
                ) : data.type === "video" ? (
                  <>
                    <StyleVideo>
                      <video src={data.src} loop muted autoPlay playsInline />
                    </StyleVideo>
                  </>
                ) : data.type === "markdown" ? (
                  <>
                    <div className="markdown_bg">
                      <StyleReactMarkdown>
                        <ReactMarkdown>{matter(data.formattedContent).content}</ReactMarkdown>
                      </StyleReactMarkdown>
                    </div>
                  </>
                ) : data.type === "youtube" ? (
                  <>
                    <div className="youtubeArea">
                      <iframe
                        className="youtube"
                        width="560"
                        height="315"
                        src={data.src}
                        title="YouTube video player"
                        // frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="mediaCaption">
                <p>{data.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .component {
          width: 100%;
        }

        .mediaArea {
          width: 100%;
          padding-bottom: 75px;
        }

        .mediaArea:last-child {
          padding-bottom: 0;
        }

        .mediaContent {
          display: flex;
          justify-content: center;
        }

        .mediaCaption p {
          padding-top: ${THEMES.gaps.vert.m};
          font-size: ${THEMES.fontSizes.xs};
          color: ${THEMES.colors.text.main};
          /* text-align:right; */
        }

        .markdown_bg {
          width: 100%;
          padding: ${THEMES.paddings.vert.l};
          display: flex;
          justify-content: center;
        }

        .youtubeArea {
          width: 100%;
          padding-top: 56.25%;
          position: relative;
          border-radius: ${THEMES.rs.xs};
        }

        .youtube {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: ${THEMES.rs.xs};
        }
      `}</style>
    </>
  );
};

const InParts_OtherProjects = ({ otherProjects }: { otherProjects: Json_Project[] }) => {
  return (
    <>
      <div className="component">
        <div className="title">
          <p>FIND MORE ...</p>
        </div>
        <div className="otherProjectContainers">
          {otherProjects.map((p, _i) => (
            <div className="otherProjectContainer" key={`InParts_OtherProjects_${p.id}_${_i}`}>
              <Link href={`/projects/${p.asUrl.toLowerCase()}`} scroll={false}>
                <a>
                  <InParts_OtherProjectContainer project={p} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
        }

        .title {
          padding-bottom: ${THEMES.paddings.vert.m};
        }

        .title p {
          font-size: ${THEMES.fontSizes.l};
        }

        .otherProjectContainers {
          display: flex;
        }

        .otherProjectContainer:first-child {
          padding-right: ${THEMES.paddings.hori.m};
        }

        .otherProjectContainer:last-child {
          padding-left: ${THEMES.paddings.hori.m};
        }
      `}</style>
    </>
  );
};

const InParts_OtherProjectContainer = ({ project }: { project: Json_Project }) => {
  return (
    <>
      <div className="component">
        <div className="visualBlock">
          <div className="imageArea">
            {project.bannar.bVideo ? (
              <StyleOtherProjectVideo>
                <video src={`/DB/projects/${project.bannar.path.slice(2)}`} loop muted autoPlay playsInline />
              </StyleOtherProjectVideo>
            ) : (
              <StyeldOtherProjectImage>
                <Image
                  src={`/DB/projects/${project.bannar.path.slice(2)}`}
                  alt="bannr image"
                  quality={40}
                  priority={false}
                  loading={"lazy"}
                  unoptimized={false}
                  layout={"fill"}
                  objectFit={"cover"}
                  blurDataURL="data:image/jpeg;base64,"
                  placeholder="blur"
                />
              </StyeldOtherProjectImage>
            )}
          </div>
        </div>
        <ul className="dataBlock">
          <li className="one">
            <div className="client">
              <p>{project.client},</p>
            </div>
            <div className="abstract">
              <p>{project.abstract},</p>
            </div>
          </li>

          <li className="two">
            <div className="title">{project.title?.length > 1 ? <p>{project.title},</p> : <p>---,</p>}</div>
          </li>

          <li className="two">
            <div className="year">
              <p>{project.year},</p>
            </div>
          </li>

          <li className="three">
            <div className="tags">
              <p>{project.tags.join(" / ").length > 60 ? project.tags.join(" / ").substring(0, 50) + "..." : project.tags.join(" / ")}</p>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          height: 100%;
          border-radius: ${THEMES.rs.s};
          background-color: ${THEMES.colors.bg.sub};
          filter: drop-shadow(${THEMES.dropShadows.default});
          transition-duration: ${THEMES.animations.duration.m};
        }

        .component:hover {
          filter: drop-shadow(${THEMES.dropShadows.hovered});
          /* transform:scale(1.01); */
          transform: translateY(-2px);
          backface-visibility: hidden; /* animation時のにじみ防止 */
          -webkit-backface-visibility: hidden; /* animation時のにじみ防止 */
          -webkit-font-smoothing: antialiased; /* animation時の文字にじみ防止 */
        }

        .component p {
          font-size: ${THEMES.fontSizes.m};
        }

        .visualBlock {
          padding: ${THEMES.paddings.hori.m};
          padding-bottom: ${THEMES.paddings.hori.l};
        }

        .imageArea {
          width: 100%;
          padding-top: calc(100% / 1.6);
          position: relative;
          filter: grayscale(40%);
        }

        .dataBlock {
          width: 100%;
          padding: ${THEMES.paddings.hori.m};
          padding-bottom: ${THEMES.paddings.hori.l};
          transition-duration: 0.2s;
        }

        .dataBlock li {
          padding-left: ${THEMES.paddings.hori.m};
          border-left: 3px solid ${THEMES.colors.accent.gray};
          transition-duration: ${THEMES.animations.duration.m};
        }

        .dataBlock .one p {
          font-size: ${THEMES.fontSizes.l};
          font-weight: ${THEMES.fontWeights.b};
        }

        .dataBlock .one,
        .dataBlock .three {
          padding-bottom: ${THEMES.paddings.hori.m};
        }

        .component:hover .dataBlock > li {
          background-color: ${THEMES.colors.accent.gray};
        }
      `}</style>
    </>
  );
};
