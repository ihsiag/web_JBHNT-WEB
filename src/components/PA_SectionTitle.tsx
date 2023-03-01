import * as THEMES from "src/styles/theme";

type Props ={
  text:string;
}

const PA_SectionTitle = ({text}:Props)=>{
  return(
    <>
    <div className="component">
      <div className="box">
        <p>{text}</p>
      </div>
    </div>
    <style jsx>{`
      p{
        font-size:${THEMES.fontSizes.m};
        font-weight:${THEMES.fontWeights.b};
        color:${THEMES.colors.bg.main};
      }

      .component{
        padding-bottom:${THEMES.gaps.l};
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