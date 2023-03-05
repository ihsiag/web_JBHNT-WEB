import Link from "next/link";
import * as THEMES from "src/styles/theme";


const SE_Menu = () =>{
  return(
    <>
    <div className="component">
      <div className="title"><p>もくじ</p></div>
      <ul className="links">
        <li><Link href="/"><a><p>home</p></a></Link></li>
        <li><Link href="/projects/bebento"><a><p>bebento</p></a></Link></li>
        <li><Link href="/projects/coathook"><a><p>coathook</p></a></Link></li>
        <li><Link href="/projects/stool"><a><p>stool</p></a></Link></li>
      </ul>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontFamilies.gsans};
      }

      .component{
        position:fixed;
        top:0px;
        left:0px;
        width:${THEMES.blockUnits.l};
        height:100vh;
        padding:${THEMES.gaps.xxl} ${THEMES.gaps.l};

        border-right:1px solid ${THEMES.colors.text.main};
        background-color:${THEMES.colors.bg.sub};
        z-index:100;
      }

      .title p{
        font-size:${THEMES.fontSizes.xl};
        font-weight:${THEMES.fontWeights.b};
      }

      .links p{
        font-size:${THEMES.fontSizes.m};
        font-weight:${THEMES.fontWeights.b};
      }

    `}</style>
    </>
  );
}

export default SE_Menu;