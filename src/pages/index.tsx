import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import * as THEMES from "src/styles/theme";
import P_Layout from "src/components/PA_Layout";
import S_ImageWrap from "src/styles/ST_ImageWrap";

type Props = {
  about: string;
};

const Page_Home: NextPage<Props> = ({ about }: Props) => {
  return (
    <>
      <Head>
        <title>HOME | Gaishi Kudo</title>
      </Head>
      <P_Layout>
        <>
          <div className="component">
            <InParts_Profile />
            <InParts_Skills />
            <InParts_Motivations />
          </div>
        </>
      </P_Layout>
      <style jsx>{`
        .component {
          width: 100%;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
};

const InParts_Profile = () => {
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
                <Image src="/profile/profileImage.JPG" alt="profile image" quality={40} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" />
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
          height: 100vh;
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

const InParts_Skills = () => {
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

const InParts_Motivations = () => {
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

export default Page_Home;
