
import * as THEMES from "src/styles/theme";
import {FilterOption} from "src/types/dataTypes";
import memo from "react";
import { NextRouter } from "next/router";

type Props ={
  filterOptions:FilterOption[];
  handleFilterOptionClick:(_t:string)=>void;
}

const Parts_Project_Filtering = ({filterOptions,handleFilterOptionClick}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="title">
        <p>FILTER BY ...</p>
      </div>
      <div className="tags">
        {filterOptions.map((option, index) => {
          return (
            <div className="tagArea" key={`parts_projects_tags_tag_${index}`}>
              <button type="button" onClick={() => handleFilterOptionClick(option.tag)} className={["tag", option.selected === true ? "selected" : null].join(" ")}>
                <p>
                  ● {option.tag} : {option.relatedProjectIds.length}{/*.toString().padStart(2, "0")*/}
                </p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
    <style jsx>{`

        .component{
          width:100%;
          padding-bottom: ${THEMES.blockUnits.m};
        }

        .title{
          padding-bottom:${THEMES.paddings.vert.m};
        }

        .title p{
          font-size:${THEMES.fontSizes.l};
        }

        .tags {
          width: 100%;
          height: auto;
          display: flex;
          flex-wrap:wrap; 
          background-color:${THEMES.colors.bg.sub};
          border:2px solid ${THEMES.colors.accent.gray};
        }

        .tagArea {
          width: calc(100% / 4);
          /* flex:1; */
          white-space:nowrap;
          /* padding: ${THEMES.paddings.vert.m} ${THEMES.paddings.hori.l}; */
          padding:calc(${THEMES.gaps.vert.s} / 2) ${THEMES.gaps.hori.m};
        }

        .tag {
          width: fit-content;
          border: none;
          border-radius: ${THEMES.rs.xs};
          background-color: ${THEMES.colors.bg.sub};
          cursor: pointer;
          transition-duration: ${THEMES.animations.duration.m};
          padding: ${THEMES.paddings.vert.m} ${THEMES.paddings.hori.l};
        }

        .tag p {
          text-align: left;
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
          line-height: ${THEMES.lineHeights.default};
        }

        .tag:hover {
          background-color: ${THEMES.colors.accent.gray};
        }

        .tag:active{
          background-color: ${THEMES.colors.accent.red};
        }

        .selected {
          background-color: ${THEMES.colors.accent.red};
        }

        .selected:hover{
          background-color: ${THEMES.colors.accent.red};
        }

        .selected:active{
          background-color: ${THEMES.colors.accent.gray};
        }
    `}</style>
    </>
  );
}

export default Parts_Project_Filtering;