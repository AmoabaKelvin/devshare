import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { ClipBoardIcon } from "@/components/code-preview/copy";
import useClipboard from "@/hooks/use-clipboard";

interface CodePreviewComponentProps {
  code: string;
  language: string;
}

const CodePreviewComponent = ({
  code,
  language,
}: CodePreviewComponentProps) => {
  const { copyToClipboard, copied } = useClipboard();

  const handleCopy = () => {
    copyToClipboard(code);
  };

  return (
    <div className="relative text-xs md:text-base">
      <SyntaxHighlighter
        language={language}
        showLineNumbers={true}
        style={atomOneDark}
      >
        {code}
      </SyntaxHighlighter>
      <div
        className="absolute top-0 right-0 m-2 cursor-pointer"
        onClick={handleCopy}
      >
        <ClipBoardIcon copied={copied} />
      </div>
    </div>
  );
};

export default CodePreviewComponent;
