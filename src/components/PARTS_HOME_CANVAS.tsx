import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState,useEffect, useRef, MutableRefObject } from "react";
import Sketches_Panels from "src/sketches/SKETCHES_PANELS";

type Size ={
  width:number;
  height:number;
}

const Parts_Home_Canvas = () => {
  const mountRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [divSize,setDivSize] = useState<Size>({width:1,height:1});
  
  const onResize = () =>{
    setDivSize({width:mountRef.current.clientWidth,height:mountRef.current.clientHeight});
  }
  
  useEffect(()=>{
    onResize();
  },[]);
  useEffect(()=>{
    window.addEventListener("resize",onResize);
    return ()=>window.removeEventListener("resize",onResize);
  })
  useEffect(() => {
    const canvasElm = Sketches_Panels(divSize);
    mountRef.current.appendChild(canvasElm);
    return ()=> {
      if(mountRef.current)mountRef.current.removeChild(canvasElm);
    };
  }, [divSize]);
  
  return (
    <>
      <div className="component">
        <div className="homeCanvas" ref={mountRef} />
      </div>
      <style jsx>{`
        .component {
          display:block;
          width: 100%;
          height: 100%;
        }

        .homeCanvas {
          width: 100%;
          height: 100%;
          background-color:red;
        }
      `}</style>
    </>
  );
};

export default Parts_Home_Canvas;
