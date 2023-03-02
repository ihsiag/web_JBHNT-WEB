import S_ImageWrap from "src/styles/ST_ImageWrap";
import * as THEMES from "src/styles/theme";
import { T_IMAGE } from "src/types";
import Image from "next/image";

type Props ={
  index:number;
  image:T_IMAGE;
}

const PA_PhaseVisual = ({image}:Props)=>{
  return(
    <>
      <div className="component">
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
      <style jsx>{`
        .component{
          position:relative;
          width:100%;
          padding-top:80%;
        }
      `}</style>
    </>
    );
}

export default PA_PhaseVisual;