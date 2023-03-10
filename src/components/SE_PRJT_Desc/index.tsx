import ReactMarkdown from "react-markdown";
import ST_MD from "src/styles/ST_MD";
import * as THEMES from "src/styles/theme";

type Props = {
  content_md: string;
};

const SE_PRJT_Desc = ({ content_md }: Props) => {
  return (
    <>
      <div className="component">
        <div className="description">
          <ST_MD>
            <ReactMarkdown linkTarget={"_blank"} transformLinkUri={null}>
              {content_md}
            </ReactMarkdown>
          </ST_MD>
        </div>
      </div>
      <style jsx>{`
        .component {
          padding-left: 25px;
        }
      `}</style>
    </>
  );
};

export default SE_PRJT_Desc;
