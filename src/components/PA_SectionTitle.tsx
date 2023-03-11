import * as THEMES from "src/styles/theme";

type Props ={
  title:string;
  noPadding?:boolean;
}

const PA_SectionTitle = ({title,noPadding}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="box">
        <p>{title}</p>
      </div>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontSizes.m};
        font-weight:${THEMES.fontWeights.b};
        color:${THEMES.colors.bg.main};
      }
      .component{
        padding-bottom:${noPadding?"":THEMES.gaps.l};
      }
      
      .box{
        width:fit-content;
        padding:${THEMES.gaps.xs} ${THEMES.gaps.l};
        background-color:${THEMES.colors.text.main};
        border-radius:${THEMES.rs.m};
      }
    `}</style>
    </>
  );
}

export default PA_SectionTitle;