// export type Json_All

export type PageProps_Minimal = {
  head:string;
}

export type T_JSON_ALL ={
  foge:string;
}

export type T_PRJT_VISUALS ={
  title:string;
  description?:string;
  images:T_IMAGE[];
}

export type T_PRJT_PHASES ={
  title:string;
  descriptions:string[];
  images:T_IMAGE[];
}

export type T_PROJECT = {
  title:string;
  subtitle:string;
  catchVisual:T_IMAGE;
  catchCopy:string;
  catchDescription:string;
  keywords:string[];
  phases:T_PRJT_PHASES;
  visuals:T_PRJT_VISUALS;
  finalBanar:T_IMAGE;
}

export type T_IMAGE ={
  src:string;
  caption?:string;
}

export type T_VEC2 ={
  x:number;
  y:number;
}