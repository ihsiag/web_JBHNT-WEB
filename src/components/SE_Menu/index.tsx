import Link from "next/link";

import * as UTILS from "src/utils";
import * as THEMES from "src/styles/theme";
import PA_Navi_Projects from "./PA_Navi_Projects";
import PA_Navi_Whole from "./PA_Navi_Whole";

type Props = {
  pageNames?: string[];
};

const SE_Menu = ({ pageNames }: Props) => {
  const _borderWidth = "2px";
  const createLink = (_pageNames: string[], _index: number) => {
    let _link = "";
    for (let i = 0; i < _index + 1; i++) {
      _link += `/${_pageNames[i].split("(")[0].toLowerCase()}`;
    }
    return _link;
  };
  const createLabel = (_pageName:string)=>{
    return _pageName.replace(/_/g, '-').toUpperCase();
  }

  return (
    <>
      <div className="component">
        <nav className="PA-CrumbWraps">
          <div className="crumbWrap crumbWrap-home">
            <Link href="/">
              <a>
                <div className="crumb crumb-text">
                  <p>
                    <span>{">> "}GKWEB</span>
                  </p>
                </div>
                <div className="crumb crumb-separator">
                  <p>/</p>
                </div>
              </a>
            </Link>
            <div className="PA-Navi-Whole">
              <PA_Navi_Whole/>
            </div>
          </div>
          {pageNames?.map((pageName, index) => (
            <div className={["crumbWrap",pageName.toUpperCase()==="PROJECTS"&&"crumbWrap-projects"].join(" ")} key={`parts_breadcrumbs_${pageName}`} >
              <Link href={createLink(pageNames, index)} scroll={false}>
                <a>
                  <div className="crumb crumb-text">
                    <p>{createLabel(pageName)}</p>
                  </div>
                  <div className="crumb crumb-separator">
                    <p>/</p>
                  </div>
                </a>
              </Link>
              {/* {pageName.toUpperCase() === "PROJECTS"&&
                <div className="PA-Navi-Projects">
                  <PA_Navi_Projects/>
                </div>
              } */}
            </div>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .component {
          position:fixed;
          z-index:300;
          top:0;
          left:0;
          display:block;
          width: 100%;
        }

        .component p{
          font-size:${THEMES.fontSizes.m};
          line-height:${THEMES.lineHeights.default};
          font-weight:${THEMES.fontWeights.n};
        }

        .PA-CrumbWraps {
          position:absolute;
          top:${THEMES.gaps.l};
          left:${THEMES.gaps.l};
          display: flex;
          height:auto;
        }

        .PA-Navi-Whole{
          display:block;
          opacity:0.0;
          transition-duration:${THEMES.durations.l};
          transform:translate(-50vw,0);
        }

        .PA-Navi-Projects{
          display:block;
          opacity:0.0;
          transition-duration:${THEMES.durations.l};
          transform:translate(-50vw,0);
          height:0px;
        }

        .crumbWrap-home:hover .PA-Navi-Whole{
          display:block;
          opacity:1.0;
          transform:translate(0,0);
        }

        .crumbWrap-projects:hover .PA-Navi-Projects{
          display:block;
          opacity:1.0;
          transform:translate(0,0);
        }

        .crumbWrap {
          width: fit-content;
          white-space: nowrap;
          padding-right:${THEMES.gaps.xs};
          color: ${THEMES.colors.text.sub};
          transition-duration:${THEMES.durations.s};
        }

        .crumbWrap:last-child {
          color: ${THEMES.colors.text.main};
        }

        .crumbWrap a{
          display:flex;
        }

        .crumbWrap .crumb{
          border-radius:${THEMES.rs.xs};
          border:${_borderWidth} solid rgba(0,0,0,0);
        }

        .crumbWrap .crumb-text{
          padding-right:${THEMES.gaps.xs};
          background-color:none;
          transition-duration:${THEMES.durations.l};
          text-decoration:underline;
          text-underline-offset:${THEMES.gaps.xxs};
        }

        .crumbWrap:hover .crumb-text{
          color:${THEMES.colors.text.main};
          background-color:${THEMES.colors.accent.gray};
        }

        .crumbWrap-home .crumb-text{
          padding-left:${THEMES.gaps.xs};
          border-color:${pageNames?THEMES.colors.text.sub:THEMES.colors.text.main};
          /* border-color:${pageNames?"rgba(0,0,0,0)":THEMES.colors.text.main}; */
          /* text-decoration:${pageNames?"underline":"none"}; */
          text-decoration:none;
        }

        .crumbWrap-home .crumb-separator{
          padding-left:${THEMES.gaps.xs};
          display:${pageNames?"block":"none"};
        }
      `}</style>
    </>
  );
};

export default SE_Menu;
