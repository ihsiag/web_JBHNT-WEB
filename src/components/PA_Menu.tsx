import Link from "next/link";
import * as THEMES from "src/styles/theme";


const PA_Menu = () =>{
  return(
    <>
    <div className="component">
      <ul>
        <li><Link href="/"><a><p>home</p></a></Link></li>
        <li><Link href="/projects/bebento"><a><p>bebento</p></a></Link></li>
        <li><Link href="/projects/coathook"><a><p>coathook</p></a></Link></li>
      </ul>
    </div>
    <style jsx>{`
    p{
      font-size:${THEMES.fontSizes.m};
    }
      .component{
        position:fixed;
        top:50px;
        left:50px;
        width:${THEMES.blockUnits.l};
        height:${THEMES.blockUnits.xl};
        background-color:gray;
      }
    `}</style>
    </>
  );
}

export default PA_Menu;