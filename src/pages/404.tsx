
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import Layout_Page_Parent from 'src/components/LAYOUT_PAGE_PARENT';
import * as UTILS from "src/utils";
import { PageProps_Minimal} from "src/types/dataTypes";


const Page_NotFound: NextPage<PageProps_Minimal> = () => {
  const obj_lastUpdatedAt = UTILS.getYMHMSfromNodeJsStatsTime(process.env.NEXT_PUBLIC_LAST_UPDATED_AT);
  const str_lastUpdatedAt = `${obj_lastUpdatedAt.ye} / ${obj_lastUpdatedAt.mo} / ${obj_lastUpdatedAt.da} ${obj_lastUpdatedAt.ho}:${obj_lastUpdatedAt.mi}`;
  return (
    <>
      <Head>
        <title>UC or 404 | Gaishi Kudo</title>
      </Head>
      <Layout_Page_Parent title={"404"}>
        <>    
        <br/>
        <br/>    
        <h1>Not Exists | Under Construction</h1>
        <br/>
        <br/>
        <h2> - </h2>
        <h3>このページは、存在しないか、制作中の場合があります。</h3>
        <h3>お手数ですが、次回OPEN時に、再度訪問をお願いいたします。</h3>
        <br/>
        <br/>
        <p>LAST UPDATED ... [{str_lastUpdatedAt}]</p>
        <p>NEXT OPEN SCHEDULED ... [????/??/??]</p>
        <br/>
        <br/>
        <Link href ="/">
          <a>
            <h1>&gt;&gt;&gt; HOME</h1>
          </a>
        </Link>
        <br/>
        <br/>
        <br/>
        </>
      </Layout_Page_Parent>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = () => {
  return {
    props: {
      title_header:"404",
      pageNames_crumbs:["404"],
    },
  };
};

export default Page_NotFound;
