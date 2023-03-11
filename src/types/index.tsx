
export type PageProps_Minimal ={
  head:string;
  crumbs?:string[];
  bScrollToTop?:boolean;
};

//-----------------------------------------------------------
export type T_PRJT_IMPORTED = {
  id:number;
  asUrl:string;
  title:string;
  subtitle:string;
  oneLine:string;
  keywords:string[];
  mentions:string[];  
  bannar:T_BANNAR;
  sections:T_PRJT_SECTION_IMPORTED[];
  description:string;
};

export type T_PRJT_SECTION_IMPORTED ={
  sectionId:number;
  sectionTitle:string;
  oneLine:string;
  description:string;
  medium:T_MEDIA[];
}

export type T_PRJT_FORMATTED = {
  id:number;
  asUrl:string;
  title:string;
  subtitle:string;
  oneLine:string;
  keywords:string[];
  mentions:string[];  
  bannar:T_BANNAR;
  formattedSections:T_PRJT_SECTION_FORMATTED[];
  description:string;
};

export type T_PRJT_SECTION_FORMATTED ={
  sectionId:number;
  sectionTitle:string;
  oneLine:string;
  description:string;
  medium:T_MEDIA_FORMATTED[];
}

export type T_PRJT_DATA ={
  title: string;
  subtitle:string;
  mentions: string[];
}

export type T_PRJT_DATA2 = {
  oneLine:string;
  keywords:string[];
}

export type T_MEDIA_FORMATTED ={
  type: string;
  src: string;
  formattedContent: string;
  caption: string;
}

//-----------------------------------------------------------
export type T_INF_IMPORTED = {
  introduction:{
    name:T_BILINGUAL;
    role:T_BILINGUAL;
    abst:T_BILINGUAL;
    texts:T_BILINGUAL[];
  };
  career:{
    histories:T_INF_CAREER_CHILD[];
    opportunities:T_INF_CAREER_CHILD[];
    selectedProjects:T_INF_CAREER_CHILD[];
  };
};

export type T_INF_CAREER_CHILD = {
  text:string;
  period:T_PERIOD;
  categories:string[];
  links?:T_LINK[];
};

export type T_DEV_IMPORTED ={
  title:string;
  topics:T_LINK[];
}[];

//-----------------------------------------------------------
export type T_BANNAR ={
  path:string;
  bVideo:boolean;
};

export type T_MEDIA={
  path:string;
  type:string; //image | video | markdown | youtube
  caption:string;
};

export type T_BILINGUAL = {
  ja:string;
  en:string;
};

export type T_PERIOD = {
  start:string;
  end?:string;
};

export type T_LINK = {
  type:string;
  title:string;
  url:string;
};

export type T_NEXTIMAGE = {
  // url:string;
  naturalWidth:number;
  naturalHeight:number;
};

export type T_TAG = {
  tag: string;
  selected: boolean;
  relatedProjectIds: string[];
};


