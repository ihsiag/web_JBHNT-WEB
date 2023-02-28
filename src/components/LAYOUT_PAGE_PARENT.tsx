import { ReactChild } from "react";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";

import Parts_Control_Top from "src/components/PARTS_CONTROL_TOP";
// import Parts_Control_Back from "src/components/PARTS_CONTROL_BACK";
import Parts_Footer from "src/components/PARTS_FOOTER";

import { motion } from "framer-motion";

type Props = {
  title:string;
  children?: ReactChild;
};

const Layout_Page_Parent = ({ title,children }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} // 初期状態
        animate={{ opacity: 1 }} // マウント時
        exit={{ opacity: 0 }} // アンマウント時
        transition={{ duration: Number(THEMES.animations.duration.l.slice(0, -1)) }}
      >
        <div className="component">
          {/* <Parts_Control_Back bIsHome={title === "HOME"?true:false}/> */}
          <Parts_Control_Top/>
          <div className="contentAreaWrap">
            <div className="contentArea">{children}</div>
          </div>
          <Parts_Footer />
        </div>
        <div className="notForPhone">
          <br />
          <br />
          <h1>Under Construction</h1>
          <br />
          <br />
          <h2> - </h2>
          <h3>スマートフォンでの訪問は現在対応中でございます。</h3>
          <h3>お手数ですが、PCでの再度訪問をよろしくお願いいたします。</h3>
        </div>
      </motion.div>
      <style jsx>{`
        .component {
          min-height: 100vh;
          background-color: ${THEMES.colors.bg.main};
          position: relative;
          z-index: 100;
        }

        .notForPhone {
          display: none;
        }

        @media screen and (max-width: 1000px) {
          .component{
            display:none;
          }

          .notForPhone {
            display: block;
          }
        }

        .contentAreaWrap {
          min-height: calc(100vh - ${THEMES.blockUnits.vert.l});
          padding-top: ${THEMES.blockUnits.vert.m};
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contentArea {
          width: 1000px;
        }

        @media screen and (max-width: 1366px) {
          .contentArea {
            width: 900px;
          }
        }

        @media screen and (max-width: 1024px) {
          .contentArea {
            width: 100%;
            padding: 0 50px 0 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Layout_Page_Parent;
