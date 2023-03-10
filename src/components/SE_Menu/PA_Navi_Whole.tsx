import Link from "next/link";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";

const PA_Navi_Whole = () => {
  const obj_lastUpdatedAt = UTILS.getYMHMSfromNodeJsStatsTime(process.env.NEXT_PUBLIC_LAST_UPDATED_AT);
  const str_lastUpdatedAt = `${obj_lastUpdatedAt.ye} / ${obj_lastUpdatedAt.mo} / ${obj_lastUpdatedAt.da}`;
  return(
    <>
    <div className="component">
      <div className="panel">
        <nav className="naviWrap">
          <ul className="navi">
            <Link href="/projects/" scroll={false}><a><li><p>PROJECTS</p></li></a></Link>
            <Link href="/info/" scroll={false}><a><li><p>INFO</p></li></a></Link>
            {/* <Link href="/dev/" scroll={false}><a><li><p>DEV(*)</p></li></a></Link> */}
          </ul>
        </nav>
        <div className="dataWrap">
        <ul className="data">
          <li><p>-</p></li>
          <li><p>VERSION</p><p>:</p><p>1.01-BETA</p></li>
          <li className="lastUpdatedAt"><p>LAST-UPDATED</p><p>:</p><p>{str_lastUpdatedAt}</p></li>
          <li><p>TYPEFACES</p><p>:</p><p>LINE SEED JP</p></li>
          <li><p>FRAMEWORKS</p><p>:</p><p>NEXT.JS</p></li>
          <li><p>LIBS</p><p>:</p><p>THREE.JS</p></li>
          <li><p>CMS</p><p>:</p><p>CUSTOM CMS</p></li>
        </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .component{
        display:block;
        position:absolute;
        width:${THEMES.blockUnits.xl};
        height:100vh;
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

      .dataWrap{
        padding:${THEMES.gaps.xl} 0 ${THEMES.gaps.l} 0;
        border-bottom:solid 1px ${THEMES.colors.accent.gray}; 
      }

      .data p{
        color:${THEMES.colors.text.main};
        font-size:${THEMES.fontSizes.xs};
        font-weight:${THEMES.fontWeights.n}
      }

      .data li{
        padding:${THEMES.gaps.xxs} ${THEMES.gaps.m};
      }

      .data li p{
        display:inline;
        padding:0 ${THEMES.gaps.xs};
      }

      .data li p:first-child{
        padding-left:0;
      }

      .data li p:last-child{
        padding-right:0;
      }

      .naviWrap{
        padding:${THEMES.gaps.l} 0 ${THEMES.gaps.xl} 0;
      }

      .navi p{
        color:${THEMES.colors.text.main};
        font-size:${THEMES.fontSizes.l}
      }

      .navi li{
        padding:${THEMES.gaps.m};
        border-radius:${THEMES.rs.xs};
        transition-duration:${THEMES.durations.s};
      }

      .navi li:hover{
        background-color:${THEMES.colors.accent.gray};
      }


      .lastUpdatedAt p{
        background:linear-gradient(transparent 40%, ${THEMES.colors.accent.gray} 0%);
      }
    `}</style>
    </>
  );
}

export default PA_Navi_Whole;