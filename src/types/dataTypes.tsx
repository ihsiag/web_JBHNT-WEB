
export type PageProps_Minimal ={
  title_header:string;
  pageNames_crumbs?:string[];
  bScrollToTop?:boolean;
};


export type Json_Project = {
  id:number;
  asUrl:string;
  year:number;
  client:string;
  abstract:string;
  title:string; //?
  oneLine:string; //?
  mentions:string[];
  tags:string[];
  bannar:Json_Bannar;
  medium:Json_Media[];
  description:string;
};

export type Json_Bannar ={
  path:string;
  bVideo:boolean;
};

export type Json_Media={
  path:string;
  type:string; //image | video | markdown | youtube
  caption:string;
};

export type Json_Bilingual = {
  ja:string;
  en:string;
};

export type Json_Info = {
  introduction:{
    name:Json_Bilingual;
    role:Json_Bilingual;
    abst:Json_Bilingual;
    texts:Json_Bilingual[];
  };
  career:{
    histories:Json_Career_Child[];
    opportunities:Json_Career_Child[];
    selectedProjects:Json_Career_Child[];
  };
};

export type Json_Career_Child = {
  text:string;
  period:Json_Utils_Period;
  categories:string[];
  links?:Json_Utils_Link[];
};


export type Json_Dev ={
  title:string;
  topics:Json_Utils_Link[];
}[];

//utils

export type Json_Utils_Period = {
  start:string;
  end?:string;
};

export type Json_Utils_Link = {
  type:string;
  title:string;
  url:string;
};

export type LoadedNextImage = {
  // url:string;
  naturalWidth:number;
  naturalHeight:number;
};

export type FilterOption = {
  tag: string;
  selected: boolean;
  relatedProjectIds: string[];
};


