import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import * as THEMES from "src/styles/theme";
import Layout_Page_Parent from "src/components/LAYOUT_PAGE_PARENT";
import Sc_ImageWrap from "src/components/SC_IMAGEWRAP";

type Props = {
  about: string;
};

const Page_Home: NextPage<Props> = ({ about }: Props) => {
  return (
    <>
      <Head>
        <title>HOME | Gaishi Kudo</title>
      </Head>
      <Layout_Page_Parent>
        <>
          <div className="component">
            <InParts_Profile />
            <InParts_Skills />
            <InParts_Motivations />
          </div>
        </>
      </Layout_Page_Parent>
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
  return(
  <>
    <div className="component">
      <ul className="container">
        <li className="photoArea">
          <Sc_ImageWrap rs = {THEMES.rs.m}>
            <Image
              src="/profile/profileImage.JPG"
              alt="profile image"
              quality={40}
              priority={false}
              loading={"lazy"}
              unoptimized={false}
              layout={"fill"}
              objectFit={"contain"}
              blurDataURL="data:image/jpeg;base64,"
              placeholder="blur"
            />
            </Sc_ImageWrap>
          </li>
        <li className="textArea">
          <ul className="ta-whoIam">
            <li className="name"><p>工藤外四</p></li>
            <li className="year"><p>1996年生まれ</p></li>
          </ul>
          <ul className="ta-career">
            <li><p>京都工芸繊維大学</p></li>
            <li><p>ArtEZ University of the Arts</p></li>
            <li><p>Sunayama Studio</p></li>
            <li><p>株式会社砂木</p></li>
          </ul>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .component{
        display:flex;
        justify-content:center;
        /* background-color:red; */
      }

      .container{
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:${THEMES.gaps.xxl};
        justify-content:center;
      }

      .photoArea{
        width:320px;
        height:320px;
      }

      .imgWrap{
        position:relative;
        width:100%;
        height:100%;
      }

      .textArea{
        width:fit-content;
        /* background-color:yellow; */
      }

      .textArea p{
        font-size:${THEMES.fontSizes.m};
        font-weight:${THEMES.fontWeights.b}
      }

      .ta-whoIam{
        padding-bottom:${THEMES.gaps.l};
      }

      .ta-whoIam .year p{
        font-size:${THEMES.fontSizes.s};
      }

    `}</style>
  </>
  );
};

const InParts_Skills = () => {
  return (
    <>
      <div className="component">
        <div className="skills">
          <Sc_ImageWrap>
            <Image
              src="/profile/profileImage.JPG"
              alt="profile image"
              quality={40}
              priority={false}
              loading={"lazy"}
              unoptimized={false}
              layout={"fill"}
              objectFit={"contain"}
              blurDataURL="data:image/jpeg;base64,"
              placeholder="blur"
            />
          </Sc_ImageWrap>

        </div>
      </div>
    </>
  );
};

const InParts_Motivations = () => {
  return (
    <>
      <div className="component">
        <div className="motivations">
          <div className="motivation">じじ</div>
          <div className="motivation">ざざ</div>
          <div className="motivation">ずず</div>
        </div>
      </div>
    </>
  );
};

export default Page_Home;
