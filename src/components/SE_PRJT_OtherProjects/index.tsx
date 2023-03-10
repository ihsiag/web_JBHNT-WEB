import Link from "next/link";

import { T_PRJT_ALL } from "src/types";
import PA_MiniProject from "../PA_MiniProject";
import * as THEMES from "src/styles/theme";

const SE_PRJT_OtherProjects = ({ otherProjects }: { otherProjects: T_PRJT_ALL[] }) => {
  return (
    <>
      <div className="component">
        <div className="title">
          <p>FIND MORE ...</p>
        </div>
        <div className="otherProjectContainers">
          {otherProjects.map((p, _i) => (
            <div className="otherProjectContainer" key={`InParts_OtherProjects_${p.id}_${_i}`}>
                <PA_MiniProject project={p} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
        }

        .title {
          padding-bottom: ${THEMES.gaps.m};
        }

        .title p {
          font-size: ${THEMES.fontSizes.l};
        }

        .otherProjectContainers {
          display: flex;
        }

        .otherProjectContainer:first-child {
          padding-right: ${THEMES.gaps.m};
        }

        .otherProjectContainer:last-child {
          padding-left: ${THEMES.gaps.m};
        }
      `}</style>
    </>
  );
};

export default SE_PRJT_OtherProjects;