import Link from "next/link";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";

const PA_Navi_Projects = () => {
  const obj_lastUpdatedAt = UTILS.getYMHMSfromNodeJsStatsTime(process.env.NEXT_PUBLIC_LAST_UPDATED_AT);
  const str_lastUpdatedAt = `${obj_lastUpdatedAt.ye} / ${obj_lastUpdatedAt.mo} / ${obj_lastUpdatedAt.da}`;
  return(
    <>
    <div className="component">
      <div className="panel">
        <nav className="naviWrap">
          <ul className="navi">
            
          </ul>
        </nav>
      </div>
    </div>
    <style jsx>{`
      .component{
        display:block;
        position:absolute;
        width:${THEMES.blockUnits.xl};
        height:100vh;
        transform:translate(-50%,0);
      }

      .panel{
        position:absolute;
        width:${THEMES.blockUnits.xl};
        top:${THEMES.blockUnits.xs};
        padding:${THEMES.rs.m};
        border-radius:${THEMES.rs.m};
        background-color:${THEMES.colors.bg.sub};
        filter:drop-shadow(${THEMES.dropShadows.default});
        transition-duration:${THEMES.durations.l};
      }

      .panel:hover{
        filter:drop-shadow(${THEMES.dropShadows.hovered});
      }

    `}</style>
    </>
  );
}

export default PA_Navi_Projects;