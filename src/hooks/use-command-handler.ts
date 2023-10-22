import { useRouter } from "next/navigation";
import { useState } from "react";

const availableRoutes = [
  "/",
  "/app/snippets",
  "app/profile",
  "settings",
  "logout",
];

interface OutPut {
  command: string;
  result?: string[];
}

export default function useCommandHandler() {
  const router = useRouter();
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
          "Dijkstra's Algorithm in C++",
          "Finding a node in a binary tree in Java",
          "Sorting an array in JavaScript",
          "Quick hack to get the most occurring element in an array in Python",
        ]);

      case "date":
        return superCommandHandler([new Date().toLocaleDateString()]);

      case "time":
        return superCommandHandler([new Date().toLocaleTimeString()]);

      case "datetime":
        return superCommandHandler([new Date().toLocaleString()]);

      case "whoami":
        return superCommandHandler(["KelvinAmoaba"]);

      case "pwd":
        return superCommandHandler(["/home/kelvinamoaba"]);

      case "uname":
        return superCommandHandler(["Linux"]);

      default:
        if (command.includes("mv")) {
          const route = command.split(" ")[1];

          if (route === "/" || route === "..") {
            superCommandHandler([`\nNavigating to ${route}...`]);
            return router.push(route === "/" ? "/app" : ".");
          }

          const actualRoute = availableRoutes.find((r) => r.includes(route));
          if (actualRoute) {
            superCommandHandler([`\nNavigating to ${actualRoute}...`]);
            return router.push(actualRoute);
          }

          return superCommandHandler([`cd: no such route: ${route}`]);
        }

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
