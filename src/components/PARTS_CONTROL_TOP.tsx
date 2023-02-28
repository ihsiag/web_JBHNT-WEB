import Link from "next/link";
import Router from "next/router";
import { useState,useEffect } from "react";

import Svg_Link_Top from "./SVG_LINK_TOP";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";



const Parts_Control_Top = () =>{
  return(
    <>
    <div className="component">
      <div className={["panel",UTILS.useScrollPosition()>10?"activated":""].join(" ")}>
      <button role={"button"} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="arrow">
          <div className="imgWrap">
            <Svg_Link_Top defaultColor={THEMES.colors.text.sub} activeColor={THEMES.colors.text.main} hoveredColor={THEMES.colors.text.main} bActive={UTILS.useScrollPosition()>10}/>
          </div>
        </button>
      </div>
    </div>
    <style jsx>{`
    .component{
        z-index:300;
        display:block;
        position:fixed;
        bottom:${THEMES.blockUnits.vert.m};
        right:${THEMES.blockUnits.vert.m};
        width:calc(${THEMES.blockUnits.m}*2);
        height:calc(${THEMES.blockUnits.m}*2);
      }

      .panel{
        transition-duration:${THEMES.animations.duration.l};
        opacity:0;
        transform:translateY(${THEMES.blockUnits.l});
      }

      .activated{
        opacity:1;
        transform:translateY(0);
      }

      .panel{
        position:fixed;
        width:calc(${THEMES.blockUnits.m}*2);
        height:calc(${THEMES.blockUnits.m}*2);
        padding:${THEMES.rs.m};
        border-radius:${THEMES.rs.m};
        background-color:${THEMES.colors.bg.sub};
        filter:drop-shadow(${THEMES.dropShadows.default});
      }

      .panel:hover{
        filter:drop-shadow(${THEMES.dropShadows.hovered});
      }

      .arrow{
          width:auto;
          height:auto;
          border:none;
          background:none;
          border-radius:${THEMES.rs.xs};
          padding:${THEMES.paddings.hori.s};
          cursor:pointer;
          transition-duration:${THEMES.animations.duration.l};
        }

        .arrow:hover{
          background-color:${THEMES.colors.accent.gray};
        }
      
    `}</style>
    </>
  );
}

export default Parts_Control_Top;