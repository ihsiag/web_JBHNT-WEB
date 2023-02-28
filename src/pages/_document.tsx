import { Html, Head, Main, NextScript } from "next/document";
import MISC_Seo from "src/components/MISC_Seo";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        {/* -- DEFAULT INFO -- */}
        <>
          <link rel="icon" type="image/jpg" sizes="32x32" href="/element/favicon.png" />
        </>

        {/* -- LOADING FONT -- */}
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600&display=swap" rel="stylesheet" />
        </>

        {/* <!-- SET SEO --> */}
        <>
          <MISC_Seo
            pageTitle={"Gaishi Kudo"}
            pageDescription={`
              Gaishi Kudo の web ページです。
            `}
            pageImg={"/element/seo.jpg"}
            pageImgWidth={540}
            pageImgHeight={540}
          />
        </>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
