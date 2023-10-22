"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useCommandK } from "@/hooks/use-commandk";

import SearchSnippetTerminal from "./terminal";

const TerminalOverlayComponent = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const pathname = usePathname();
  const terminalActivated = useCommandK();

  useEffect(() => {
    if (terminalActivated) {
      setShowTerminal(true);
    } else {
      setShowTerminal(false);
    }
  }, [terminalActivated]);

  useEffect(() => {
    // If the path of the page changes, hide the terminal
    setShowTerminal(false);
  }, [pathname]);

  return (
    <>
      {showTerminal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-lg">
          <div className="w-full max-w-3xl p-4 rounded-lg">
            <SearchSnippetTerminal />
            <div className="mt-4"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalOverlayComponent;
