import SnippetCard from "@/components/snippet-card";
import { snippets } from "@/data/dummy";

export default function DevShareApp() {
  return (
    <>
      <div className="space-x-6">
        <span className="hover:cursor-pointer hover:text-purple-300">
          Relevant
        </span>
        <span className="hover:cursor-pointer hover:text-purple-300">
          Latest
        </span>
        <span className="hover:cursor-pointer hover:text-purple-300">Top</span>
      </div>

      {snippets.map((snippet, id) => (
        <SnippetCard key={id} snippet={snippet} />
      ))}
    </>
  );
}
