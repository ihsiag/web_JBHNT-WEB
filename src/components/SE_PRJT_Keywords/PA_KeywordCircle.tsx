
type Props ={
  keyword:string;
}

import * as THEMES from "src/styles/theme";

const PA_KeywordCircle = ({keyword}:Props) => {
  return(
  <>
  <div className="component">
    <div className="circle">
      <div className="textBox">
        <p>{keyword}</p>
      </div>
    </div>
  </div>
  <style jsx>{`
    p{
      font-size:${THEMES.fontSizes.l};
    }

    .component{
      width:${THEMES.blockUnits.xl};
      height:${THEMES.blockUnits.xl};
      padding:${THEMES.gaps.l};
    }
    
    .circle{
      width:100%;
      height:100%;
      border-radius:50%;
      display:flex;
      justify-content:center;
      align-items:center;
      border:${THEMES.colors.text.main} 10px solid;
    }
    
    .textBox{
      padding:${THEMES.gaps.s};
      width:fit-content;
      text-align:center;
    }
  `}</style>
  </>
  );
}

export default PA_KeywordCircle;