
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { T_PRJT_SECTION_FORMATTED } from "src/types";

type Props ={
  asUrl:string;
  sections:T_PRJT_SECTION_FORMATTED[];
}

type PropsToUnique ={
  sections:T_PRJT_SECTION_FORMATTED[];
}

const SE_PRJT_Sections = ({asUrl,sections}:Props)=>{
  const SE_PRJT_Sections_Unique:ComponentType<PropsToUnique> = dynamic(()=>import(`./VER_${asUrl.toLowerCase()}`),{ssr:false});
  return(<>
  <SE_PRJT_Sections_Unique sections={sections}/>
  </>);
}

export default SE_PRJT_Sections;