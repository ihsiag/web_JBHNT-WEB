import * as THEMES from "src/styles/theme";

type Props ={
  text?:string;
}

const PA_Description = ({text}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="textBox">
        <p>{text}</p>
      </div>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontSizes.s};
        font-weight:${THEMES.fontWeights.b};
      }

      .component{
        width:${THEMES.blockUnits.xl};
        padding:${THEMES.gaps.s} ${THEMES.gaps.m};
      }

      .textBox{
        
      }
    `}</style>
    </>
  );
}

export default PA_Description;