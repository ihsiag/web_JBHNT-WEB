import PA_BasicProfile from "./PA_BasicProfile";
import PA_Motivations from "./PA_Motivations";
import PA_Skills from "./PA_Skills";
import * as THEMES from "src/styles/theme";

type Props ={
  bIsOpen:boolean;
}

const PN_Profile = ({bIsOpen}:Props) => {
  return (
    <>
      <div className="component">
        <div className={["panel",bIsOpen?"open":""].join(" ")}>
          <PA_BasicProfile/>
          <PA_Skills/>
          <PA_Motivations/>
        </div>
      </div>

      <style jsx>{` 
      body{
        ${bIsOpen?"overflow:hidden;":""}
      }       
        .component{
          position:absolute;
          width:100%;
          height:100%;
          
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .panel{
          opacity:0;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center; 
          transition-duration:${THEMES.animations.duration.m};
        }
        .open{
          opacity:1;
          transition-delay:${THEMES.animations.duration.l};
        }
      `}</style>
    </>
  );
};

export default PN_Profile;