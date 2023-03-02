
import S_ImageWrap from "src/styles/ST_ImageWrap";
import * as THEMES from "src/styles/theme";
import SVG_CrossThin from "../SVG/SVG_CrossThin";
import PA_KeywordCircle from "./PA_KeywordCircle";

type Props = {
  keywords:string[];
}

const SE_Keywords = ({keywords}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="container">
      {keywords.map((k,_i)=>{
        if(_i==0){
          return(
            <div className="item" key={`PA_KeywordCircle_item${_i}`}>
              <PA_KeywordCircle key={`PA_KeywordCircle_${_i}`} keyword={k}/>
            </div>
          );
        }else{
          return(
          <>
          <div className="item cross" key={`PA_KeywordCircle_item${_i}_cross`}>
            <S_ImageWrap h={"auto"}>
              <SVG_CrossThin defaultColor={THEMES.colors.text.sub} rotate={45}/>
            </S_ImageWrap>
          </div>
          <div className="item" key={`PA_KeywordCircle_item${_i}`}>
            <PA_KeywordCircle keyword={k}/>
          </div>
          </>
          );
        }
      })}
      </div>
    </div>
    <style jsx>{`
      .component{
        display:flex;
        padding-bottom:${THEMES.blockUnits.s};
      }
      .container{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:${THEMES.colors.bg.sub};
      }
      .item{
        /* border:1px solid red; */
        flex:1;
        height:100%;
        display:grid;
        justify-content:center;
        align-items:center;
      }

      .cross{
        flex:0.1;
      }
    `}</style>
    </>
  );
}

export default SE_Keywords;