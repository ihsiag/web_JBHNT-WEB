import * as THEMES from "src/styles/theme";

const Svg_Link_Ext = () =>{
  return(
  <>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="m12.4 35.7-2.1-2.1L30.9 13H12v-3h24v24h-3V15.1Z"/>
  </svg>
  <style jsx>{`
    svg{
      /* height:100%; */
      width:100%;
    }
    path{
      width:100%;
      height:100%;
      fill:${THEMES.colors.text.main};
    }
  `}</style>
  </>
  );
}

export default Svg_Link_Ext;