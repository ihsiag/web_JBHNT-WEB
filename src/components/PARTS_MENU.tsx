import Link from "next/link";
import * as THEMES from "src/styles/theme";
import * as UTILS from "src/utils/index";

const Parts_Menu = () =>{
  const obj_lastUpdatedAt = UTILS.getYMHMSfromNodeJsStatsTime(process.env.NEXT_PUBLIC_LAST_UPDATED_AT);
  const str_lastUpdatedAt = `${obj_lastUpdatedAt.ye} / ${obj_lastUpdatedAt.mo} / ${obj_lastUpdatedAt.da}`;
  return(
    <>
    <div className="component">
      <div className="panel">
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
        <nav className="naviWrap">
          <ul className="navi">
            <Link href="/projects/" scroll={false}><a><li><p>PROJECTS</p></li></a></Link>
            <Link href="/info/" scroll={false}><a><li><p>INFO</p></li></a></Link>
            <Link href="/dev/" scroll={false}><a><li><p>DEV(*)</p></li></a></Link>
          </ul>
        </nav>
      </div>
    </div>
    <style jsx>{`
      .component{
        display:block;
        position:absolute;
        width:${THEMES.blockUnits.hori.l};
        height:100vh;
      }

      .panel{
        position:absolute;
        width:${THEMES.blockUnits.hori.l};
        padding:${THEMES.rs.m};
        border-radius:${THEMES.rs.m};
        top:${THEMES.blockUnits.vert.m};
        background-color:${THEMES.colors.bg.sub};
        filter:drop-shadow(${THEMES.dropShadows.default});
        transition-duration:${THEMES.animations.duration.l};
      }

      .panel:hover{
        filter:drop-shadow(${THEMES.dropShadows.hovered});
      }

      .dataWrap{
        padding:${THEMES.blockUnits.vert.m} 0 ${THEMES.blockUnits.vert.s} 0;
        border-bottom:solid 1px ${THEMES.colors.accent.gray}; 
      }

      .data p{
        color:${THEMES.colors.text.main};
        font-size:${THEMES.fontSizes.xs};
        font-weight:${THEMES.fontWeights.n}
      }

      .data li{
        padding:${THEMES.paddings.vert.s} ${THEMES.paddings.hori.m};
      }

      .data li p{
        display:inline;
        padding:0 ${THEMES.paddings.hori.s} 0 ${THEMES.paddings.hori.s};
      }

      .data li p:first-child{
        padding-left:0;
      }

      .data li p:last-child{
        padding-right:0;
      }

      .naviWrap{
        padding:${THEMES.blockUnits.vert.s} 0 ${THEMES.blockUnits.vert.m} 0;
      }

      .navi p{
        color:${THEMES.colors.text.main};
        font-size:${THEMES.fontSizes.l}
      }

      .navi li{
        padding:${THEMES.paddings.hori.m};
        border-radius:${THEMES.rs.xs};
        transition-duration:${THEMES.animations.duration.s};
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

export default Parts_Menu;