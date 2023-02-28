
import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import Layout_Page_Parent from 'src/components/LAYOUT_PAGE_PARENT';


const Page_NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>UC or 404 | Gaishi Kudo</title>
      </Head>
      <Layout_Page_Parent backgroundColor='rgb(240,240,240)'>
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
        <p>LAST UPDATED ... [2022/10/01 21:00]</p>
        <p>NEXT OPEN SCHEDULED ... [2022/10/07 18:00]</p>
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

export default Page_NotFound;
