import * as THEMES from "src/styles/theme";
import PA_IndexCircle from "./PA_IndexCircle";

type Props ={
  index:number;
  description:string;
}

const PA_PhaseText = ({index,description}:Props)=>{
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
        display:flex;
        justify-content:flex-start;
      }
  
      .indexArea{
        width:fit-content;
        /* border:1px solid red; */
      }

      .descriptionArea{
        padding-top:calc(${THEMES.blockUnits.m} / 2);
      }
  
      .descriptionArea p{
        font-size:${THEMES.fontSizes.l};
      }
      `}</style>
    </>
    );
}

export default PA_PhaseText;