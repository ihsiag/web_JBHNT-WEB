import { T_PRJT_DATA } from "src/types";
import * as THEMES from "src/styles/theme";
import PA_Circle from "../PA_Circle";

type Props ={
  data:T_PRJT_DATA;
}

const PA_Data = ({data}:Props)=>{
return(
<>
      <div className="component">
        <ul className="blocks">
          <li className="block title">
            <p>{data.title}</p>
          </li>
          <li className="block oneLine">
            <p>{data.subtitle}</p>
          </li>
          <li className="block mentions">
            {/* {data.mentions.map((mention, _i) => (
              <div className="mention" key={`PA_Data_${_i}`}>
                <div className="circle">
                  <PA_Circle _circleSize={THEMES.fontSizes.s} _lineHeight ={"1"} _color={THEMES.colors.accent.yellow}/>
                  </div>
                <p>{mention}</p>
              </div> 
            ))} */}
            {data.mentions.map((mention, _i) => (
              <div className="mention" key={`PA_Data_${_i}`}>
                <p>- {mention}</p>
              </div> 
            ))}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .title p {
          font-size: ${THEMES.fontSizes.xl};
          /* font-weight:${THEMES.fontWeights.b}; */
        }
        
        .oneLine p {
          font-size: ${THEMES.fontSizes.m};
        }
        .mentions p {
          font-size: ${THEMES.fontSizes.s};
        }
        
        .blocks {
          padding:${THEMES.gaps.m};
        }
        
        .title {
          padding-bottom: ${THEMES.gaps.m};
        }
        .oneLine {
          padding-bottom: ${THEMES.gaps.l};
        }
        .mentions{

        }

        .mention{
          display:flex;
          background-color:${THEMES.colors.accent.yellow};
          margin-bottom:${THEMES.gaps.xxs};
        }

        .circle{
          width:calc(${THEMES.fontSizes.s} * 1.6);
          width:${THEMES.fontSizes.s};
          /* width:fit-content; */
          display:grid;
          align-items:center;
        }

        .text{
          flex:1;
        }
      `}</style>
    </>
);
}

export default PA_Data;