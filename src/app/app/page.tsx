import { SearchCodeIcon } from "lucide-react";

import SnippetCard from "@/components/snippet-card";
import { Input } from "@/components/ui/input";
import { snippets } from "@/data/dummy";

export default function DevShareApp() {
  return (
    // Reduce the cols when adding a sidebar in the future
    <div className="grid grid-cols-1 md:grid-cols-9">
      <div className="md:mr-10 col-span-full md:col-span-7">
        <div className="relative md:hidden">
          <Input
            className="w-full -mt-5 mb-4 bg-transparent border border-[#3d3d3d] focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search for snippets"
          />
          <div className="absolute top-0 right-0 h-full m-2 cursor-pointer">
            <SearchCodeIcon />
          </div>
        </div>
        <div className="space-x-2 md:space-x-6">
          <span className="hover:cursor-pointer hover:text-purple-300">
            Relevant
          </span>
          <span className="hover:cursor-pointer hover:text-purple-300">
            Latest
          </span>
          <span className="hover:cursor-pointer hover:text-purple-300">
            Top
          </span>
        </div>

        {snippets.map((snippet, id) => (
          <SnippetCard key={id} snippet={snippet} />
        ))}
      </div>
      <div className="hidden md:col-span-2 bg-none"></div>
    </div>
  );
}
