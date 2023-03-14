import * as THEMES from "src/styles/theme";
import { T_PRJT_DATA2 } from "src/types";
import PA_Circle from "../PA_Circle";

type Props ={
  data2:T_PRJT_DATA2;
}

const PA_Data2 = ({data2}:Props)=>{
return(
<>
      <div className="component">
        <ul className="blocks">
          <li className="block year">
            {/* <p>{data2.year},</p> */}
            <p>-</p>
          </li>
          <li className="block oneLine">
            {/* <p>{data2.oneLine},</p> */}
            <p>-</p>
          </li>
          <li className="block keywords">
            {data2.keywords.map((keyword, index) => (
              <div  className="keyword" key={`parts_projects_projectContainer_keyword_${index}`}>
                <div className="circle"><PA_Circle _circleSize={THEMES.blockUnits.xs} _fontSize={THEMES.fontSizes.s} _fontWeight={THEMES.fontWeights.b} _noFill={true} _fillColor={THEMES.colors.accent.red} _strokeWidth={THEMES.gaps.s} _strokeColor={THEMES.colors.accent.red}>{keyword.charAt(0)}</PA_Circle></div>
                <div className="text"> <p>{keyword}</p></div>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          height: 100%;
          padding-left: ${THEMES.gaps.l};
        }

        .year p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.n};
        }

        .oneLine p{
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .keyword p{
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }
        .blocks {
          width: 100%;
          height: 100%;
          padding: ${THEMES.gaps.m};
          background-color: ${THEMES.colors.bg.sub};
          border-radius: ${THEMES.rs.s};
        }

        .year{
          padding-bottom: ${THEMES.gaps.m};
        }

        .oneLine{
          padding-bottom: ${THEMES.gaps.l};
        }


        .keywords{
          display: grid;
          grid-template-columns:repeat(3,1fr);
          gap:${THEMES.gaps.m};
        }

        .keyword > div{
          display:flex;
          flex-direction:column;
          align-items:center;
          /* background-color:green; */
        }

        .keyword .circle{
          padding-bottom:${THEMES.gaps.m};
        }
      `}</style>
    </>
);
}

export default PA_Data2;