import { T_PRJT_PHASES } from "src/types";

import * as THEMES from "src/styles/theme";
import PA_SectionTitle from "../PA_SectionTitle";
import PA_PhaseText from "./PA_PhaseText";
import PA_PhaseVisual from "./PA_PhaseVisual";

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
        <div className="visualArea">
          {phases.images.map((i,_i)=>
            <div className={["item",_i%2==0?"item-a":"item-b"].join(" ")} key={`InParts_Phase_${_i}`}>
              {/* <PA_PhaseVisual index = {_i+1} image={i} /> */}
            </div>
          )}
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

      .visualArea{
        width:40%;
        padding:${THEMES.gaps.l};
        display:grid;
        grid-template-columns:repeat(3,1fr);
        /* grid-template-rows:repeat(3,1fr); */
        /* background-color:pink; */
      }

      .item-a{
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .item-b{
        grid-column-start: 2;
        grid-column-end: 4;
      }

      .flexContainer{
        display:flex;
      }
    `}</style>
    </>
  );
}

export default SE_Phases;