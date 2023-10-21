import { useState } from "react";

interface OutPut {
  command: string;
  result?: string[];
}

export default function useCommandHandler() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<OutPut[]>([]);

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const superCommandHandler = (result: string[]) => {
    setOutput((prev) => [
      ...prev,
      {
        command: command,
        result: result,
      },
    ]);
    setCommand("");
  };

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (command) {
      case "clear":
        setCommand("");
        setOutput([]);
        return;

      case "help":
        return superCommandHandler([
          "clear - clear the terminal",
          "help - show this help message",
          "ls - list all snippets",
          "\n",
          "© 2023 DevShare, Inc.",
        ]);

      case "ls":
        return superCommandHandler([
          "README.md",
          "package.json",
          "node_modules",
          "src",
          "public",
          "yarn.lock",
        ]);

      case "date":
        return superCommandHandler([new Date().toLocaleDateString()]);

      case "time":
        return superCommandHandler([new Date().toLocaleTimeString()]);

      case "datetime":
        return superCommandHandler([new Date().toLocaleString()]);

      case "whoami":
        return superCommandHandler(["You are a developer."]);

      case "pwd":
        return superCommandHandler(["/home/developer"]);

      case "uname":
        return superCommandHandler(["Linux"]);

      default:
        if (command.includes("+")) {
          const [first, second] = command.split("+");
          const result = parseInt(first) + parseInt(second);
          return superCommandHandler([result.toString()]);
        }

        superCommandHandler([
          "Command not found. Type 'help' for available commands.",
        ]);
        break;
    }
  };

  return {
    command,
    output,
    handleCommandChange,
    handleCommandSubmit,
  };
}
