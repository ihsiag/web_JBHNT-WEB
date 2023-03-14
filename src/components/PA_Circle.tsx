import { ReactChild } from "react";
import * as THEMES from "src/styles/theme";

type Props = {
  _circleSize?: string;
  _fontSize?:string;
  _fontWeight?:number;
  _lineHeight?: string;
  _fillColor?: string;
  _noFill?: boolean;
  _strokeColor?: string;
  _strokeWidth?: string;
  children?: ReactChild;
};

const PA_Circle = ({ _circleSize, _fontSize, _fontWeight, _lineHeight, _fillColor, _noFill, _strokeColor, _strokeWidth, children }: Props) => {
  const circleSize = _circleSize ? _circleSize : THEMES.blockUnits.m;
  const fontSize = _fontSize?_fontSize: THEMES.fontSizes.m;
  const fontWeight = _fontWeight?_fontWeight:THEMES.fontWeights.n;
  const lineHeight = _lineHeight ? _lineHeight : 1;
  const color = _noFill ? "none" : _fillColor ? _fillColor : THEMES.colors.text.main;
  const strokeColor = _strokeColor ? _strokeColor : THEMES.colors.text.main;
  const strokeWidth = _strokeWidth ? _strokeWidth : "none";
  return (
    <>
      <div className="circle">
        <div className="textBox"><p>{children}</p></div>
      </div>
      <style jsx>{`
        .circle {
          text-align: center;
          width: calc(${circleSize} * ${lineHeight});
          height: calc(${circleSize} * ${lineHeight});
          line-height: calc(${circleSize} * ${lineHeight});
          border-radius: 50%;
          background-color: ${color};
          border: ${strokeColor} ${strokeWidth} solid;
          display: grid;
          align-items: center;
        }

        p{
          font-size:${fontSize};
          font-weight:${fontWeight};
          line-height:${lineHeight};
        }
      `}</style>
    </>
  );
};

export default PA_Circle;
