import Link from "next/link";
import * as THEMES from "src/styles/theme";


const PN_Menu = () =>{
  return(
    <>
    <div className="component">
      <div className="title"><p>もくじ</p></div>
      <ul className="links">
        <li><Link href="/"><a><p>home</p></a></Link></li>
        <li><Link href="/projects/bebento"><a><p>bebento</p></a></Link></li>
        <li><Link href="/projects/coathook"><a><p>coathook</p></a></Link></li>
      </ul>
    </div>
    <style jsx>{`
      .component{
        position:fixed;
        top:0px;
        left:0px;
        width:${THEMES.blockUnits.l};
        height:100vh;
        background-color:lightgreen;
        padding:${THEMES.gaps.xxl} ${THEMES.gaps.l};
      }

      .title p{
        font-size:${THEMES.fontSizes.l};
      }

      .links p{
        font-size:${THEMES.fontSizes.m};
      }

    `}</style>
    </>
  );
}

export default PN_Menu;