import { T_PROJECT } from "src/types";

import * as THEMES from "src/styles/theme"
import P_CatchCopy from "./PA_Copy";
import P_CatchDescription from "./PA_Description";
import P_CatchVisual from "./PA_Visual";
import P_Titles from "./PA_Titles";

type Props = {
  project: T_PROJECT;
};

const SE_Catch = ({ project }: Props) => {
  return (
    <>
      <div className="component">
        <div className="flexContainer">
          <div className="visual">
            <P_CatchVisual visual={project.catchVisual} />
          </div>
          <div className="container copy-desc">
            <div className="copy">
              <P_CatchCopy text={project.catchCopy} />
            </div>
            <div className="description">
              <P_CatchDescription text={project.catchDescription} />
            </div>
          </div>
        </div>
        <div className="titles">
          <P_Titles title={project.title} subtitle={project.subtitle} />
        </div>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          padding-bottom:${THEMES.blockUnits.s};
        }
        .visual {
          width: 75%;
          padding-right:${THEMES.gaps.l};
        }

        .copy-desc{}

        .copy{
          padding-bottom:${THEMES.gaps.l};
        }

        .titles {
          width: 100%;
        }

        .container {
          width: auto;
        }
        .flexContainer {
          display: flex;
          padding-bottom:${THEMES.gaps.l};
        }
      `}</style>
    </>
  );
};

export default SE_Catch;
