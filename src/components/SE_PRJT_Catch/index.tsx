
import * as THEMES from "src/styles/theme";
import { T_MEDIA, T_PRJT_DATA, T_PRJT_DATA2 } from "src/types";
import PA_Data from "./PA_Data";
import PA_Data2 from "./PA_Data2";

type Props = {
  data: T_PRJT_DATA;
  data2: T_PRJT_DATA2;
  visual?:T_MEDIA;
}

const SE_PRJT_Catch = ({data,data2,visual}:Props)=>{ 
  return(
  <>
    <div className="component">
      <div className="area-data">
        <PA_Data data={data} />
      </div>
      <div className="area-data2">
        <PA_Data2 data2={data2}/>
      </div>
    </div>
    <style jsx>{`
    .component{
      display: flex;
      padding-top: 100px;
      padding-bottom: 50px;
      margin-bottom: 50px;
      border-bottom: 2px solid ${THEMES.colors.accent.gray};
    }
    `}</style>
  </>
  );
}

export default SE_PRJT_Catch;

