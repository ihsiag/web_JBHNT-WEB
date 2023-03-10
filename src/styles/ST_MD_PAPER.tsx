import styled from "styled-components";
import * as THEMES from "src/styles/theme";

const ST_MD_PAPER = styled.div`
  font-family: ${THEMES.fontFamilies.gsans};
  font-weight: ${THEMES.fontWeights.n};
  min-height: calc(${THEMES.blockUnits.l} * 2);
  max-width: 800px;
  background-color: ${THEMES.colors.bg.main};
  padding: ${THEMES.blockUnits.l} ${THEMES.gaps.xl} ${THEMES.blockUnits.l} ${THEMES.gaps.xl};
  border-radius: ${THEMES.rs.xs};
  /* border:solid 1px ${THEMES.colors.accent.red}; */
  filter: drop-shadow(${THEMES.dropShadows.default});
  h1 {
    font-family: ${THEMES.fontFamilies.gsans};
    font-size: ${THEMES.fontSizes.l};
    padding-bottom: ${THEMES.gaps.l};
  }
  h1 em {
  }
  h1 strong {
    font-size: ${THEMES.fontSizes.m};
    font-weight: ${THEMES.fontWeights.sub.b};
  }
  h4 {
    font-size: ${THEMES.fontSizes.m};
    font-weight: ${THEMES.fontWeights.n};
    text-align: right;
    padding-top: ${THEMES.gaps.l};
  }
  p {
    font-size: ${THEMES.fontSizes.m};
    font-weight: ${THEMES.fontWeights.n};
    line-height: ${THEMES.lineHeights.wide};
    letter-spacing: 1.5px;
    padding-bottom: ${THEMES.gaps.m};
  }

  p strong {
    font-weight: ${THEMES.fontWeights.b};
  }
`;

export default ST_MD_PAPER;
