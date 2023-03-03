import Link from "next/link";
import * as THEMES from "src/styles/theme";

const PN_Profile = () => {
  const _w = THEMES.blockUnits.s;
  return (
    <>
      <div className="component">
        <div className="textBox">
          <p>私について</p>
        </div>
      </div>
      <style jsx>{`
        p {
          font-size: ${THEMES.fontSizes.xl};
        }
        .component {
          position: fixed;
          top: calc(100vh - ${_w});
          left: 100%;
          width: 100vh;
          height: ${_w};
          background-color: lightgreen;
          transform-origin: left bottom;
          transform:rotate(-90deg);
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .textBox{
          width:fit-content;
          /* background-color:red; */
        }
      `}</style>
    </>
  );
};

export default PN_Profile;
