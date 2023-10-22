import { useEffect, useState } from "react";

export function useCommandK() {
  const [terminalActivated, setTerminalActivated] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log(event.key, event.metaKey);
      if (event.key === "k" && event.metaKey) {
        setTerminalActivated(!terminalActivated);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return terminalActivated;
}
