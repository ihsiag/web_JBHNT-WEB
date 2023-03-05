import S_ImageWrap from "src/styles/ST_ImageWrap";
import * as THEMES from "src/styles/theme";
import { T_IMAGE, T_VEC2 } from "src/types";
import Image from "next/image";

type Props ={
  image:T_IMAGE;
  position:T_VEC2;
}

const PA_PhaseImage = ({image,position}:Props)=>{
  const _w = THEMES.blockUnits.l;
  const _ar = 16/9;
  const _gap = THEMES.gaps.m;
  return(
    <>
      <div className="component">
        <div className="area">
        <div className="bg"/>
          <S_ImageWrap r={THEMES.rs.s} abs={true}>
            <Image
              src={image.src} 
              alt="" 
              quality={40} 
              priority={false} 
              loading={"lazy"} 
              unoptimized={false} 
              layout={"fill"} 
              objectFit={"cover"} 
              blurDataURL="data:image/jpeg;base64," 
              placeholder="blur"
            />
          </S_ImageWrap>
        </div>
      </div>
      <style jsx>{`
        .component{
          position:absolute;
          top:${position.y}px;
          left:${position.x}px;
          transform:translate(-50%,-50%);
          width:calc(${_w} + ${_gap});
          height:calc(calc(${_w} / ${_ar}) + ${_gap});
        }

        .area{
          position:relative;
          width:${_w};
          padding-top:${_w};
          /* padding-top:calc(${_w} / ${_ar}); */
        }

        .bg{
          width:100%;
          height:100%;
          position:absolute;
          top:${_gap};
          left:${_gap};
          background-color:red;
          border-radius:${THEMES.rs.s};
        }
      `}</style>
    </>
    );
}

export default PA_PhaseImage;