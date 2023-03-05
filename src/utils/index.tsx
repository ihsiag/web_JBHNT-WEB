import { ReactChild, useEffect, useRef, useState } from "react";


//Y軸方向のスクロール量を取得するカスタムフック
export const useScrollPosition = () => {
  const isProcessing = useRef(false);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (isProcessing.current) return;
      isProcessing.current = true;
      // Window.requestAnimationFrame()でpositionYステートの更新を間引く
      window.requestAnimationFrame(() => {
        isProcessing.current = false;
        setPositionY(window.scrollY);
      });
    };
    // スクロールイベントの登録
    document.addEventListener("scroll", handler, { passive: true });
    return () => {
      // スクロールイベントの解除
      document.removeEventListener("scroll", handler);
    };
  }, []);

  // スクロール量を返却する
  return positionY;
};

//スクロール方向の識別子
const ScrollDirection = {
  Up: "up",
  Down: "down",
} as const;
export type ScrollDirectionType =
  typeof ScrollDirection[keyof typeof ScrollDirection];


//スクロール方向を取得するカスタムフック
export const useScrollDirection = () => {
  const positionY = useScrollPosition();
  // 直前までのスクロール量
  const previousPositionY = useRef(positionY);
  const [direction, setDirection] = useState<ScrollDirectionType | null>(null);

  useEffect(() => {
    // 直前までのスクロール量と現在のスクロール量を比較することで
    // 軸方向について上と下どちらにスクロールしているかを判定する
    if (positionY < previousPositionY.current) {
      setDirection(ScrollDirection.Up);
    } else if (positionY > previousPositionY.current) {
      setDirection(ScrollDirection.Down);
    } else {
      setDirection(null);
    }

    previousPositionY.current = positionY;
  }, [positionY]);

  return direction;
};


//external Link
export const ExtLink = ({href,children}:{href:string;children?:ReactChild;}):JSX.Element =>{
  return(
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}

//hex to rgb num[]
export const hex2rgb = (hex?: string): number[] => {
  if (hex != undefined) {
    if (hex.slice(0, 1) == "#") hex = hex.slice(1);
    if (hex.length == 3) hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3);
    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (str) {
      return parseInt(str, 16);
    });
  } else {
    return [0, 0, 0];
  }
};

//rgb num[] to "rgba()"
export const rgbNums2rgbCss = (rgbNums: number[], opacity?: number): string => {
  if (opacity === undefined) return `rgb(${rgbNums[0]},${rgbNums[1]},${rgbNums[2]})`;
  else return `rgba(${rgbNums[0]},${rgbNums[1]},${rgbNums[2]},${opacity})`;
};


//generateSerialNumArray
export const generateSerialNumArray = (start:number,end:number,step?:number):number[] =>{
  step && console.warn("sorry, gaishi has not yet finished to make this option work...");
  return [...Array<number>(end-start+1)].map((_,i)=>i+start);
}

export const getPostsPerPage = <Json_T,>(posts_num_per_page:number,currentPageNumStr:string,objectDataContents:Json_T[]):Json_T[] =>{
  let currentPageNum = 0;
  let start = 0, end = 1;
  if(typeof currentPageNumStr === "string"){
    currentPageNum = Number.parseInt(currentPageNumStr);
  }
  start = (currentPageNum-1) * posts_num_per_page +1;
  end = start -1 + posts_num_per_page;

  const posts_per_page = objectDataContents.filter(function (item, index) {
    if (index+1 >= start && index+1<=end) return true;
  });

  return posts_per_page;
}

export const getNumFromStr = (str:string):number=>{
  const regex = /[^0-9]/g;
  const number = str.replace(regex, "");
  return parseInt(number);
}


