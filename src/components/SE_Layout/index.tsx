import { ReactChild, ReactChildren } from "react";
import * as THEMES from "src/styles/theme"

type Props = {
  children: ReactChild;
  fill?:boolean;
  center?:boolean;
  grid?:number;
  gap?:string;
  noPadding?:boolean;
};

const SE_Layout = ({children, fill, center, grid, gap, noPadding}: Props) => {
  return (
    <>
      <div className="component">{children}</div>
      <style jsx>{`
        .component {
          width: ${fill ? "100%" : "1000px"};
          display:${grid ? "grid":center ? "flex" : "block"};
          ${grid?["grid-template-columns: repeat(",grid,",1fr);"].join(""):""}
          ${grid?gap?["gap:",gap,";"].join(" "):"":""};
          ${center?"flex-direction:column;\nalign-items:center":""};
          padding-bottom:${noPadding?"0":THEMES.gaps.xxl};
        }

        @media screen and (max-width: 1366px) {
          .component {
            /* width: ${fill ? "100%" : "900px"}; */
          }
        }

        @media screen and (max-width: 1024px) {
          .component {
            width: ${fill ? "100%" : "1000px"};
            padding-left:${THEMES.gaps.xl};
            padding-right:${THEMES.gaps.xl};
          }
        }
      `}</style>
    </>
  );
};

export default SE_Layout;
