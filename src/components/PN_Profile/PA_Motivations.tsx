import Image from "next/image";
import S_ImageWrap from "src/styles/ST_ImageWrap";
import * as THEMES from "src/styles/theme";


const PA_Motivations = () => {
  return (
    <>
      <div className="component">
        <ul className="skills">
          <li>
            <S_ImageWrap>
              <Image src="/profile/profileImage.JPG" alt="profile image" quality={40} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
            </S_ImageWrap>
          </li>
          <li>
            <S_ImageWrap>
              <Image src="/profile/profileImage.JPG" alt="profile image" quality={40} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
            </S_ImageWrap>
          </li>
          <li>
            <S_ImageWrap>
              <Image src="/profile/profileImage.JPG" alt="profile image" quality={40} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
            </S_ImageWrap>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .component {
          padding-bottom: ${THEMES.blockUnits.s};
        }

        .skills {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .skills li {
          height: 200px;
        }
      `}</style>
    </>
  );
};

export default PA_Motivations;