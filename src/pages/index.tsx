import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';
import Layout_Page_Parent from 'src/components/LAYOUT_PAGE_PARENT';

type Props ={
  about:string;
}

const Page_Home: NextPage<Props> = ({ about }: Props) => {
  return (
    <>
      <Head>
        <title>HOME | Gaishi Kudo</title>
      </Head>
      <Layout_Page_Parent backgroundColor='rgb(240,240,240)'>
        <>
        <h1>Under Construction</h1>
        </>
      </Layout_Page_Parent>
      <style jsx>{`
      `}</style>
    </>
  );
};

export default Page_Home;
