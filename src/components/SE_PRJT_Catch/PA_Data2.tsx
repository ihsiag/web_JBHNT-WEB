import * as THEMES from "src/styles/theme";
import { T_PRJT_DATA2 } from "src/types";

type Props ={
  data2:T_PRJT_DATA2;
}

const PA_Data2 = ({data2}:Props)=>{
return(
<>
      <div className="component">
        <ul className="dataBlocks">
          <li className="dataBlock year">
            <p>{data2.year},</p>
          </li>
          <li className="dataBlock oneLine">
            <p>{data2.oneLine},</p>
          </li>
          <li className="dataBlock keywords">
            {data2.keywords.map((keyword, index) => (
              <div  className="keyword" key={`parts_projects_projectContainer_keyword_${index}`}>
                <p className="text">● {keyword.toUpperCase()}</p>
                <p className="splitter">,</p>
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
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.n};
          padding-right: ${THEMES.gaps.xs};
        }
        .dataBlocks {
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
          display: flex;
          flex-wrap: wrap;
        }

        .keyword{
          display: flex;
          width: fit-content;
        }
      `}</style>
    </>
);
}

export default PA_Data2;