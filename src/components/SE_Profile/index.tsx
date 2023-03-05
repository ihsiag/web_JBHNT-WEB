
import * as THEMES from "src/styles/theme";
import { useEffect, useState } from "react";
import PN_Profile from "../PN_Profile";

const SE_Profile = ()=>{
  const [bIsOpen,set_bIsOpen] = useState(false);
  const _w = THEMES.blockUnits.s;
  const buttonPressed = () =>{
    set_bIsOpen(!bIsOpen);
    console.log(bIsOpen);
  }
  return(
    <>
    <div className={["component",bIsOpen?"open":""].join(" ")}>
      <PN_Profile bIsOpen={bIsOpen}/> 
      <div className="vertical">
        <button type={"button"} onClick={buttonPressed} className="textBox">
          <p>私について</p>
        </button>
      </div>       
    </div>
    <style jsx>{`
      p {
        font-family: ${THEMES.fontFamilies.gsans};
        font-size: ${THEMES.fontSizes.xl};
        font-weight: ${THEMES.fontWeights.eb};
      }

      .component {
        position:fixed;
        top:0;
        right:0;
        width:${_w};
        height:100vh;
        z-index:100;
        
        border-left: solid 1px ${THEMES.colors.text.main};
        background-color: ${THEMES.colors.bg.sub};
        /* background-color:green; */

        cursor:pointer;
        transition-duration:${THEMES.animations.duration.l};
      }

      .vertical{
        position: fixed;
        top: calc(100vh - ${_w});
        left: 100%;
        width: 100vh;
        height: ${_w};
        transform-origin: left bottom;
        transform: rotate(-90deg);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .textBox {
          width: fit-content;
          /* background-color:red; */
        }

        .open{
          width:100%;
        }
    `}</style>
    </>
  );
}

export default SE_Profile;