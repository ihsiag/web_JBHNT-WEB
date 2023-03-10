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
          <li className="year">
            <p>,</p>
          </li>
          <li className="client">
            <p>,</p>
          </li>
          <li className="abst">
            <p>,</p>
          </li>
          <li className="tags">
            {data2.keywords.map((keyword, index) => (
              <div key={`parts_projects_projectContainer_keyword_${index}`} className="tag">
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
          /* border-left:1px solid ${THEMES.colors.text.main}; */
          padding-left: ${THEMES.gaps.l};
        }
        .component p {
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.n};
          line-height: ${THEMES.lineHeights.wide};
          letter-spacing: 1.2px;
          /* text-align:right; */
        }
        .dataBlocks {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: ${THEMES.gaps.m};
          background-color: ${THEMES.colors.bg.sub};
          border-radius: ${THEMES.rs.s};
          /* border-left:2px solid ${THEMES.colors.accent.gray}; */
        }
        .year p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.n};
        }
        .tags {
          display: flex;
          /* justify-oneLine: flex-end; */
          flex-wrap: wrap;
        }
        .tag {
          display: flex;
          width: fit-oneLine;
        }
        .tag p {
          padding-right: ${THEMES.gaps.xs};
        }
      `}</style>
    </>
);
}

export default PA_Data2;