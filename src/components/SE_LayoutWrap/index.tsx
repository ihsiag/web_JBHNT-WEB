import { ReactChild } from "react";

type Props ={
  children:ReactChild;
}

const SE_LayoutWrap = ({children}:Props)=>{
  return(<>
  <div className="component">
    {children}
  </div>
  <style jsx>{`
    .component{
      width:100%;
      display:flex;
      flex-direction:column;
      align-items:center;
    }
  `}</style>
  </>);
}

export default SE_LayoutWrap;