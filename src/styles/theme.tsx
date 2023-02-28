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

export const margins = {
  hori:{
    s:"",
    m:"",
    l:""
  },
  vert:{
    s:"",
    m:"",
    l:""
  },
  s:"",
  m:"",
  l:""
} as const;


export const paddings = {
  hori:{
    xs:"2px",
    s:"5px",
    m:"10px",
    l:"25px"
  },
  vert:{
    s:"2px",
    m:"10px",
    l:"25px"
  },
  s:"",
  m:"",
  l:"",
  xl:"50px"
} as const;

export const gaps = {
  hori:{
    s:"",
    m:"5px",
    l:"15px"
  },
  vert:{
    s:"5px",
    m:"8px",
    l:"10px"
  },
  s:"",
  m:"",
  l:""
} as const;


export const blockUnits={
  hori:{
    xs:"5px",
    s:"25px",
    m:"50px",
    l:"250px"
  },
  vert:{
    xs:"5px",
    s:"25px",
    m:"50px",
    l:"250px"
  },
  s:"25px",
  m:"50px",
  l:"250px"
} as const;

export const rs={
  xs:"4px",
  s:"8px",
  m:"20px",
  l:"30px"
} as const;

export const animations = {
  duration:{
    xs:"0.05s",
    s:"0.1s",
    m:"0.2s",
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
  m:"1.5rem",
  l:"2rem",
  xl:"4rem",
  xxl:"8rem"
} as const;

export const lineHeights={
  default:"1.6",
  wide:"2.0"
} as const;

export const fontWeights={
  n:400,
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

