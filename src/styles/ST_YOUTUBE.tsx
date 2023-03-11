import styled from "styled-components";
import * as THEMES from "src/styles/theme";

type Props ={
  r?:string;
}

const ST_YOUTUBE = styled.div<Props>`
  & {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    ${(props)=>props.r?["border-radius:",props.r].join(" "):""};
    overflow:hidden;
  }
  & > iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border:none;
  }
`;

export default ST_YOUTUBE;
