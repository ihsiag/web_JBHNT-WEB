import * as THEMES from "src/styles/theme";

type Props ={
  text:string;
}

const PA_Copy = ({text}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="circle">
        <div className="textBox">
        <p>{text}</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontSizes.m};
        font-weight:${THEMES.fontWeights.b};
      }

      .component{
        width:${THEMES.blockUnits.xl};
        height:${THEMES.blockUnits.xl};
      }

      .circle{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        background-color:${THEMES.colors.accent.yellow};
        padding:0 ${THEMES.gaps.l};
      }

      .textBox{
        width:fit-content;
      }
    `}</style>
    </>
  );
}

export default PA_Copy;