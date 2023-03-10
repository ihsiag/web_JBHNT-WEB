import Link from "next/link";
import { ExtLink } from "src/utils";
import {  T_LINK, T_INF_CAREER_CHILD } from "src/types";
import * as THEMES from "src/styles/theme";
import Svg_Link_Ext from "./SVG_LINK_EXT";
import Svg_Link_Int from "./SVG_LINK_INT";

const Parts_Info_Careers = ({ title, contentList }: { title: string; contentList: T_INF_CAREER_CHILD[] }) => {
  const get_link_int_list = (links: T_LINK[]) => {
    return links.filter((item) => item.type == "int");
  };

  const get_link_ext_list = (links: T_LINK[]) => {
    return links.filter((item) => item.type == "ext");
  };

  const DisplayPeriod = ({start,end}:{start:string;end?:string;})=>{
    const startCharArr:string[] = [];
    const endCharArr:string[] = [];
    for(let i=0; i<start.length;i++){
      startCharArr.push(start[i]);
    }
    if(end != null){
      for(let i=0; i<end.length;i++){
        endCharArr.push(end[i]);
      }
    }

    return(
      <>
      <div className="displayPeriod_line">
        <div className="displayPeriod_start">
          {startCharArr.map((char,_i)=><p className="char" key={`startChar_${char}_${_i}`}>{char}</p>)}
        </div>
        <div className="displayPeriod_separater">
          <p className="char" >-</p>
        </div>
        <div className="displayPeriod_end">
        {endCharArr.map((char,_i)=><p className="char" key={`startChar_${char}_${_i}`}>{char}</p>)}
        </div>
      </div>
      <style jsx>{`
        p{
          font-size: ${THEMES.fontSizes.s};
          line-height:${THEMES.lineHeights.wide};
        }

        .displayPeriod_line{
          display:flex;
        }

        .displayPeriod_start,.displayPeriod_end{
          display:flex;
          padding-right:${THEMES.gaps.m};
        }

        .displayPeriod_separater{
          display:flex;
          justify-content:center;
        }

        .char{
          width:calc(${THEMES.fontSizes.s} * 0.4);
          text-align:center;
          padding:0 4.2px;
        }
      `}</style>
      </>
    );
  }

  return (
    <>
      <div className="component">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="grid">
          {contentList.map((content, index) => (
            <div key={`parts_career_grid_${index}`} className="gridRow">
              <div className="gridCell period">
                <DisplayPeriod start ={content.period.start} end={content.period?.end}/>
              </div>
              <div className="gridCell text">
                <p>{content.text}</p>
              </div>
              <div className="gridCell links link_int">
                <p>
                  {content.links != undefined && get_link_int_list(content.links).length > 0 && (
                    // <Link href={["/projects/",get_link_int_list(content.links)[0].url].join("")}>
                    //   <a>
                    <ExtLink href={["/projects/",get_link_int_list(content.links)[0].url.toLowerCase()].join("")}>
                      <div className="circle"><div className="circleTwo"><Svg_Link_Int/></div></div>
                    </ExtLink>
                    //   </a>
                    // </Link>
                  )}
                </p>
              </div>
              <div className="gridCell links link_ext">
                <p>
                  {content.links != undefined && get_link_ext_list(content.links).length > 0 && (
                    <ExtLink href={get_link_ext_list(content.links)[0].url}>
                      <div className="circle"><div className="circleTwo"><Svg_Link_Ext/></div></div>
                    </ExtLink>
                  )}
                </p>
              </div>
              <div className="gridCell categories">
                <p>{content.categories.map((category, index) => (index == content.categories.length - 1 ? `${category}` : `${category} / `))}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .component {
          position: relative;
          width: 100%;
          overflow: hidden;
          /* border: 2px solid ${THEMES.colors.accent.red}; */
        }

        .component p {
          font-size: ${THEMES.fontSizes.s};
          line-height:${THEMES.lineHeights.wide};
        }

        .title p {
          font-size: ${THEMES.fontSizes.s};
        }

        .component > div {
          padding: ${THEMES.gaps.m} 0;
        }

        .title {
          border-bottom: 1px solid ${THEMES.colors.accent.gray};
        }

        .grid{
          background-color: ${THEMES.colors.bg.sub};
          padding: ${THEMES.gaps.m} ${THEMES.gaps.m} ${THEMES.blockUnits.s};
        }

        .gridRow {
          display: grid;
          grid-template-columns: 20% auto 2.5rem 2.5rem 20%;
          gap: ${THEMES.gaps.xs};
          padding:calc(${THEMES.gaps.xs} / 2) 0;
          /* height:calc(${THEMES.fontSizes.l} * ${THEMES.lineHeights.default}); */
          transition-duration: ${THEMES.durations.xs};
        }

        .circle{
          border-radius:${THEMES.rs.xs};
          width:100%;
          line-height:100%;
          text-align:center;         
          transition-duration: ${THEMES.durations.xs};
          /* height:12px; */
        }

        .circleTwo{
          border-radius:${THEMES.rs.xs};
          padding:25%;
          width:100%;
          line-height:100%;
          text-align:center;
          transition-duration: ${THEMES.durations.s};
        }

        .gridRow:hover{
          background-color:${THEMES.colors.accent.gray};
        }

        .gridRow:hover p{
        }

        .gridRow:hover .circle{
          background-color:${THEMES.colors.accent.red};
        }

        .circle:hover .circleTwo{
          background-color:${THEMES.colors.accent.red};
          color:white;
          transform:scale(1.4);
          filter:drop-shadow(${THEMES.dropShadows.default});
        }

         //------------------

         .inlineWrap {
          display: flex;            
        }

        .toLeft{
          justify-content:flex-start;
          text-align:left;
        }

        .toRight{
          justify-content:flex-end;
          text-align:right;
        }

        .inlineWrap >*{
          padding: 0 ${THEMES.gaps.xs};
        }

        .inlineWrap >*:first-child {
          padding-left: 0px;
        }

        .inlineWrap >*:last-child {
          padding-right: 0;
        }
      `}</style>
    </>
  );
};

export default Parts_Info_Careers;
