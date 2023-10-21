"use client";

import useCommandHandler from "@/hooks/use-command-handler";

export default function SearchSnippetTerminal() {
  const { command, output, handleCommandChange, handleCommandSubmit } =
    useCommandHandler();

  return (
    <div className="w-full p-6 font-mono text-white transition-all duration-300 bg-black rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <p className="text-sm">Oh my DevShare</p>
      </div>
      <div className="mt-4">
        {/* Output area */}
        {output.map((item, index) => (
          <div className="" key={index}>
            <div className="flex items-center gap-2">
              <p className="text-green-500">$</p>
              <p key={index} className="text-white">
                {item.command}
              </p>
            </div>
            {item.result?.map((res, index) => (
              <p key={index} className="text-white whitespace-pre">
                {res}
              </p>
            ))}
          </div>
        ))}
        {/* Input area */}
        <form onSubmit={handleCommandSubmit} className="flex gap-2">
          <p className="text-green-400">$</p>
          <input
            type="text"
            className="w-full text-white bg-transparent border-none focus:outline-none caret-green-400"
            value={command}
            autoFocus
            onChange={handleCommandChange}
          />
          <span className="caret"></span>
        </form>
      </div>
    </div>
  );
}
