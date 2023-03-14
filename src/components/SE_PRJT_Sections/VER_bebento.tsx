import { T_PRJT_SECTION_FORMATTED } from "src/types";
import SE_Layout from "src/components/SE_Layout";
import PA_SectionTitle from "src/components/PA_SectionTitle";
import SE_LayoutWrap from "src/components/SE_LayoutWrap";
import PA_Youtube from "./PA_Youtube";
import PA_Image from "./PA_Image";
import PA_Video from "./PA_Video";
import SVG_ARROW_Transition from "../SVG/SVG_ARROW_TRANSITION";
import * as THEMES from "src/styles/theme";
import ST_IMAGE from "src/styles/ST_IMAGE";
import ST_VIDEO from "src/styles/ST_VIDEO";

type Props = {
  sections: T_PRJT_SECTION_FORMATTED[];
};

const SE_PRJT_Sections_bebento = ({ sections }: Props) => {
  return (
    <>
      <div className="component">
        <SE_LayoutWrap>
          <>
            <SE_Layout fill={false} center={true}>
              <InSE_Abstract section={sections[1]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Background section={sections[2]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_SeekingProblem section={sections[3]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_DefiningProblem section={sections[4]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Concept section={sections[5]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Prototyping section={sections[6]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Film section={sections[7]} />
            </SE_Layout>
            <SE_Layout fill={false} center={true}>
              <InSE_Movie section={sections[0]} />
            </SE_Layout>
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
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} />
        </div>
        <div className="area-content">
          <SE_LayoutWrap>
            <SE_Layout noPadding={true}>
              <PA_Youtube src={section.medium[0].src} />
            </SE_Layout>
          </SE_LayoutWrap>
        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .area-content {
          background-color: ${THEMES.colors.bg.sub};
          padding: ${THEMES.gaps.s} 0;
          border: 2px solid ${THEMES.colors.accent.gray};
        }
      `}</style>
    </>
  );
};

const InSE_Abstract = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-TI">
          <div className="TI-title">
            <PA_SectionTitle title={section.sectionTitle} />
            <div className="TXT-oneLine">
            <p>{section.oneLine}</p>
          </div>
          </div>
          <div className="TI-image">
            <PA_Image src={section.medium[0].src} ntl={true} />
          </div>
        </div>
        <div className="area-TXT">
          
          <ul className="TXT-descriptions">
            <li>
              <p>{section.descriptions[0]}</p>
            </li>
            <li>
              <p>{section.descriptions[1]}</p>
            </li>
            <li>
              <p>{section.descriptions[2]}</p>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .TXT-oneLine p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .TXT-descriptions p {
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.n};
          letter-spacing: ${THEMES.letterSpacings.s};
        }

        .TXT-descriptions p::first-letter {
          font-size: ${THEMES.fontSizes.l};
          font-weight: ${THEMES.fontWeights.b};
        }

        .area-TI {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          padding-bottom: ${THEMES.gaps.m};
        }

        .TI-title{
          grid-column-start:1;
          grid-column-end:4;
        }

        .TI-image{
          grid-column-start:4;
          grid-column-end:9;
        }

        .TXT-oneLine {
          padding-bottom: ${THEMES.gaps.m};
        }

        .TXT-descriptions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: ${THEMES.gaps.l};
        }

        .TXT-descriptions li {
          border-top: 2px solid ${THEMES.colors.accent.gray};
          padding-top: ${THEMES.gaps.s};
        }
      `}</style>
    </>
  );
};

const InSE_Background = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="outerarea-text">
          <div className="area-title">
            <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
          </div>
          <div className="area-text">
            <div className="text-oneLine">
              <p>{section.oneLine}</p>
            <ul className="text-descriptions">
            {section.descriptions.map((desc, _i) => {
              return (
                <li key={`InSE_Background_${_i}`}>
                  <p>{desc}</p>
                </li>
              );
            })}
            </ul>
            </div>
          </div>
        </div>
        <div className="outerarea-visual">
          <PA_Image src={section.medium[0].src} objectFit={"cover"} r={"50%"}/>
        </div>
      </div>
      <style jsx>{`
        .text-oneLine p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .text-descriptions p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: ${THEMES.gaps.xl};
        }

        .outerarea-visual {
          grid-column-start: 6;
          grid-column-end: 9;
          position: relative;
          height:0;
          padding-top: 100%;
        }

        .outerarea-text {
          grid-column-start: 1;
          grid-column-end: 6;
        }

        .area-text{

        }

        .text-oneLine{
          padding-bottom:${THEMES.gaps.m};
        }

        .text-descriptions{

        }
      `}</style>
    </>
  );
};

const InSE_SeekingProblem = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">
        <div className="content-visual">
            <PA_Image src={section.medium[0].src} />
          </div>
          <div className="content-text">
            <div className="text-oneLine">
              <p>{section.oneLine}</p>
            </div>
            <div className="text-descs">
              {section.descriptions.map((desc, _i) => (
                <p key={`InSE_Idea_content_desc_${_i}`}>{desc}</p>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      <style jsx>{`
        .text-oneLine P {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .text-descs p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
        }

        .area-content {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: ${THEMES.gaps.m};
        }

        .content-text {
          grid-column-start: 4;
          grid-column-end: 9;
        }

        .content-visual {
          grid-column-start: 1;
          grid-column-end: 3;
          padding-top:100%;
          position:relative;
        }

        .text-oneLine {
          padding-bottom: ${THEMES.gaps.m};
        }

        .visual-videos {
        }

        .video1 {
        }

        .video2 {
        }
      `}</style>
    </>
  );
};

const InSE_DefiningProblem = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">
          <div className="content-text">
            <div className="text-oneLine">
              <p>{section.oneLine}</p>
            </div>
            <div className="text-descs">
              {section.descriptions.map((desc, _i) => (
                <p key={`InSE_Idea_content_desc_${_i}`}>{desc}</p>
              ))}
            </div>
          </div>
          <div className="content-visual">
            <div className="visual-videos">
              <div className="video1">
                <PA_Video src={section.medium[0].src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-oneLine P {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .text-descs p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
        }

        .area-content {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: ${THEMES.gaps.m};
        }

        .content-text {
          grid-column-start: 1;
          grid-column-end: 6;
        }

        .content-visual {
          grid-column-start: 6;
          grid-column-end: 9;
        }

        .text-oneLine {
          padding-bottom: ${THEMES.gaps.m};
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
          <div className="content-text">
            <div className="detail-oneLine">
              <p>{section.oneLine}</p>
            </div>
            <div className="detail-descriptions">
              {section.descriptions.map((d,_i)=>
              <div className="description" key={`InSE_Concept_desc_${_i}`}>
                <p>{d}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .detail-oneLine p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .detail-descriptions p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
          grid-column-start: 1;
          grid-column-end: 6;
        }

        .area-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: ${THEMES.gaps.m};
        }

        .content-visual {
          background: blue;
          grid-column-start: 1;
          grid-column-end: 3;
        }

        .content-text {
          grid-column-start: 3;
          grid-column-end: 5;
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

const InSE_Prototyping = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">
          <div className="content-text">
            <p>{section.oneLine}</p>
          </div>
          <ul className="content-improvements">
            <li className="proto1">
              <div className="area-image">
                <PA_Image src={section.medium[0].src} abs={true} objectFit={"cover"}/>
              </div>
              <div className="area-caption">
                <p>{section.medium[0].caption}</p>
              </div>
            </li>
            <li className="arrow">
              <SVG_ARROW_Transition />
            </li>
            <li className="proto2">
              <div className="area-image">
                <PA_Image src={section.medium[1].src} abs={true} objectFit={"cover"}/>
              </div>
              <div className="area-caption">
                <p>{section.medium[1].caption}</p>
              </div>
            </li>
            <li className="arrow">
              <SVG_ARROW_Transition />
            </li>
            <li className="proto3">
              <div className="area-image">
                <PA_Image src={section.medium[2].src} abs={true} objectFit={"cover"} />
              </div>
              <div className="area-caption">
                <p>{section.medium[2].caption}</p>
              </div>
            </li>
          </ul>
          <div className="content-toFinal">
            <div className="arrowWrap">
              <div className="arrow">
              <SVG_ARROW_Transition rotate={"90"}/>
              </div>
            </div>
            <div className="final">
              <PA_Video src={section.medium[3].src}/>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .content-text p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .area-caption p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .content-improvements {
          grid-column-start: 1;
          grid-column-end: 6;
          display: grid;
          gap: ${THEMES.gaps.m};
          grid-template-columns: 6fr 1fr 6fr 1fr 6fr;
          padding-bottom: ${THEMES.gaps.m};
        }

        .content-improvements li {
          /* border:solid 1px red; */
        }

        .arrow {
          display: grid;
          align-items: center;
        }

        .area-image {
          width: 100%;
          padding-top: calc(100% / 1.6);
          position: relative;
        }

        .area-caption {
        }

        .content-toFinal{
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .content-toFinal .arrowWrap{
          padding:${THEMES.gaps.l} 0;
          width:fit-content;

        }

        .content-toFinal .arrow{
          width:${THEMES.gaps.xl};
          height:${THEMES.gaps.xl};
        }

        .content-toFinal .final{
          width:50%;
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
          {section.medium.map((capture, _i) => {
            return (
              <div className="capture" key={`InSE_Film_capture_${_i}`}>
                <PA_Image src={capture.src} ntl={true} />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .area-content {
          /* background-color: green; */
          height: 100%;
        }

        .captures {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      `}</style>
    </>
  );
};
