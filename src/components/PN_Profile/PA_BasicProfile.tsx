
import * as THEMES from "src/styles/theme";
import Image from "next/image";
import S_ImageWrap from "src/styles/ST_ImageWrap";

const PA_BasicProfile = () => {
  return (
    <>
      <div className="component">
        <div className="containerWrap">
        <h1>ようこそ</h1>
        </div>
        <div className="containerWrap">
          <ul className="container">
            <li className="photoArea">
              <S_ImageWrap r={THEMES.rs.m}>
                <Image src="/profile/profileImage.JPG" alt="" quality={40} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
              </S_ImageWrap>
            </li>
            <li className="textArea">
              <ul className="ta-whoIam">
                <li className="name">
                  <p>工藤外四</p>
                </li>
                <li className="year">
                  <p>1996年生まれ</p>
                </li>
              </ul>
              <ul className="ta-career">
                <li>
                  <p>京都工芸繊維大学</p>
                </li>
                <li>
                  <p>ArtEZ University of the Arts</p>
                </li>
                <li>
                  <p>Sunayama Studio</p>
                </li>
                <li>
                  <p>株式会社砂木</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .component {
          /* height: 100vh; */
          /* padding-bottom:${THEMES.blockUnits.s}; */
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .containerWrap{
          display: flex;
          justify-content: center;
          padding-bottom:${THEMES.gaps.l};
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: ${THEMES.gaps.xxl};
          justify-content: center;
        }

        .photoArea {
          width: 320px;
          height: 320px;
        }

        .imgWrap {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .textArea {
          width: fit-content;
          /* background-color:yellow; */
        }

        .textArea p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.b};
        }

        .ta-whoIam {
          padding-bottom: ${THEMES.gaps.l};
        }

        .ta-whoIam .name p {
          font-size: ${THEMES.fontSizes.l};
        }

        .ta-whoIam .year p {
          font-size: ${THEMES.fontSizes.s};
        }
      `}</style>
    </>
  );
};

export default PA_BasicProfile;