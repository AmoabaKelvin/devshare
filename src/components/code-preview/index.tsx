import { CopyBlock, atomOneDark } from "react-code-blocks";

interface CodePreviewComponentProps {
  code: string;
  language: string;
}

const CodePreviewComponent = ({
  code,
  language,
}: CodePreviewComponentProps) => {
  const codeBlockProps = {
    text: code,
    language: language,
    showLineNumbers: false,
  };

  return (
    <div className="relative text-xs md:text-base">
      <CopyBlock {...codeBlockProps} theme={atomOneDark} />
    </div>
  );
};

export default CodePreviewComponent;
