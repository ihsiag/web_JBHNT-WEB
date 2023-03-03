import * as THEMES from "src/styles/theme";

import S_ImageWrap from "src/styles/ST_ImageWrap";
import { T_IMAGE } from "src/types";
import Image from "next/image";


type Props ={
  visual:T_IMAGE;
}

const SE_FinalBanar = ({visual}:Props) =>{
  const _w = "100%";
  const _aR = 16/9;
  return(
    <>
    <div className="component">
      <div className="container">
        <S_ImageWrap abs={true}>
          <Image 
            src={visual.src} 
            alt= ""
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
      <div className="description">
        <p>{visual.caption}</p>
      </div>
    </div>
    <style jsx>{`
      .component{
        padding-bottom:${THEMES.blockUnits.s};
      }

      .container{
        position:relative;
        width:${_w};
        height:100%;
        padding-top:calc(${_w} / ${_aR});
      }

      .description p{
        padding-top:${THEMES.gaps.l};
        font-size:${THEMES.fontSizes.m};
      }
    `}</style>
    </>
  );
}

export default SE_FinalBanar;