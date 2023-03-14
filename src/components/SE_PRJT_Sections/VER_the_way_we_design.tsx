import { T_PRJT_SECTION_FORMATTED } from "src/types";
import SE_Layout from "src/components/SE_Layout";
import PA_SectionTitle from "src/components/PA_SectionTitle";
import SE_LayoutWrap from "src/components/SE_LayoutWrap";
import PA_Image from "./PA_Image";
import PA_Video from "./PA_Video";
import SVG_ARROW_Transition from "../SVG/SVG_ARROW_TRANSITION";
import * as THEMES from "src/styles/theme";
import ST_IMAGE from "src/styles/ST_IMAGE";

type Props = {
  sections: T_PRJT_SECTION_FORMATTED[];
};

const SE_PRJT_Sections_the_way_we_design = ({ sections }: Props) => {
  return (
    <>
      <div className="component">
        <SE_LayoutWrap>
          <>
            <SE_Layout fill={false} center={true}>
              <InSE_FinalImage section={sections[0]} />
            </SE_Layout>
            {/* <SE_Layout fill={false} grid={8}>
              <InSE_Concept section={sections[1]} />
            </SE_Layout> */}
            <SE_Layout>
              <InSE_Background section={sections[2]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Research section={sections[3]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Humanity section={sections[4]} />
            </SE_Layout>
            {/* <SE_Layout fill={false}>
              <InSE_Idea section={sections[5]} />
            </SE_Layout> */}
            {/* <SE_Layout fill={false}>
              <InSE_Idea section={sections[6]} />
            </SE_Layout> */}
            <SE_Layout fill={false}>
              <InSE_Prototyping_StoolStructure section={sections[7]} />
            </SE_Layout>
            <SE_Layout fill={false}>
              <InSE_Demos section={sections[8]} />
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

export default SE_PRJT_Sections_the_way_we_design;

type PropsInSE = {
  section: T_PRJT_SECTION_FORMATTED;
};

const InSE_FinalImage = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">{/* <PA_SectionTitle title={section.sectionTitle} /> */}</div>
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
          letter-spacing: ${THEMES.letterSpacings.s};
        }

        .content-descriptions p::first-letter {
          font-size: ${THEMES.fontSizes.l};
          font-weight: ${THEMES.fontWeights.b};
        }

        .content-image {
          padding-bottom: ${THEMES.gaps.m};
        }

        .content-oneLine {
          padding-bottom: ${THEMES.gaps.m};
        }

        .content-descriptions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: ${THEMES.gaps.l};
        }

        .content-descriptions li {
          border-top: 2px solid ${THEMES.colors.accent.gray};
          padding-top: ${THEMES.gaps.s};
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
              <p>{section.descriptions[1]}</p>
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
          grid-column-end: 9;
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

const InSE_Background = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="visual">
          <PA_Image src={section.medium[0].src} abs={true} objectFit={"cover"}/>
        </div>
        
        <div className="flex">
          <div className="oneLine">
            <p>{section.oneLine}</p>
          </div>
          <ul className="descs">
            {section.descriptions.map((desc, _i) => {
              return (
                <li className={section.descriptions.length - 1 == _i ? "strong" : ""} key={`InSE_Background_${_i}`}>
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
      <style jsx>{`
        .descs p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .oneLine p {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .oneLine {
          width:fit-content;
          padding-right:${THEMES.gaps.xxl};
        }

        .descs {
          flex:1;
          display:flex;
          flex-direction:column;
          justify-content:flex-start;
        }

        .visual {
          width: 100%;
          padding-top:calc(100% * 0.5);
          position:relative;
        }

        .flex {
          display: flex;
          padding-bottom:${THEMES.gaps.xl};
        }
      `}</style>
    </>
  );
};

const InSE_Research = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="flex">
          <div className="image">
            <PA_Image src={section.medium[0].src} ntl={true} />
          </div>
          <div className="block">
          <div className="oneLine">
            <p>{section.oneLine}</p>
          </div>
          <div className="descs">
            {section.descriptions.map((desc, _i) => (
              <p key={`InSE_Idea_content_desc_${_i}`}>{desc}</p>
            ))}
          </div>
        </div>
        </div>
      </div>
      <style jsx>{`
        .oneLine P {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .descs p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .oneLine{
          padding-bottom:${THEMES.gaps.xl};
        }

        .flex{
          display:flex;
        }

        .image{
          width:60%;
        }

        .block{
          flex:1;
        }

        .content {
          /* height:100%; */
        }
      `}</style>
    </>
  );
};

const InSE_Humanity = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="oneLine">
            <p>{section.oneLine}</p>
          </div>
        <div className="image">
            <PA_Image src={section.medium[0].src} ntl={true} />
          </div>
        <div className="flex">
          <div className="block">
          
          <div className="image">
            <PA_Image src={section.medium[1].src} ntl={true} />
          </div>
          
          <div className="descs">
            {section.descriptions.map((desc, _i) => (
              <p key={`InSE_Idea_content_desc_${_i}`}>{desc}</p>
            ))}
          </div>
        </div>
        </div>
      </div>
      <style jsx>{`
        .oneLine P {
          font-size: ${THEMES.fontSizes.xl};
          font-weight: ${THEMES.fontWeights.b};
        }

        .descs p {
          font-size: ${THEMES.fontSizes.m};
          font-weight: ${THEMES.fontWeights.n};
        }

        .component {
        }

        .flex{
          display:flex;
        }

        .content {
          /* height:100%; */
        }

        .videos {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: ${THEMES.gaps.m};
        }
      `}</style>
    </>
  );
};

const InSE_Prototyping_StoolStructure = ({ section }: PropsInSE) => {
  const _columnNum = 6;
  const _size = 6;
  const _makeGrid = () => {
    const _list: string[] = [];
    for (let i = 0; i < _columnNum; i++) {
      _list.push(`${_size}fr`);
      i !== _columnNum - 1 && _list.push("1fr");
    }
    return _list.join(" ");
  };
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">
          <div className="content-images">
            {section.medium.map((media, _i) => (
              <>
                <div className="content-image" key={`InSE_Prototyping_Media_${_i}`}>
                  <PA_Image src={media.src} abs={true} objectFit="cover" />
                </div>
                {(_i + 1) % _columnNum !== 0 && _i + 1 !== section.medium.length && (
                  <div className="content-image arrow" key={`InSE_Prototyping_Arrow_${_i}`}>
                    <SVG_ARROW_Transition />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .content-images {
          display: grid;
          grid-template-columns: ${_makeGrid()};
          gap: ${THEMES.gaps.xl} ${THEMES.gaps.m};
        }

        .content-image {
          position: relative;
          padding-top: 100%;
          /* background-color:green; */
        }

        .arrow {
          display: grid;
          align-items: center;
        }
      `}</style>
    </>
  );
};

const InSE_Demos = ({ section }: PropsInSE) => {
  return (
    <>
      <div className="component">
        <div className="area-title">
          <PA_SectionTitle title={section.sectionTitle} noPadding={false} />
        </div>
        <div className="area-content">
          <div className="content-videos">
            <div className="video1">
              <PA_Video src={section.medium[0].src} />
            </div>
            <div className="video2">
              <PA_Video src={section.medium[1].src} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .component {
        }

        .content-videos {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: ${THEMES.gaps.m};
        }

        .video1 {
          grid-column-start: 1;
          grid-column-end: 5;
        }

        .video2 {
          grid-column-start: 5;
          grid-column-end: 9;
        }
      `}</style>
    </>
  );
};
