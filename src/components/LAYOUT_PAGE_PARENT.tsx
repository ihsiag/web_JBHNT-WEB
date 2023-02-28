import { ReactChild } from "react";
import * as THEMES from "src/styles/theme";

type Props = {
  children?: ReactChild;
};

const Layout_Page_Parent = ({ children }: Props) => {
  return (
    <>
      <div className="component">
        <div className="contentArea">{children}</div>
      </div>
      <style jsx>{`
        .component {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${THEMES.colors.bg.main};
          min-height: 100vh;
        }

        .contentArea {
          width: 1000px;
          padding: ${THEMES.blockUnits.xs} 0 ${THEMES.blockUnits.xs} 0;
        }

        @media screen and (max-width: 1366px) {
          .contentArea {
            width: 900px;
          }
        }

        @media screen and (max-width: 1024px) {
          .contentArea {
            width: 100%;
            padding: 0 50px 0 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Layout_Page_Parent;
