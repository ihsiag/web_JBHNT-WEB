import S_ImageWrap from "src/styles/ST_ImageWrap";
import { T_IMAGE, T_PRJT_VISUALS } from "src/types";
import PA_SectionTitle from "../PA_SectionTitle";
import Image from "next/image";
import * as THEMES from "src/styles/theme";

type Props ={
  visuals:T_PRJT_VISUALS;
}

const SE_Visuals = ({visuals}:Props)=>{
  return(
    <>
    <div className="component">
      <PA_SectionTitle text={visuals.title}/>
      <div className="flexContainer">
        {visuals.images.map((i,_i)=>
            <div className="item" key={`SE_PRJT_VISUALS_${_i}`}>
              <S_ImageWrap r={THEMES.rs.s}>
                <Image 
                  src={i.src} 
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
          )}
      </div>
    </div>
    <style jsx>{`
      .component{
        padding-bottom:${THEMES.blockUnits.l};
      }
      .flexContainer{
        display:flex;
        justify-content:space-between;
      }
      .item{
        width:${THEMES.blockUnits.xl};
        height:${THEMES.blockUnits.m};
      }

    `}</style>
    </>
  );
}

export default SE_Visuals;