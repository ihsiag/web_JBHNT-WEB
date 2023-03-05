import * as THEMES from "src/styles/theme";
import { T_VEC2 } from "src/types";
import PA_IndexCircle from "./PA_IndexCircle";

type Props ={
  index:number;
  description:string;
  position:T_VEC2;
}

const PA_PhaseText = ({index,description,position}:Props)=>{
  return(
    <>
      <div className="component">
        <div className="indexArea">
          <PA_IndexCircle number={index}/>
        </div>
        <div className="descriptionArea">
          <div className="textBox">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
      .component{
        position:absolute;
        top:${position.y}px;
        left:${position.x}px;
      }
  
      .indexArea{
        width:fit-content;
        /* border:1px solid red; */
      }

      .descriptionArea{
        width:${THEMES.blockUnits.xl};
        /* padding-top:calc(${THEMES.blockUnits.s} / 2); */
      }
  
      .descriptionArea p{
        font-size:${THEMES.fontSizes.s};
      }
      `}</style>
    </>
    );
}

export default PA_PhaseText;