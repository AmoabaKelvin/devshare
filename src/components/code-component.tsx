"use client";

import { CopyBlock, atomOneDark } from "react-code-blocks";

interface Snippet {
  description: string;
  code: string;
  language: string;
  tags: string[];
  date: string;
}

const CodeComponent = ({ snippet }: { snippet: Snippet }) => {
  const copyBlockProps = {
    text: snippet.code,
    language: snippet.language,
    showLineNumbers: false,
    startingLineNumber: 1,
    theme: atomOneDark,
  };
  return <CopyBlock {...copyBlockProps} />;
};

export default CodeComponent;
