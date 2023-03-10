import Image from "next/image";
import ST_IMAGE from "src/styles/ST_IMAGE";
import * as THEMES from "src/styles/theme";

const PA_Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <div className="imageWrap">
        <ST_IMAGE ntl={true}>
          <Image src={src} alt={alt} quality={100} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
        </ST_IMAGE>
      </div>
      <style jsx>{`
        .imageWrap {
          width: 100%;
          filter: drop-shadow(${THEMES.dropShadows.weak});
        }
      `}</style>
    </>
  );
};

export default PA_Image;