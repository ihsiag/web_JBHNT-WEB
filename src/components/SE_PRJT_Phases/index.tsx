import { T_PRJT_PHASES } from "src/types";

import * as THEMES from "src/styles/theme";
import PA_SectionTitle from "../PA_SectionTitle";
import PA_PhaseText from "./PA_PhaseText";

type Props ={
  phases:T_PRJT_PHASES;
}

const SE_Phases = ({phases}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="titleArea">
        <PA_SectionTitle text={phases.title}/>
      </div>
      <div className="flexContainer">
        <div className="textArea">
          {phases.descriptions.map((d,_i)=>
            <PA_PhaseText index = {_i+1} description = {d} key={`InParts_Phase_${_i}`}/>
          )}
        </div>
        <div className="photoArea">
          {phases.images.map((i,_i)=>{
            //place photo later
          })}
        </div>
      </div>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontSizes.m};
        font-weight:${THEMES.fontWeights.b};
        color:${THEMES.colors.bg.main};
      }
      
      .component{
        padding-bottom:${THEMES.blockUnits.s};
      }

      .textArea{
        width:65%;
      }

      .photoArea{
        width:35%;
      }

      .flexContainer{
        display:flex;
      }
    `}</style>
    </>
  );
}

export default SE_Phases;