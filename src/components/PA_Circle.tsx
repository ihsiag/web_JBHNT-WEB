import * as THEMES from "src/styles/theme";

type Props ={
  _gapSize?:string;
  _circleSize?:string;
  _color?:string;
}

const PA_Circle = ({_gapSize,_circleSize,_color}:Props) => {
  const gapSize = _gapSize?_gapSize:THEMES.blockUnits.xs;
  const circleSize = _circleSize?_circleSize:THEMES.blockUnits.xl;
  const color = _color?_color:THEMES.colors.text.main;
  return (
    <>
      <div className="component"></div>
      <style jsx>{`
        .symbol {
          display: flex;
          justify-content: center;
          padding-top: ${gapSize};
          padding-bottom: ${gapSize};
        }

        .circle {
          text-align: center;
          width: ${circleSize};
          height: ${circleSize};
          line-height: ${circleSize};
          border-radius: 50%;
          background-color:${color};
        }
      `}</style>
    </>
  );
};

export default PA_Circle;
