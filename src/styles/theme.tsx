import { ComponentSpec } from "react";
import styled from "styled-components";
import css from "styled-jsx/css";


export const colors = {
  text:{
    main:"#0A0A0B",
    sub:"#919192",
  },
  bg:{
    main: "#FAFAFB",
    sub: "#F5F5F6"
  },
  accent:{
    red:"#EC715B",
    yellow:"#FBE45A",
    gray:"#ebebf6" //rgb(235, 235, 246)
  },
}


export const gaps = {
  xxs:"2px",
  xs:"5px",
  s:"8px",
  m:"10px",//default
  l:"25px",
  xl:"50px",
  xxl:"100px",
} as const;


export const blockUnits={
  xs:"50px",
  s:"100px",
  m:"150px",//default
  l:"200px",
  xl:"250px",
  xxl:"300px"
} as const;

export const rs={
  xs:"4px",
  s:"8px",
  m:"20px",//default
  l:"30px"
} as const;

export const animations = {
  duration:{
    xs:"0.05s",
    s:"0.1s",
    m:"0.2s",//default
    l:"0.4s"
  },
  delay:{
    s:"",
    m:"0.1s",
    l:""
  }
} as const;

export const fontFamilies ={
  default: "\"LINE Seed JP\", sans-serif",
  gsans:"\"Noto Sans JP\", sans-serif",
  gserif:"\"Noto Serif JP\", serif"
} as const;

export const fontSizes={
  xs:"0.8rem",
  s:"1.25rem",
  m:"1.5rem",//default
  l:"2rem",
  xl:"4rem",
  xxl:"8rem"
} as const;

export const lineHeights={
  default:"1.6",//default
  wide:"2.0"
} as const;

export const fontWeights={
  n:400,//default
  b:600,
  eb:800,
  sub:{
    t:300,
    n:500,
    b:900
  }
} as const;

export const dropShadows = {
  weak:"0 0 1px rgba(30,30,46,0.2)",
  default:"0 0 5px rgba(30,30,46,0.2)",
  hovered:"0 0 7px rgba(30,30,46,0.3)",
  hovered_strong:"0 0 10px rgba(30,30,46,0.4)",
}

