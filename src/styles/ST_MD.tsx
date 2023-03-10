
import styled from "styled-components";
import * as THEMES from "src/styles/theme";


const ST_MD = styled.div`
  & p {
    font-size: ${THEMES.fontSizes.m};
    line-height: 2;
    letter-spacing: 0.075rem;
    font-weight: ${THEMES.fontWeights.n};
  }

  & a {
    display: inline;
    width: fit-content;
    text-decoration: underline;
    text-underline-offset: 2px;
    padding: 0 ${THEMES.gaps.xs};
    transition-duration: ${THEMES.durations.l};
    border-radius: ${THEMES.rs.xs};
  }

  & a:hover {
    background-color: ${THEMES.colors.accent.red};
  }
`

export default ST_MD;