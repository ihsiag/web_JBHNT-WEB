import { ExecOptionsWithStringEncoding } from 'child_process';
import { ReactChild } from 'react';

type Props = {
  backgroundColor?: string;
  backgroundColor_contentArea?: string;
  children?: ReactChild;
};

const Layout_Page_Parent = ({ backgroundColor, backgroundColor_contentArea, children }: Props) => {
  return (
    <>
      <div className='component'>
        <div className='contentArea'>{children}</div>
      </div>
      <style jsx>{`
        .component {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${backgroundColor ? backgroundColor : '#ffffff'};
          min-height: 100vh;
        }

        .contentArea {
          width: 1200px;
          /* background-color:red; */
        }

        @media screen and (max-width:1366px){
          .contentArea{
            width:900px;
          }
        }

        @media screen and (max-width:1024px){}
          .contentArea{
            width:100%;
            padding:0 50px 0 50px;
          }
      `}</style>
    </>
  );
};

export default Layout_Page_Parent;
