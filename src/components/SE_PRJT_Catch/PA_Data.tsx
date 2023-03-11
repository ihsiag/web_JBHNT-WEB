import { T_PRJT_DATA } from "src/types";
import * as THEMES from "src/styles/theme";

type Props ={
  data:T_PRJT_DATA;
}

const PA_Data = ({data}:Props)=>{
return(
<>
      <div className="component">
        <ul className="dataBlocks">
          <li className="dataBlock title">
            <p>{data.title.length > 0 ? data.title : "---"}</p>
          </li>
          <li className="dataBlock oneLine">
            <p>{data.subtitle}</p>
          </li>
          <li className="dataBlock mentions">
            {data.mentions.map((mention, _i) => (
              <p className="mention" key={`project_inParts_desc_${_i}`}>- {mention}</p>
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
        .dataBlocks {
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
          margin-bottom:${THEMES.gaps.xxs};
          background-color:${THEMES.colors.accent.yellow};
        }
      `}</style>
    </>
);
}

export default PA_Data;