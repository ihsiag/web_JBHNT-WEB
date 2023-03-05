import * as THEMES from "src/styles/theme";

type Props ={
  number:number;
}

const PA_IndexCircle = ({number}:Props) =>{
  return(
    <>
    <div className="component">
      <div className="circle">
        <div className="textBox">
        <p>{number.toString().substring(0, 2).padStart(2, "0")}</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontSizes.xxl};
        font-weight:${THEMES.fontWeights.eb};
        color:green;
      }

      .component{
        width:${THEMES.blockUnits.m};
        height:${THEMES.blockUnits.m};
      }

      .circle{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .textBox{
        width:fit-content;
      }

    `}</style>
    </>
  )
}

export default PA_IndexCircle;