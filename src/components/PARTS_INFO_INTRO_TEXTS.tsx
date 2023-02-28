import Link from "next/link";
import { ExtLink } from "src/utils";
import { Json_Bilingual,Json_Utils_Period, Json_Utils_Link, Json_Career_Child } from "src/types/dataTypes";
import * as THEMES from "src/styles/theme";


const Parts_Info_Intro_Texts = ({texts}: {texts: Json_Bilingual[];}) => {
  return (
    <>
      <div className="component">
        {texts.map((text,index)=>(
          <div key = {`parts_intro_texts_${index}`} className="paragraphWrap texts">     
              <div className="ja paragraph">
                <p className="line">-</p>
                <p className="text">
                  {text.ja}
                </p>
              </div>
              <div className="en paragraph">
                <p className="line">-</p>
                <p className="text">
                  {text.en}
                </p>
              </div>

          </div>
        ))}
      </div>
      <style jsx>{`
        .component {
          position:relative;
          width: 100%;
        }

        .texts p{
          font-size:${THEMES.fontSizes.s};
          line-height:2.0;
          letter-spacing:0.05rem;
          font-weight:${THEMES.fontWeights.n};
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

export default Parts_Info_Intro_Texts;
