import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState,useEffect} from "react";

import Svg_Link_Back from "./SVG_LINK_BACK";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";

type Props ={
  bIsHome:boolean;
}

const Parts_Control_Back = ({bIsHome}:Props) =>{
  const [bWindowHasHistory,setBWindowHasHistory] = useState(false);
  const router = useRouter();
  useEffect(()=>{
    setBWindowHasHistory(window.history.length>1?true:false);
    console.log(window.history.length);
  },[]);
  return(
    <>
    <div className="component">
      <div className={["panel",!bIsHome?"activated":""].join(" ")}>
      {/* <button role={"button"} onClick={()=>bWindowHasHistory?router.back():router.push("/")} className="arrow"> */}
      <button role={"button"} onClick={()=>router.back()} className="arrow">
          <a>
            <div className="imgWrap">
              <Svg_Link_Back defaultColor={THEMES.colors.text.sub} activeColor={THEMES.colors.text.main} bActive={bWindowHasHistory}/>
            </div>
          </a>
          </button>
      </div>
    </div>
    <style jsx>{`
      .component{
        z-index:300;
        display:block;
        position:fixed;
        top:${THEMES.gaps.xl};
        left:${THEMES.gaps.xl};
        width:${THEMES.blockUnits.xl};
      }

      .panel{
        display:none;
      }

      .activated{
        display:block;
      }

      .panel{
        position:fixed;
        width:${THEMES.blockUnits.xl};
        padding:${THEMES.rs.m};
        border-radius:${THEMES.rs.m};
        background-color:${THEMES.colors.bg.sub};
        filter:drop-shadow(${THEMES.dropShadows.default});
        transition-duration:${THEMES.durations.l};
      }

      .panel:hover{
        filter:drop-shadow(${THEMES.dropShadows.hovered});
      }

      .arrow{
          width:auto;
          height:auto;
          border:none;
          border-radius:${THEMES.rs.xs};
          padding:${THEMES.gaps.xs};
          cursor:pointer;
          transition-duration:${THEMES.durations.l};
          opacity:0.5;
        }
    `}</style>
    </>
  );
}

export default Parts_Control_Back;