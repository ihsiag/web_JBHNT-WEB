import ST_IMAGE from "src/styles/ST_IMAGE";
import ST_VIDEO from "src/styles/ST_VIDEO";
import { T_PRJT_IMPORTED } from "src/types";
import Image from "next/image";

import * as THEMES from "src/styles/theme"
import Link from "next/link";

type Props ={
  project: T_PRJT_IMPORTED;
}

const PA_MiniProject = ({ project }: Props) => {
  return (
    <>
      <div className="component">
      <Link href={`/projects/${project.asUrl.toLowerCase()}`} scroll={false}>
                <a>
        <div className="visualBlock">
          <div className="imageArea">
            {project.bannar.bVideo ? (
              <ST_VIDEO abs={true}>
                <video src={`/DB/projects/${project.bannar.path.slice(2)}`} loop muted autoPlay playsInline />
              </ST_VIDEO>
            ) : (
              <ST_IMAGE abs={true}>
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
              </ST_IMAGE>
            )}
          </div>
        </div>
        <ul className="dataBlock">
          <li className="one">
            <div className="title">
              <p>{project.title},</p>
            </div>
            <div className="subtitle">
              <p>{project.subtitle},</p>
            </div>
          </li>

          <li className="two">
            {/* <div className="title">{project.title?.length > 1 ? <p>{project.title},</p> : <p>---,</p>}</div> */}
          </li>

          <li className="two">
            <div className="year">
              <p>{project.id},</p>
            </div>
          </li>

          <li className="three">
            <div className="tags">
              <p>{project.keywords.join(" / ").length > 60 ? project.keywords.join(" / ").substring(0, 50) + "..." : project.keywords.join(" / ")}</p>
            </div>
          </li>
        </ul>
        </a></Link>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          height: 100%;
          border-radius: ${THEMES.rs.s};
          background-color: ${THEMES.colors.bg.sub};
          filter: drop-shadow(${THEMES.dropShadows.default});
          transition-duration: ${THEMES.durations.m};
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
          padding: ${THEMES.gaps.m};
          padding-bottom: ${THEMES.gaps.l};
        }

        .imageArea {
          width: 100%;
          padding-top: calc(100% / 1.6);
          position: relative;
          filter: grayscale(40%);
        }

        .dataBlock {
          width: 100%;
          padding: ${THEMES.gaps.m};
          padding-bottom: ${THEMES.gaps.l};
          transition-duration: 0.2s;
        }

        .dataBlock li {
          padding-left: ${THEMES.gaps.m};
          border-left: 3px solid ${THEMES.colors.accent.gray};
          transition-duration: ${THEMES.durations.m};
        }

        .title p {
          /* color:${THEMES.colors.text.sub}; */
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.b};
        }

        .subtitle p{
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.b};
        }

        .tags p{
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.n};
        }

        .dataBlock .one,
        .dataBlock .three {
          padding-bottom: ${THEMES.gaps.m};
        }

        .component:hover .dataBlock > li {
          background-color: ${THEMES.colors.accent.gray};
        }
      `}</style>
    </>
  );
};

export default PA_MiniProject;