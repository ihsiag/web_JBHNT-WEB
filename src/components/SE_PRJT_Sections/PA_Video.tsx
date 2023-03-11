import ST_VIDEO from "src/styles/ST_VIDEO";

type Props = {
  src: string;
};

const PA_Video = ({src}:Props) => {
  return (
    <>
      <ST_VIDEO>
        <video src={src} loop muted autoPlay playsInline />
      </ST_VIDEO>
    </>
  );
};

export default PA_Video;
