import { NextPage } from "next";
import { PageProps_Minimal, T_PROJECT } from "src/types";

import P_Layout from "src/components/PA_Layout";
import SE_Catch from "src/components/SE_PRJT_Catch";
import SE_Phases from "src/components/SE_PRJT_Phases";
import SE_Keywords from "src/components/SE_PRJT_Keywords";
import SE_Visuals from "src/components/SE_PRJT_Visuals";
import SE_FinalBanar from "src/components/SE_PRJT_FinalBar";


type Props = PageProps_Minimal &{
  project:T_PROJECT;
};

const Page_Stool: NextPage<Props> =({project}:Props)=>{
  return(
    <>
    <P_Layout>
      <> 
        <SE_Catch project={project}/>
        <SE_Keywords keywords={project.keywords}/>
        <SE_Phases phases = {project.phases}/>
        <SE_Visuals visuals={project.visuals}/>
        <SE_FinalBanar visual={project.finalBanar}/>
        {/* <SE_Navi/> */}
      </>
    </P_Layout>
    <style jsx>{`

    `}</style>
    </>
  );
}

export const getStaticProps = ()=>{
  const project:T_PROJECT = {
    title:"THE-WAY-WE-DESIGN",
    subtitle:"国際家具見本市に向けてデザインしたコートフック",
    catchVisual:{
      src:"/DB/projects/COATHOOK/0.jpg",
    },
    catchCopy:"人らしさってなんだろう...？",
    catchDescription:"人間特有の有機的データがデザインエレメントとなる。出来上がるものは奇妙である。震える手はそれを制御するべきだろうか。情報技術がより発達した世界は奇妙で有機的な形であふれかえっているのだろうか。そう遠くない未来世界の価値体系を妄想する。",
    keywords:["ヒトと\nコンピューター","未来","即興"],
    phases:{
      title:"丁寧にものづくり",
      descriptions:[
        "コンピューターと人が共にデザインを行っていく未来はあるだろうか？",
        "コンピューターと比較してヒトらしさは何だろう？",
      ],
      images:[
        {src:"/DB/PROJECTS/COATHOOK/phase_01.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_02.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_03.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_04.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_05.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_06.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_07.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/phase_08.png",caption:""},
      ]
    },
    visuals:{
      title:"プロトタイプ",
      description:"",
      images:[
        {src:"/DB/PROJECTS/COATHOOK/proto_01.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/proto_02.png",caption:""},
        {src:"/DB/PROJECTS/COATHOOK/proto_03.png",caption:""},
      ]
    },
    finalBanar:{
      src:"/DB/PROJECTS/COATHOOK/finalBanar.png",
      caption:"毎年4月にミラノで開催される世界最大規模の家具見本市「ミラノサローネ」、若手を中心にブースが出展されるサローネサテリテへ所属する研究室のチームとして参加した。ブースのテーマはmix。素材を金属に変更したホワイトボードを制作・展示した。"
    }
   }
  return{
    props:{
      head:"STOOL",
      project:project  
    }
}
}

export default Page_Stool;

