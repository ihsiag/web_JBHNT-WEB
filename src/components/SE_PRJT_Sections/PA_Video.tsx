import ST_VIDEO from "src/styles/ST_VIDEO";
import * as THEMES from "src/styles/theme"

type Props = {
  src: string;
  r?:string;
};

const PA_Video = ({src,r}:Props) => {
  return (
    <>
      <ST_VIDEO r={r?r:THEMES.rs.s}>
        <video src={src} loop muted autoPlay playsInline />
      </ST_VIDEO>
    </>
  );
};

export default PA_Video;
