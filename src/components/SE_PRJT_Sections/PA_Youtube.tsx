import ST_YOUTUBE from "src/styles/ST_YOUTUBE";
import * as THEMES from "src/styles/theme";

type Props ={
  src:string;
  r?:string;
}

const PA_Youtube = ({src,r}:Props)=>{
  return(
  <>
    <ST_YOUTUBE r={r?r:THEMES.rs.s}>
    <iframe 
      className="youtube"
      width="560"
      height="315"
      src={src} 
      title="YouTube video player" 
      // frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      />
    </ST_YOUTUBE>
  </>
  );
}

export default PA_Youtube;