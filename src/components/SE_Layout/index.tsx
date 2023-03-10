import { ReactChild } from "react";

type Props = {
  children: ReactChild;
  custom?:boolean;
  center?:boolean;
};

const SE_Layout = ({ children, custom,center }: Props) => {
  return (
    <>
      <div className="component">{children}</div>
      <style jsx>{`
        .component {
          width: ${custom ? "100%" : "1000px"};
          display:${center ? "flex" : "block"};
          ${center?"flex-direction:column;\nalign-items:center":""};
        }

        @media screen and (max-width: 1366px) {
          .component {
            width: 900px;
          }
        }

        @media screen and (max-width: 1024px) {
          .component {
            width: 100%;
            padding: 0 50px 0 50px;
          }
        }
      `}</style>
    </>
  );
};

export default SE_Layout;
