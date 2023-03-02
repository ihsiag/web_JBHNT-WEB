import * as THEMES from "src/styles/theme";

const SVG_CrossThin = ({defaultColor,rotate}:{defaultColor:string;rotate?:number}) =>{
  return(
  <>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <rect x="278.68" y="64" width="82.65" height="512" />
    <rect x="278.68" y="64" width="82.65" height="512"
      transform="translate(640 0) rotate(90)" />
  </svg>
  <style jsx>{`
    svg{
      width:100%;
      ${rotate!==undefined?`transform:rotate(${rotate}deg);`:""}
    }
    rect{
      fill:${defaultColor};
    }
  `}</style>
  </>
  );
}

export default SVG_CrossThin;