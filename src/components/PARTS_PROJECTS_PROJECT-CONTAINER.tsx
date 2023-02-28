import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import * as UTILS from "src/utils";
import * as THEMES from "src/styles/theme";
import { useState, memo } from "react";
import { Json_Bannar, LoadedNextImage } from "src/types/dataTypes";

type Props = {
  methodIsIndex: boolean;
  data: {
    urlToProject: string;
    bannar: Json_Bannar;
    client: string;
    abstract: string;
    title: string;
    mentions?: string[];
    year: string;
    tags: string[];
    selectedTags:string[];
  };
};

const StyleDataArea  = styled.div<{methodIsIndex:boolean}>`
.dataBlocks {
  background-color: ${THEMES.colors.bg.sub};
  /* background-color:red; */
  padding: ${THEMES.paddings.vert.m} ${THEMES.paddings.hori.m} ${THEMES.blockUnits.s};
  transition-duration:${(props)=> props.methodIsIndex ? THEMES.animations.duration.xs : "0s"};
}

.dataBlocks:hover{
  background-color: ${(props)=>props.methodIsIndex ? THEMES.colors.accent.gray : THEMES.colors.bg.sub};
}

.dataBlock:last-child {
  border-bottom: ${THEMES.colors.text.sub} 1px solid;
}

.one {
  display: flex;
  justify-content: flex-start;
  padding-bottom: ${THEMES.blockUnits.s};
}

.one p {
  font-size: ${THEMES.fontSizes.l};
  font-weight: ${THEMES.fontWeights.b};
}

.one div {
  width: fit-content;
  padding-left: ${THEMES.gaps.hori.l};
}

.one div:first-child {
  padding-left: 0;
}

.two p,.three p{
  font-size:${THEMES.fontSizes.s};
}

.three .tags {
  display: flex;
  justify-content: flex-start;
}

.tag{
  display:flex;
  width:fit-content;
}

.tag p{
  padding-right:${THEMES.gaps.hori.m};
}

.tagSelected{
  background:linear-gradient(transparent 55%, ${UTILS.rgbNums2rgbCss(UTILS.hex2rgb(THEMES.colors.accent.red),0.7)} 0%)
}

.three {
  padding-bottom: ${THEMES.blockUnits.s};
}
`;

const StyleVisualArea = styled.div`
.visualBlock {
display: flex;
justify-content: center;
padding: 75px 0;
}

.visualArea {
width: 70%;
}
`;

const StyleImageWrap = styled.div`
& > span img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  
  position: relative !important; //to hold apect
  width: 100% !important; //to hold apect
  height: unset !important; //to hold apect
}
& > span {
  border-radius: ${THEMES.rs.xs};
  filter: drop-shadow(${THEMES.dropShadows.default});
  transition-duration: ${THEMES.animations.duration.l};

  position: unset !important; //to hold apect
}

& > span:hover {
  transform: scale(1.01);
  filter: drop-shadow(${THEMES.dropShadows.hovered_strong});
}
`;

const StyleVideoWrap = styled.div`
& > video {
width: 100%;
height: 100%;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
border-radius: ${THEMES.rs.xs};
filter: drop-shadow(${THEMES.dropShadows.default});
transition-duration: ${THEMES.animations.duration.l};
}

& > video:hover {
transform: scale(1.01);
filter: drop-shadow(${THEMES.dropShadows.hovered_strong});
}
`;

const Parts_Projects_ProjectContainer = ({ methodIsIndex, data }: Props) => {
  // console.log(methodIsIndex);



  const Parts_Data = () => {
    return (
      <>
        <div className="dataBlocks">
          <div className="dataBlock one">
            <div className="client">
              <p>{data.client},</p>
            </div>
            <div className="abstract">
              <p>{data.abstract},</p>
            </div>
          </div>

          <div className="dataBlock two">
            <div className="title">
              {data.title?.length>1
              ? <p>{data.title},</p>
              :<p>---,</p>
              }
             
            </div>
          </div>
          
          <div className="dataBlock two">
            <div className="year">
              <p>{data.year},</p>
            </div>
          </div>

          <div className="dataBlock three">
            <div className="tags">
              {data.tags.map((tag, index) => (
              <div key={`parts_projects_projectContainer_tags_${index}`} className="tag">
                {data.selectedTags.includes(tag)
                  ?<p className="tagSelected">{tag}</p>
                  :<p>{tag}</p>
                }
                <p>/</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const Parts_Visual = () => {
    return (
      <>
        <div className="visualBlock">
          <div className="visualArea">
            <Link href={data.urlToProject} scroll={false}>
              <a>
                {data.bannar.bVideo ? (
                  <StyleVideoWrap>
                    <video src={data.bannar.path} loop muted autoPlay playsInline />
                  </StyleVideoWrap>
                ) : (
                  <StyleImageWrap>
                    <Image
                      src={data.bannar.path}
                      alt="bannr image"
                      quality={40}
                      priority={false}
                      loading={"lazy"}
                      unoptimized={false}
                      layout={"fill"}
                      objectFit={"contain"}
                      blurDataURL="data:image/jpeg;base64,"
                      placeholder="blur"
                    />
                  </StyleImageWrap>
                )}
              </a>
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="component">
        {methodIsIndex ? (
          <Link href={data.urlToProject} scroll = {false}>
            <a>
              <StyleDataArea methodIsIndex={methodIsIndex}>
                <Parts_Data />
              </StyleDataArea>
            </a>
          </Link>
        ) : (
          <StyleDataArea methodIsIndex = {methodIsIndex}>
            <Parts_Data />
          </StyleDataArea>
        )}
        {methodIsIndex == false && (
          <StyleVisualArea>
            <Parts_Visual />
          </StyleVisualArea>
        )}
      </div>

      <style jsx>{`
        .component {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default memo(Parts_Projects_ProjectContainer);
