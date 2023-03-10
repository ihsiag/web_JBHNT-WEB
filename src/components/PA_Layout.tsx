import { ReactChild } from "react";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";

import Parts_Control_Top from "src/components/PARTS_CONTROL_TOP";
// import Parts_Control_Back from "src/components/PARTS_CONTROL_BACK";
import SE_Footer from "src/components/SE_Footer";

import { motion } from "framer-motion";

type Props = {
  title?:string;
  children?: ReactChild;
  noPadding?:boolean;
};

const PA_Layout = ({ title,children ,noPadding}: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0}} // 初期状態
        animate={{ opacity: 1}} // マウント時
        exit={{ opacity: 0 }} // アンマウント時
        transition={{ duration: Number(THEMES.durations.l.slice(0, -1)) }}
      >
        <div className="component">
          {/* <Parts_Control_Back bIsHome={title === "HOME"?true:false}/> */}
          {/* <Parts_Control_Top/> */}
          <div className="contentAreaWrap">
            {children}
          </div>
          <SE_Footer />
        </div>
      </motion.div>
      <style jsx>{`
        .component {
          min-height: 100vh;
          background-color: ${THEMES.colors.bg.main};
          position: relative;
          z-index: 100;
        }

        @media screen and (max-width: 1000px) {
          .component{
            display:none;
          }
        }

        .contentAreaWrap {
          min-height: calc(100vh - ${THEMES.blockUnits.xl});
          padding-top: ${noPadding?"":THEMES.blockUnits.m};
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default PA_Layout;
