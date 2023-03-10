import styled from "styled-components";
import * as THEMES from "src/styles/theme";

type Props ={
  abs?:boolean;
  r?:string;
  filter?:string;
}

const ST_VIDEO = styled.div<Props>`
  ${(props)=>props.abs?"position:absolute;\ntop:0;\n:left:0;":""}
  width: 100%;
  height: 100%;
  ${(props)=>props.filter?["filter:",props.filter,";"].join(" "):""}
  & video {
    border-radius: ${(props)=>props.r?props.r:"0px"};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ST_VIDEO;