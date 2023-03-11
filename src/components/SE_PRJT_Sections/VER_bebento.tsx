import { T_PRJT_SECTION_FORMATTED } from "src/types";
import * as THEMES from "src/styles/theme";
import ST_IMAGE from "src/styles/ST_IMAGE";
import Image from "next/image";
import PA_SectionTitle from "../PA_SectionTitle";
import ST_YOUTUBE from "src/styles/ST_YOUTUBE";
import PA_Youtube from "./PA_Youtube";
import SE_Layout from "../SE_Layout";
import SE_LayoutWrap from "../SE_LayoutWrap";
import PA_Image from "./PA_Image";

type Props = {
  sections: T_PRJT_SECTION_FORMATTED[];
};

const SE_PRJT_Sections_bebento = ({ sections }: Props) => {
  return (
    <>
      <div className="component">
        <SE_LayoutWrap>
          <>
          <SE_Layout fill={true} center={true}>
            <InSE_Movie section={sections[0]} />
          </SE_Layout>
          <SE_Layout fill={true} grid={8}>
            <>
            <InSE_Concept section={sections[1]} />
            <InSE_Background section={sections[2]} />
            </>
          </SE_Layout>
          <SE_Layout fill={true}> 
            <InSE_Idea section={sections[3]}/>
          </SE_Layout>
          <SE_Layout fill={true}> 
            <InSE_Prototyping section={sections[4]}/>
          </SE_Layout>
          <SE_Layout fill={true}> 
            <InSE_Film section={sections[5]}/>
          </SE_Layout>
          {/* <InSE_Prototyping section={sections[3]}/> */}
          {/* <InSE_Film section={sections[4]}/> */}
          {/* <InSE_End section={sections[5]}/> */}
          </>
          </SE_LayoutWrap>
      </div>
      <style jsx>{`
        .component {
          padding: 0 ${THEMES.blockUnits.l};
        }

        .grid {
          display: grid;
          grid-template-columns: 8;
        }

        .grid-item {
          border: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default SE_PRJT_Sections_bebento;

type PropsInSE = {
  section: T_PRJT_SECTION_FORMATTED;
};

const InSE_Movie = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <SE_LayoutWrap>
          <SE_Layout noPadding={true}>
            <PA_Youtube src={section.medium[0].src}/>
          </SE_Layout>
        </SE_LayoutWrap>  
      </div>
      <style jsx>{`
      .component{
        background-color:${THEMES.colors.bg.sub};
      }
      `}</style>
    </>
  );
};

const InSE_Concept = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">
          <div className="content-visual">
            <ST_IMAGE>
              {/* <Image src={section.medium[0].src} alt={""} quality={100} priority={false} loading={"lazy"} unoptimized={false} layout={"fill"} objectFit={"contain"} blurDataURL="data:image/jpeg;base64," placeholder="blur" /> */}
            </ST_IMAGE>
          </div>
          <div className="content-detail">
            <div className="detail-oneLine">
              <p>{section.oneLine}</p>
            </div>
            <div className="detail-desc">
              <p>{section.description}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .detail-oneLine p {
          font-size: ${THEMES.fontSizes.l};
          font-weight: ${THEMES.fontWeights.b};
        }

        .detail-desc p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
          grid-column-start: 1;
          grid-column-end: 3;
          /* background-color: red; */
        }

        .area-content {
          display: flex;
        }

        .content-visual {
          width: ${THEMES.blockUnits.l};
          height: ${THEMES.blockUnits.l};
          background: blue;
        }

        .content-detail {
          flex: 1;
        }

        .detail-oneLine {
          padding-bottom: ${THEMES.gaps.l};
        }

        .detail-desc {
        }
      `}</style>
    </>
  );
};

const InSE_Background = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">

        </div>
      </div>
      <style jsx>{`
        .component {
          grid-column-start: 3;
          grid-column-end: 9;
        }

        .area-content{
          background-color: green;
          /* height:100%; */
        }
      `}</style>
    </>
  );
};

const InSE_Idea = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">

        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .area-content{
          background-color: green;
          height:100%;
        }
      `}</style>
    </>
  );
};

const InSE_Prototyping = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <SE_Layout fill={true} grid={8}>
          <>
          <div className="staticimages">

          </div>
          <div className="movingimages">
            
          </div>
          </>
        </SE_Layout>
      </div>
      <style jsx>{`
        .component {
        }

        .staticimages{
          grid-column-start: 1;
          grid-column-end: 5;
        }

        .movingimages{
          grid-column-start: 5;
          grid-column-end: 9;
        }
      `}</style>
    </>
  );
};

const InSE_Film = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content captures">
          {section.medium.map((capture,_i)=>{
            return(
              <div className="capture" key={`InSE_Film_capture_${_i}`}>
                <PA_Image src={capture.src} alt={""}/>
              </div>
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .area-content{
          /* background-color: green; */
          height:100%;
        }

        .captures{
          display:grid;
          grid-template-columns:repeat(2,1fr);
        }
      `}</style>
    </>
  );
};

const InSE_End = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">

        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .area-content{
          background-color: green;
          height:100%;
        }
      `}</style>
    </>
  );
};
