import Link from "next/link";
import { ExtLink } from "src/utils";
import { Json_Utils_Period, Json_Utils_Link, Json_Career_Child } from "src/types/dataTypes";
import * as THEMES from "src/styles/theme";
import { Json_Bilingual } from "src/types/dataTypes";

const Parts_Info_Intro_Names = ({ name, role }: { name: Json_Bilingual; role: Json_Bilingual }) => {
  return (
    <>
      <div className="component">
        <div className="paragraphWrap">
          <div className="paragraph ja">
            <div className="_inlineWrap textBoxArea">
              <p>{name.ja}</p>
              <p>/</p>
              <p>{role.ja}</p>
            </div>
            <div className="colorBoxArea">
              <div className="colorBox"></div>
            </div>
          </div>
          <div className="paragraph en">
            <div className="_inlineWrap textBoxArea">
              <p>{name.en}</p>
              <p>/</p>
              <p>{role.en}</p>
            </div>
            <div className="colorBoxArea">
              <div className="colorBox"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .component {
          position:relative;
          width: 100%;
        }

        .component p{
          font-size: ${THEMES.fontSizes.xl};//7.5rem;//4.0rem;//7.5rem;
          font-weight: ${THEMES.fontWeights.n};
        }

        .paragraphWrap{
          display:flex;
        }

        .paragraph{
          width:100%;
          display:flex;
          padding-right:${THEMES.paddings.hori.l};
        }

        .textBoxArea{
          /* width:calc(100% - calc(${THEMES.blockUnits.vert.xs} * 1.)); */
          flex:1;
          height:100%;
        }

        .textBoxArea p{
          /* width:fit-content; */
        }

        .colorBoxArea{
          width:${THEMES.blockUnits.l};
          overflow:hidden;
        }

        .colorBox{
          background-color:${THEMES.colors.text.main};
          /* width:100%; */
          height:100%;
          animation:expand_rightToLeft;
          animation-duration:0.6s;
          animation-fill-mode:forwards;
        }

        @keyframes expand_rightToLeft{
          from{
            margin-left:100%;
          }
          to{
            margin-left:0;
          }
        }
        
        
        //------------------

        .inlineWrap {
          display: flex;            
        }

        .toLeft{
          justify-content:flex-start;
          text-align:left;
        }

        .toRight{
          justify-content:flex-end;
          text-align:right;
        }

        .inlineWrap >*{
          padding: 0 ${THEMES.paddings.hori.s};
        }

        .inlineWrap >*:first-child {
          padding-left: 0px;
        }

        .inlineWrap >*:last-child {
          padding-right: 0;
        }
      `}</style>
    </>
  );
};

export default Parts_Info_Intro_Names;
