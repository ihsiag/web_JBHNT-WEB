
import * as THEMES from "src/styles/theme";
import PA_KeywordCircle from "./PA_KeywordCircle";

type Props = {
  keywords:string[];
}

const SE_Keywords = ({keywords}:Props)=>{
  return(
    <>
    <div className="component">
      {keywords.map((k,_i)=>
        <PA_KeywordCircle key={`PA_KeywordCircle_${_i}`} keyword={k}/>
      )}
    </div>
    <style jsx>{`
      .component{
        display:flex;
        padding-bottom:${THEMES.blockUnits.s};
      }
    `}</style>
    </>
  );
}

export default SE_Keywords;