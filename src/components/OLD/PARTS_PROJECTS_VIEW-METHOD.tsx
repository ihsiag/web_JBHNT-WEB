import { NextRouter } from "next/router";
import { memo, useState } from "react";
import * as THEMES from "src/styles/theme";

type Props ={
  currentParentViewMethodIsIndex:boolean;
  setParentViewMethodIsIndex :React.Dispatch<React.SetStateAction<boolean>>;
}

const Parts_Projects_ViewMethod = ({currentParentViewMethodIsIndex,setParentViewMethodIsIndex}:Props) => {

  const handleParentViewMethodIsIndex = (_childViewMethodIsIndex:boolean)=>{
    setParentViewMethodIsIndex(_childViewMethodIsIndex);
  }

  const [childViewMethodIsIndex,setChildViewMethodIsIndex] = useState(currentParentViewMethodIsIndex);
  const handleChildViewMethodIsIndex = ()=>{
    setChildViewMethodIsIndex(!childViewMethodIsIndex);
    handleParentViewMethodIsIndex(childViewMethodIsIndex);
  }

  return (
    <>
      <div className="component">
        <div className="title">
          <p>VIEW BY ...</p>
        </div>
        <button type="button" onClick={handleChildViewMethodIsIndex} className={["button", childViewMethodIsIndex ? "setIndex" : "setTheater"].join(" ")}>
          <div className="methods">
            <div className={["background", childViewMethodIsIndex ? null : "theaterSelected"].join(" ")}/>
            <div className={["index", "method",childViewMethodIsIndex ? "selected" : null].join(" ")}><p>INDEX</p></div>
            <div className={["theater", "method",childViewMethodIsIndex ? null : "selected"].join(" ")}><p>THEATER</p></div>
          </div>
        </button>
      </div>
      <style jsx>{`
        .component{
          width:${THEMES.blockUnits.hori.l};
        }

        .title{
          padding-bottom:${THEMES.paddings.vert.m};
        }

        .title p{
          font-size:${THEMES.fontSizes.l};
        }

        .button p{
          font-size:${THEMES.fontSizes.m};
          color:${THEMES.colors.text.main};
          transition-duration:${THEMES.animations.duration.m};
        }

        .selected p{
          color:${THEMES.colors.bg.main};
        }

        .button {
          width: 100%;
          margin:0;
          padding:0;
          border:none;
          background:none;
          cursor:pointer;
        }

        .methods {
          display: flex;
          position: relative;
          border-radius:${THEMES.rs.m};
          background-color:${THEMES.colors.bg.sub};
          transition-duration:${THEMES.animations.duration.l};
        }

        .methods:hover{
          background-color:${THEMES.colors.accent.gray};
          
        }
 
        .method {
          position:relative;
          z-index:11;
          width: 50%;
          height:100%;
          /* background-color:red; */
          padding: ${THEMES.paddings.vert.m} ${THEMES.paddings.hori.s};
        }

        .background {
          position: absolute;
          z-index:10;
          width: 50%;
          height: 100%;
          border-radius:${THEMES.rs.m};
          transform: translateX(0);
          transition-duration: ${THEMES.animations.duration.m};
          background-color: ${THEMES.colors.text.main};
        }

        .theaterSelected {
          transform: translateX(100%);
        }
      `}</style>
    </>
  );
};

export default memo(Parts_Projects_ViewMethod);
