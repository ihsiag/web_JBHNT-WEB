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
              <p key={`project_inParts_desc_${_i}`}>- {mention}</p>
            ))}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .component {
          /* border-left:2px solid ${THEMES.colors.text.main}; */
        }
        .dataBlocks {
          /* background-color:${THEMES.colors.bg.sub};
      border-radius:${THEMES.rs.s}; */
          padding: ${THEMES.gaps.m};
        }
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
        .description p {
          font-size: ${THEMES.fontSizes.s};
        }
        .title {
          padding-bottom: ${THEMES.gaps.m};
        }
        .oneLine {
          padding-bottom: ${THEMES.gaps.m};
        }
      `}</style>
    </>
);
}

export default PA_Data;