
import styled from "styled-components";
import * as THEMES from "src/styles/theme";

type Props ={
  r?:string; //border-radius
  abs?:boolean; //pos : absolute
  ntl?:boolean; //hold natural aspect
  h?:string; //height
}

const ST_IMAGE = styled.div<Props>`
  & > span img {
    position: ${(props)=>props.ntl?"relative !important":"relative"}; //to hold apect
    width: ${(props)=>props.ntl?"100% !important":"100%"}; //to hold apect
    height: ${(props)=>props.ntl?"unset !important":props.h?props.h:"100%"} ; //to hold apect
  }
  & > span {
    ${(props)=>props.ntl?"position: unset !important":""}; //to hold apect
    border-radius:${(props) => props.r?props.r:"0px"};
    overflow:hidden;
  }
`;

export default ST_IMAGE;