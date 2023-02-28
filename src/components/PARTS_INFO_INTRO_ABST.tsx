import Link from "next/link";
import { ExtLink } from "src/utils";
import { Json_Bilingual,Json_Utils_Period, Json_Utils_Link, Json_Career_Child } from "src/types/dataTypes";
import * as THEMES from "src/styles/theme";


const Parts_Info_Intro_Abst = ({abst}: { abst:Json_Bilingual;}) => {
  return (
    <>
      <div className="component">
        <div className="paragraphWrap abst">
        <div className="ja paragraph">
            <p className="line">-</p>
            <p className="text">{abst.ja}</p>
          </div>
          <div className="en paragraph">
            <p className="line">-</p>
            <p className="text">{abst.en}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .component {
          position:relative;
          width: 100%;
        }

        .abst p{
          font-size:${THEMES.fontSizes.m};
          line-height:2.0;
          letter-spacing:0.05rem;
          font-weight:${THEMES.fontWeights.b};
        }

        //same with texts --begin
        .paragraphWrap{
          display:flex;
          padding: 0 0 calc(${THEMES.paddings.hori.l} * 1) 0;
        }

        .paragraph{
          padding:0 ${THEMES.paddings.hori.l} 0 0;
          
        }

        .paragraphWrap{
          border-top:1px solid ${THEMES.colors.accent.gray} ;//${THEMES.colors.text.sub};
        }
        //same with texts --end

      `}</style>
    </>
  );
};

export default Parts_Info_Intro_Abst;
