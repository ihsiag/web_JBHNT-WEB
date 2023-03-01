import * as THEMES from "src/styles/theme";

type Props = {
  title: string;
  subtitle: string;
};

const PA_Titles = ({ title, subtitle }: Props) => {
  return (
    <>
      <div className="component">
        <ul className="textBox">
          <li className="title">
            <p>{title}</p>
          </li>
          <li className="subtitle">
            <p>{subtitle}</p>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .title p {
          font-size: ${THEMES.fontSizes.xxl};
          font-weight: ${THEMES.fontWeights.b};
          color:${THEMES.colors.text.main};
          line-height:1;
        }

        .subtitle p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
          color:${THEMES.colors.text.main};
        }

        .title{
          padding-bottom:${THEMES.gaps.m};
        }

        .subtitle{
          padding-left:${THEMES.gaps.s};
        }
      `}</style>
    </>
  );
};

export default PA_Titles;
