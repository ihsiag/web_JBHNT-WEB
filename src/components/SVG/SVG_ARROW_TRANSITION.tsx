import * as THEMES from "src/styles/theme";

type Props = {
  defaultColor?:string;
  abs?:boolean;
}
const SVG_ARROW_Transition = ({defaultColor,abs}:Props) =>{
  return(
  <>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <circle className="circle filled" cx="101.51" cy="320" r="37.5" />
  <circle className="circle filled" cx="189.32" cy="320" r="37.5" />
  <path className="filled"
    d="m523.47,266.97l-175.01-175.01c-14.64-14.64-38.39-14.64-53.03,0-14.64,14.64-14.64,38.39,0,53.03l137.51,137.51h-155.81c-20.71,0-37.5,16.79-37.5,37.5s16.79,37.5,37.5,37.5h155.81l-137.51,137.51c-14.64,14.64-14.64,38.39,0,53.03,14.65,14.64,38.39,14.64,53.03,0,0,0,0,0,0,0l175.01-175.01,53.03-53.03-53.03-53.03Z" />
  </svg>
  <style jsx>{`
    svg{
      ${abs?"position:absolute;\ntop:0;\nleft:0;":""}
      width:100%;
    }
    path,circle{
      width:100%;
      height:100%;
    }
    .filled{
      fill:${defaultColor?defaultColor:THEMES.colors.text.main};
    }
  `}</style>
  </>
  );
}

export default SVG_ARROW_Transition;