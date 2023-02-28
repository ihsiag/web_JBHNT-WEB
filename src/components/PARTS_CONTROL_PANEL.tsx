import { ReactChild } from "react";
import * as THEMES from "src/styles/theme";

type Props ={
  children:ReactChild;
  blockUnit:string;
}

const Parts_Control_Panel = ({children}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="panel">
        {children}
      </div>
    </div>
    <style jsx>{`
      .component{
        display:block;
        position:absolute;
        width:${THEMES.blockUnits.hori.l};
        height:100vh;
      }

      .panel{
        position:absolute;
        width:${THEMES.blockUnits.hori.l};
        padding:${THEMES.rs.m};
        border-radius:${THEMES.rs.m};
        top:${THEMES.blockUnits.vert.m};
        background-color:${THEMES.colors.bg.sub};
        filter:drop-shadow(${THEMES.dropShadows.default});
        transition-duration:${THEMES.animations.duration.l};
      }

      .panel:hover{
        filter:drop-shadow(${THEMES.dropShadows.hovered});
      }
    `}</style>
    </>
  );
}

export default Parts_Control_Panel;