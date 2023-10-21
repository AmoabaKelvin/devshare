import SearchSnippetTerminal from "@/components/terminal";
import { snippets } from "@/data/dummy";

import SavedSnippets from "./_components/saved-snippets";

export default function DevShareApp() {
  return (
    <>
      <h1 className="text-xl text-purple-400">Your saved Snippets</h1>
      <p className="mt-6 mb-3">Find faster with the terminal</p>
      <SearchSnippetTerminal />

      <div className="mt-10">
        <p>Feeling intimidated with the terminal?</p>

        <div className="flex flex-col gap-3 mt-6">
          {snippets.slice(0, 3).map((snippet, id) => (
            <SavedSnippets key={id} snippet={snippet} />
          ))}
        </div>
      </div>
    </>
  );
}
