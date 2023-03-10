import Document,{ Html, Head, Main, NextScript, DocumentContext } from "next/document";
import MISC_Seo from "src/components/MISC_Seo";
import { ServerStyleSheet } from "styled-components";

//To Fix Styled-Component BUG
export default class CustomizedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(){
    return MyDocument();
  }  
}

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
        <link rel="stylesheet" href="/fonts/fonts.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;900&display=swap" rel="stylesheet"/>
        </>

        {/* <!-- SET SEO --> */}
        <>
          {/* <MISC_Seo
            pageTitle={"工藤外四 | Gaishi Kudo"}
            pagePath={"https://web-jbhnt-web.vercel.app/"}
            pageDescription={`
              工藤外四 / Gaishi Kudo
            `}
            pageImg={"/element/seo.png"}
            pageImgWidth={540}
            pageImgHeight={540}
          /> */}
        </>
      </Head>

      <body>
        <script></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};