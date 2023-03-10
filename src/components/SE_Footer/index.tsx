import * as THEMES from "src/styles/theme";
import { useEffect, useState } from "react";
import Link from "next/link";

const SE_Footer = () => {
  const getCurrentDate = (_newDate: Date) => {
    const year = _newDate.getFullYear();
    const month = _newDate.getMonth() + 1;
    const day = _newDate.getDate();
    const hour = _newDate.getHours();
    const minute = _newDate.getMinutes();
    const second = _newDate.getSeconds();
    const miliiseconds = _newDate.getMilliseconds();
    return { ye: year, mo: month, da: day, ho: hour, mi: minute, se: second, ms: miliiseconds };
  };

  const [date, setDate] = useState(new Date(1999, 11));
  const [currentDate, setCurrentDate] = useState(getCurrentDate(date));

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000));
    }, 25);
    setCurrentDate(getCurrentDate(date));
    return () => clearInterval(timerId);
  }, [date]);

  return (
    <>
      <div className="component">
        <div className="panels">
          
          <ul className="panel toLeft">
            <li className="intro">
              <p>工藤外四は、ヒトとモノの接点に注目することに夢中です。
                 遊び心のあるインタラクション、
                 想像的で物語性のある作品、
                 小綺麗なソフトウェア・インターフェースの開発を楽しみます。</p>
            </li>
            <li className="line">
              <p>-</p>
            </li>
            <li className="copyRight">
              <p>Gaishi Kudo &copy; 2022</p>
            </li>
          </ul>
          <ul className="panel borderRight">
            <li><p> </p></li>
            <li><p> </p></li>
            <li><p> </p></li>
            <li><p> </p></li>
            <li><p> </p></li>
          </ul>
          <ul className="panel">
            <li><p> </p></li>
            <li><p> </p></li>
            <li><p> </p></li>
            <li><p> </p></li>
            <li><p> </p></li>
          </ul>
          <ul className="panel toRight">
            <li className="timezone">
              <p>Japan Standard Time</p>
            </li>
            <li className="inlineWrap time">
              <p>{currentDate.ho.toString().padStart(2, "0")}</p>
              <p className="splitter">:</p>
              <p>{currentDate.mi.toString().padStart(2, "0")}</p>
              <p className="splitter">:</p>
              <p>{currentDate.se.toString().padStart(2, "0")}</p>
              <p className="splitter">:</p>
              <p>{currentDate.ms.toString().substring(0, 2).padStart(2, "0")}</p>
            </li>
            <li className="line">
              <p>-</p>
            </li>
            <li className="">
              <p>Contact</p>
            </li>
            <li className="inlineWrap contact">
              <a className="linkWrap" href="https://www.instagram.com/ihsiag/" target="_blank" rel="noopener noreferrer"> 
                <p className="available">INSTAGRAM</p>
              </a>
              <p className="splitter">/</p>
              <a className="linkWrap" href="https://github.com/ihsiag" target="_blank" rel="noopener noreferrer"> 
                <p className="available">GITHUB</p>
              </a>
              <p className="splitter">/</p>
              <p className="notAvailable">E-MAIL</p>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .component {
          width: 100%;
          height: ${THEMES.blockUnits.xl};
          padding: ${THEMES.gaps.l};
          display: flex;
          justify-content: center;
        }
        
        a{
          width:fit-content;
          transition-duration:${THEMES.durations.l};
        }

        a:hover{
          background-color:${THEMES.colors.accent.red};
        }

        .component p {
          font-size: ${THEMES.fontSizes.m};
          font-weight:${THEMES.fontWeights.n};
          line-height: ${THEMES.lineHeights.default};
          color: ${THEMES.colors.text.main};
        }

        .inlineWrap {
          display: flex;
        }

        .toLeft .inlineWrap{
          justify-content:flex-start;
        }

        .toRight .inlineWrap{
          justify-content:flex-end;
        }

        .inlineWrap > *{
          padding: 0 ${THEMES.gaps.xxs};
        }

        .inlineWrap >*:first-child {
          padding-left: 0;
        }

        .inlineWrap >:last-child {
          padding-right: 0;
        }

        .panels {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          height: 100%;
        }

        .panel {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding:0 ${THEMES.gaps.m};
          /* border-left:1px solid ${THEMES.colors.text.main}; */
        }

        .toCenter p{
          text-align:center;
        }

        .toLeft p{
          text-align:left;
        }

        .toRight p{
          text-align:right;
        }

        .time p{
          width:calc(${THEMES.fontSizes.m} + ${THEMES.fontSizes.m});
          /* border:1px solid red; */
          text-align:center;
        }

        .time .splitter{
          width:${THEMES.fontSizes.m};
          padding:0;
        }

        .contact .linkWrap{
          border-radius:${THEMES.rs.xs};
        }

        .contact p{
          padding:${THEMES.gaps.xs};
        }

        .borderRight li{
          border-right:2px solid ${THEMES.colors.accent.gray};
        }

        .available{
          text-decoration:underline;
          text-underline-offset:${THEMES.gaps.xs};
        }

        .notAvailable{
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
};

export default SE_Footer;
