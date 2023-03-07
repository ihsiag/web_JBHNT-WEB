import Link from "next/link";
import { useState,useEffect} from "react";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";
import Parts_Menu from "./PARTS_MENU";

import Svg_Link_Back from "./SVG_LINK_BACK";
import Svg_Link_Top from "./SVG_LINK_TOP";

type Props = {
  pageNames?: string[];
};

const Parts_Breadcrumbs = ({ pageNames }: Props) => {
  const colorWhenHovered = UTILS.hex2rgb(THEMES.colors.accent.gray);
  const createLink = (_pageNames: string[], _index: number) => {
    let _link = "";
    for (let i = 0; i < _index + 1; i++) {
      _link += `/${_pageNames[i].split("(")[0].toLowerCase()}`;
    }
    return _link;
  };



  return (
    <>
      <div className="component">
        <nav className="crumbs">
            <div className="crumb gkwebWrap">
              <Link href="/"><a>
                  {/* <div className="crumbContent"><p>{">> "}<span className={pageNames?"":"underline"}>GKWEB</span></p></div> */}
                  <div className="crumbContent gkweb"><p> {">> "}<span >GKWEB</span></p></div>
                  <div className="crumbContent separator"><p>/</p></div>
              </a></Link>
              <div className="menu">
                <Parts_Menu/>
              </div>
            </div>
          {pageNames?.map((pageName, index) => (
            <div key={`parts_breadcrumbs_${pageName}`} className="crumb">
              <Link href={createLink(pageNames, index)} scroll={false}><a>
                <div className="crumbContent"><p>{pageName.toUpperCase()}</p></div>
                <div className="crumbContent"><p>/</p></div>
              </a></Link>
            </div>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .component {
          position:fixed;
          z-index:300;
          top:0;
          left:0;
          display:block;
          width: 100%;
          /* background-color:green; */
        }

        .component p{
          font-size:${THEMES.fontSizes.m};
          line-height:${THEMES.lineHeights.default};
          font-weight:${THEMES.fontWeights.n};
        }

        .crumbs {
          position:absolute;
          top:${THEMES.blockUnits.vert.xs};
          left:${THEMES.blockUnits.hori.s};
          display: flex;
          height:auto;
        }

        .crumb {
          width: fit-content;
          white-space: nowrap;
        }

        .crumb a{
          display:flex;
        }

        .crumb .crumbContent{
          border-radius:${THEMES.rs.xs};
          padding:${THEMES.paddings.vert.s} ${THEMES.paddings.hori.s} ${THEMES.paddings.vert.s} ${THEMES.paddings.hori.s};
        }

        .crumb:first-child .crumbContent:first-child{
          /* padding-left:0; */
        }

        .crumb:last-child .crumbContent:last-child{
          /* padding-right:0; */
        }

        .crumb {
          color: ${THEMES.colors.text.sub};
          transition-duration:${THEMES.animations.duration.s};
        }

        .crumb:last-child {
          color: ${THEMES.colors.text.main};
        }

        .crumb .crumbContent:first-child{
          background-color:rgba(${colorWhenHovered[0]},${colorWhenHovered[1]},${colorWhenHovered[2]},0);
          transition-duration:${THEMES.animations.duration.l};
        }

        .crumb:hover .crumbContent:first-child{
          background-color:rgba(${colorWhenHovered[0]},${colorWhenHovered[1]},${colorWhenHovered[2]},1);
        }

        .menu{
          display:block;
          opacity:0.0;
          transition-duration:${THEMES.animations.duration.l};
          transform:translate(-50vw,0);
        }

        .gkwebWrap:hover .menu{
          display:block;
          opacity:1.0;
          transform:translate(0,0);
        }

        .arrows{
          position:absolute;
          top:${THEMES.blockUnits.vert.xs};
          right:${THEMES.blockUnits.hori.s};
          display:flex;
          gap:calc(${THEMES.paddings.hori.s} * 1);
        }

        .arrow_top,.arrow_back{
          width:auto;
          height:auto;
          border:none;
          border-radius:${THEMES.rs.xs};
          padding:${THEMES.paddings.hori.s};
          cursor:pointer;
          background-color:rgba(${colorWhenHovered[0]},${colorWhenHovered[1]},${colorWhenHovered[2]},0);
          transition-duration:${THEMES.animations.duration.l};
          opacity:0.5;
        }

        .scrolled{
          border-radius:50%;
          text-align:center;
          background-color:${THEMES.colors.bg.sub};
          opacity:1;
        }

        .arrows button:hover{
          border-radius:${THEMES.rs.xs};
          background-color:rgba(${colorWhenHovered[0]},${colorWhenHovered[1]},${colorWhenHovered[2]},1);
        }

        .hasHistory{
          opacity:1;
        }

        .imgWrap{
          width:calc(${THEMES.fontSizes.m} * ${THEMES.lineHeights.default});
          height:calc(${THEMES.fontSizes.m} * ${THEMES.lineHeights.default});
          position:relative;
          text-align:center;
        }

        .underline{
          text-decoration:underline;
          text-underline-offset:${THEMES.paddings.vert.s};
        }

        .crumb .gkweb{
          border:2px solid;
          border-radius:${THEMES.rs.s};
          padding:0 ${THEMES.paddings.hori.s} 0 ${THEMES.paddings.hori.xs};
        }

        .crumb{
          border-color: ${THEMES.colors.text.sub};
        }

        .crumb:last-child {
          border-color: ${THEMES.colors.text.sub};
        }

        .separator{
          border:none;
        }
      `}</style>
    </>
  );
};

export default Parts_Breadcrumbs;
