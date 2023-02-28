import styled from "styled-components";
import * as THEMES from "src/styles/theme";

type Props ={
  rs?:string;
}

const Sc_ImageWrap = styled.div<Props>`
  &{
    position:relative;
    width:100%;
    height:100%;
  }
  & > span {
    border-radius: ${(props) => props.rs?props.rs:"0px"};
  }
`

export default Sc_ImageWrap;