import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import ST_MD_PAPER from "src/styles/ST_MD_PAPER";
import ST_VIDEO from "src/styles/ST_VIDEO";
import * as THEMES from "src/styles/theme";
import { T_MEDIA_FORMATTED } from "src/types";
import PA_Image from "./PA_Image";


type Props = {
  projectId:number;
  projectFormattedMedium:T_MEDIA_FORMATTED[];
}

const SE_PRJT_Medium = ({ projectId, projectFormattedMedium }: Props) => {
  return (
    <>
      <div className="component">
        {projectFormattedMedium.map((data, index) => {
          return (
            <div className={["mediaArea",`item${index}`].join(" ")} key={`{project_${projectId}_mediaArea_${index}}`}>
              <div className="mediaContent">
                {data.type === "image" ? (
                  <PA_Image src={data.src} alt="project image" />
                ) : data.type === "video" ? (
                  <>
                    <ST_VIDEO>
                      <video src={data.src} loop muted autoPlay playsInline />
                    </ST_VIDEO>
                  </>
                ) : data.type === "markdown" ? (
                  <>
                    <div className="markdown_bg">
                      <ST_MD_PAPER>
                        <ReactMarkdown>{matter(data.formattedContent).content}</ReactMarkdown>
                      </ST_MD_PAPER>
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
          display:grid;
          padding:0 100px;
        }

        .mediaArea {
          width: 100%;
          padding-bottom: 75px;
          background-color:green;
        }

        .mediaArea:last-child {
          padding-bottom: 0;
        }

        .mediaContent {
          display: flex;
          justify-content: center;
        }

        .mediaCaption p {
          padding-top: ${THEMES.gaps.s};
          font-size: ${THEMES.fontSizes.xs};
          color: ${THEMES.colors.text.main};
          /* text-align:right; */
        }

        .markdown_bg {
          width: 100%;
          padding: ${THEMES.gaps.l};
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

        .item0{
          width:1000px;
        }
      `}</style>
    </>
  );
};

export default SE_PRJT_Medium;