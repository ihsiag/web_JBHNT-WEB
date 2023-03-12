import Image from "next/image";
import ST_IMAGE from "src/styles/ST_IMAGE";
import * as THEMES from "src/styles/theme";

declare type ImgElementStyle = NonNullable<JSX.IntrinsicElements['img']['style']>;

type Props = {
  src: string;
  alt?: string;
  r?: string; //border-radius
  abs?: boolean; //pos : absolute
  ntl?: boolean; //hold natural aspect
  h?: string; //height
  objectFit?:ImgElementStyle['objectFit'];
};
const PA_Image = ({ src, alt, r, abs, ntl, h, objectFit}: Props) => {
  return (
    <>
      <ST_IMAGE r={r ? r : undefined} ntl={ntl ? ntl : undefined} abs={abs ? abs : undefined} h={h ? h : undefined}>
        <Image src={src} alt={alt ? alt : ""} quality={100} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={objectFit?objectFit:"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
      </ST_IMAGE>
      <style jsx>{``}</style>
    </>
  );
};

export default PA_Image;
