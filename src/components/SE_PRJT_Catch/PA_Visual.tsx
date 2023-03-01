import Image from "next/image";
import S_ImageWrap from "src/styles/ST_ImageWrap";
import * as THEMES from "src/styles/theme";
import { T_IMAGE } from "src/types";

type Props = {
  visual:T_IMAGE;
};

const PA_Visual = ({ visual}: Props) => {
  const _w = "100%";
  const _aR = 16/9;
  return (
    <>
      <div className="component">
        <div className="visualAreaFrame">
          <S_ImageWrap r={THEMES.rs.s} abs={true}>
            <Image 
                src={visual.src} 
                alt="" 
                quality={40} 
                priority={false} 
                loading={"lazy"} 
                unoptimized={false} 
                layout={"fill"} 
                objectFit={"cover"} 
                blurDataURL="data:image/jpeg;base64," 
                placeholder="blur" />
            </S_ImageWrap>
        </div>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          height: 100%;
        }

        .visualAreaFrame{
          position:relative;
          width:${_w};
          height:100%;
          padding-top:calc(${_w} / ${_aR});
        }

        .visualArea{
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          background-color:green;
        }
      `}</style>
    </>
  );
};

export default PA_Visual;
