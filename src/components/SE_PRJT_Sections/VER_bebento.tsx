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
              <InSE_Movie section={sections[0]} />
            </SE_Layout>
            <SE_Layout fill={false} center={true}>
              <InSE_FinalImage section={sections[1]} />
            </SE_Layout>
            <SE_Layout fill={false} grid={8}>
              <InSE_Concept section={sections[2]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Background section={sections[3]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Idea section={sections[4]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Prototyping section={sections[5]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Film section={sections[6]} />
            </SE_Layout>
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

const InSE_FinalImage = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} />
        </div>
        <div className="area-content">
          <div className="content-image">
            <PA_Image src={section.medium[0].src} ntl={true} />
          </div>
          <div className="content-oneLine">
            <p>{section.oneLine}</p>
          </div>
          <ul className="content-descriptions">
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
        .content-oneLine p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .content-descriptions p {
          font-size: ${THEMES.fontSizes.s};
          font-weight: ${THEMES.fontWeights.n};
          letter-spacing:${THEMES.letterSpacings.s};
        }

        .content-descriptions p::first-letter {
          font-size: ${THEMES.fontSizes.l};
          font-weight: ${THEMES.fontWeights.b};
        }

        .content-image{
          padding-bottom:${THEMES.gaps.m};
        }

        .content-oneLine{
          padding-bottom:${THEMES.gaps.m};
        }

        .content-descriptions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: ${THEMES.gaps.l};
        }

        .content-descriptions li{
          border-top:2px solid ${THEMES.colors.accent.gray};
          padding-top:${THEMES.gaps.s};
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
            <div className="detail-desc">
              <p>{section.descriptions[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .detail-oneLine p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .detail-desc p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
          grid-column-start: 1;
          grid-column-end: 6;
        }

        .area-content {
          display: grid;
          grid-template-columns:repeat(4,1fr);
          gap:${THEMES.gaps.m};
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

const InSE_Background = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="outerarea-visual">
          <PA_Image src={section.medium[0].src} />
        </div>
        <div className="outerarea-text">
          <div className="area-title">
            <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
          </div>
          <ul className="area-descs">
            {section.descriptions.map((desc, _i) => {
              return (
                <li key={`InSE_Background_${_i}`}>
                  <p>- {desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .component {
          display:grid;
          grid-template-columns:repeat(8,1fr);
          gap:${THEMES.gaps.xl};
        }

        .outerarea-visual{
          grid-column-start: 1;
          grid-column-end: 4;
          position:relative;
          padding-top:100%;
        }

        .outerarea-text{
          grid-column-start: 4;
          grid-column-end: 9;
        }

        .area-descs p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
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
              <div className="video2">
                <PA_Video src={section.medium[1].src} />
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

        .text-oneLine{
          padding-bottom:${THEMES.gaps.m};
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

const InSE_Prototyping = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <SE_Layout fill={true}>
          <>
            <ul className="areas-improving">
              <li className="improving1">
                <div className="area-image">
                  <PA_Image src={section.medium[0].src} abs={true} r={THEMES.rs.xs} />
                </div>
                <div className="area-caption">
                  <p>{section.medium[0].caption}</p>
                </div>
              </li>
              <li className="arrow">
                <SVG_ARROW_Transition />
              </li>
              <li className="improving2">
                <div className="area-image">
                  <PA_Image src={section.medium[1].src} abs={true} r={THEMES.rs.xs} />
                </div>
                <div className="area-caption">
                  <p>{section.medium[1].caption}</p>
                </div>
              </li>
              <li className="arrow">
                <SVG_ARROW_Transition />
              </li>
              <li className="improving3">
                <div className="area-image">
                  <PA_Image src={section.medium[2].src} abs={true} r={THEMES.rs.xs} />
                </div>
                <div className="area-caption">
                  <p>{section.medium[2].caption}</p>
                </div>
              </li>
            </ul>
            <div className="areas-testing">
              <PA_Video src={section.medium[3].src} />
              <PA_Video src={section.medium[4].src} />
            </div>
          </>
        </SE_Layout>
      </div>
      <style jsx>{`
        .component {
        }

        .areas-improving {
          grid-column-start: 1;
          grid-column-end: 6;
          display: grid;
          gap: ${THEMES.gaps.m};
          grid-template-columns: 6fr 1fr 6fr 1fr 6fr;
          padding-bottom:${THEMES.gaps.m}
        }

        .areas-improving li {
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

        .area-caption p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .areas-testing {
          grid-column-start: 6;
          grid-column-end: 9;
          width: 100%;
          height: 100%;
          display: grid;
          gap: ${THEMES.gaps.m};
          width: 100%;
          grid-template-columns: 1fr 1fr;
        }

        .area-caption {
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
                <PA_Image src={capture.src} alt={""} ntl={true} />
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

const InSE_End = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content"></div>
      </div>
      <style jsx>{`
        .component {
        }

        .area-content {
          background-color: green;
          height: 100%;
        }
      `}</style>
    </>
  );
};
