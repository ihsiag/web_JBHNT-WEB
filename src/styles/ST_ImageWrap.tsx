import styled from "styled-components";
import * as THEMES from "src/styles/theme";

type Props ={
  r?:string;
  abs?:boolean;
  h?:string;
}

const S_ImageWrap = styled.div<Props>`
  &{
    position:relative;
    ${(props)=>props.abs==true&&"position:absolute;\ntop:0;\nleft:0;"}
    width:100%;
    height:${(props)=>props.h?props.h:"100%"};
  }
  & > span {
    border-radius:${(props) => props.r?props.r:"0px"};
  }
`

export default S_ImageWrap;