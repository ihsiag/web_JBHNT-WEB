import { NextPage } from "next";
import { T_PROJECT } from "src/types";

import P_Layout from "src/components/PA_Layout";
import P_SectionTitle from "src/components/PA_SectionTitle";
import SE_Catch from "src/components/SE_PRJT_Catch";
import SE_Phases from "src/components/SE_PRJT_Phases";
import SE_Keywords from "src/components/SE_PRJT_Keywords";
import SE_Visuals from "src/components/SE_PRJT_Visuals";
import SE_FinalBanar from "src/components/SE_PRJT_FINALBANAR";


type Props ={
  project:T_PROJECT;
};

const Page_Coathook: NextPage<Props> =({project}:Props)=>{
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
    title:"STRIKE",
    subtitle:"国際家具見本市に向けてデザインしたコートフック",
    catchVisual:{
      src:"/DB/projects/COATHOOK/0.jpg",
    },
    catchCopy:"こんなところに時計が...!",
    catchDescription:"文字盤の上から服をかけるこのコートフックは、時計本来の機能を奪う。モノから機能が失われた時、初めて人はものの持つ表情や美しさに目を向ける。鑑賞の対象である時計に積極的に働きかける振る舞いは、時計が持つ不思議な魅力に気づく助けとなる。",
    keywords:["リサーチ","クラフト","ディテール"],
    phases:{
      title:"丁寧にものづくり",
      descriptions:[
        "ゼミ",
        "目視で観察取材をする中で、刃物が修理台に当たっている点が気になった。",
        "",
        "",
        "",
        "",
        ""

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
     project:project  
    }
}
}

export default Page_Coathook;

