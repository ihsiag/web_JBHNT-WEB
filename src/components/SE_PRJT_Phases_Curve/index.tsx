import { T_PRJT_PHASES, T_VEC2 } from "src/types";

import * as THEMES from "src/styles/theme";
import PA_SectionTitle from "../PA_SectionTitle";
import PA_PhaseText from "./PA_PhaseText";
import PA_PhaseImage from "./PA_PhaseImage";
import { getNumFromStr } from "src/utils";

type Props ={
  phases:T_PRJT_PHASES;
}


const findPosition = (index:number,unitTheta:number,rH:number,rV:number,o1:T_VEC2)=>{
  const theta = unitTheta*index;
  let position = {x:0,y:0};
  if(theta<=Math.PI/2){
    position = {x:o1.x-rH*Math.cos(theta),y:o1.y+rV*Math.sin(theta)+1};
  }else if(theta<=Math.PI*3/2){
    position = {x:o1.x-rH*Math.cos(theta),y:o1.y+rV*(1+(1-Math.sin(theta)))};
  }else{
    position = {x:o1.x-rH*Math.cos(theta),y:o1.y+rV*(3+(1-Math.sin(theta)))};
  }
  // position = {x:o1.x+r*Math.sin(theta),y:o1.y-r*Math.cos(theta)};
  return position;
}

const SE_Phases = ({phases}:Props)=>{
  const margin = getNumFromStr(THEMES.blockUnits.s);
  const rH = getNumFromStr(THEMES.blockUnits.xxl)*1.5;
  const rV = rH*0.4;
  const o1 = {x:margin + rH,y:margin};
  // const unitThetaImage = 2*Math.PI/phases.images.length;
  const unitThetaText = 2*Math.PI/phases.descriptions.length;
  const unitThetaImage = 2*Math.PI/8;

  return(
    <>
    <div className="component">
      <div className="titleArea">
        <PA_SectionTitle text={phases.title}/>
      </div>
      <div className="flowArea">
        {phases.images.map((i,_i)=>{
          const position = findPosition(_i,unitThetaImage,rH,rV,o1);
          return <PA_PhaseImage image={i} position={position} key={`PA_PhaseImage_${_i}`}/>
        })}
        {phases.descriptions.map((d,_i)=>{
          const position = findPosition(_i,unitThetaImage,rH,rV,o1);
          return <PA_PhaseText description={d} index={_i} position={position} key={`PA_PhaseText_${_i}`}/>
        })}
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

      .flowArea{
        position:relative;
      }

    `}</style>
    </>
  );
}

export default SE_Phases;