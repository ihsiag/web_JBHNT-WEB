import { NextPage } from "next";
import { T_PROJECT } from "src/types";

import P_Layout from "src/components/PA_Layout";
import P_SectionTitle from "src/components/PA_SectionTitle";
import SE_Catch from "src/components/SE_PRJT_Catch";
import SE_Phases from "src/components/SE_PRJT_Phases";
import SE_Keywords from "src/components/SE_PRJT_Keywords";


type Props ={
  project:T_PROJECT;
};

const Page_Bebento: NextPage<Props> =({project}:Props)=>{
  return(
    <>
    <P_Layout>
      <> 
        <SE_Catch project={project}/>
        <SE_Keywords keywords={project.keywords}/>
        <SE_Phases phases = {project.phases}/>
        {/* <SE_Visuals/> */}
        <P_SectionTitle text="プロトタイプ"/>
      </>
    </P_Layout>
    <style jsx>{`

    `}</style>
    </>
  );
}

export const getStaticProps = async()=>{
  const project:T_PROJECT = {
    title:"BEBENTO",
    subtitle:"市内を移動し続ける靴修理職人のための\"弁当箱\"",
    catchVisual:{
      src:"/DB/projects/BEBENTO/0.jpg",
    },
    catchCopy:"中川さんが喜ぶものをつくりたい...!",
    catchDescription:"京都市内各所を靴修理をしてまわるナカガワさんは、移動する先々で開店準備に時間がかかっていた。 私達は、ナカガワさんが開店を素早く、美しく行えるよう援助する道具を日本のお弁当箱から着想を得て制作した。",
    keywords:["聞き取り","観察","試作"],
    phases:{
      title:"潜在的なニーズを見つけるところから",
      descriptions:[
        "中川さんという靴修理の職人に取材を行った。",
        "目視で観察取材をする中で、刃物が修理台に当たっている点が気になった。",
        "刃物を守るための修理台カバーを試作して持っていったところ、中川さんはすでに自前で解決済であった。",
        "どうしても職人さんの手元に目が行ってしまうが、そこに素人が入り込むのはとても難しい。もっと引いた視点で中川さんが直面している問題を探すため、作業前から作業後まで複数の定点カメラで観察してみることにした。",
        "ビデオを見返す中で、店開きの際、特に物販の準備に長い時間を要している事に気が付いた。どうしたら小さな工夫で準備時間を短縮できるだろうか？",
        "弁当箱をモチーフにスムーズな陳列と収納を可能とする箱を作ることに。検討、プロトタイプを繰り返し、実際に使用してもらうことで改良を加えていった。",
        "BEBENTOと名付けたその収納箱は、中川さんの店開きにかかる時間を導入前と比べて1/4短縮する。"

      ],
      images:[
        {src:"",caption:""},
        {src:"",caption:""},
        {src:"",caption:""}
      ]
    },
   }
  return{
    props:{
     project:project  
    }
}
}

export default Page_Bebento;

