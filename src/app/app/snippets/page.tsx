import { snippets } from "@/data/dummy";

import SavedSnippets from "./_components/saved-snippets";

export default function DevShareApp() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-11">
      <div className="col-span-8">
        <h1 className="text-xl text-purple-400">Your shared Snippets</h1>
        <p className="text-slate-300">
          Find and manage your shared snippets here.
        </p>

        <div className="mt-10">
          <div className="flex flex-col gap-3 mt-6">
            {snippets.slice(0, 3).map((snippet, id) => (
              <SavedSnippets key={id} snippet={snippet} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
