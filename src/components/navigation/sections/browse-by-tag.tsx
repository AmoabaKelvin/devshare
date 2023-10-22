import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { languages } from "@/data/dummy";

const BrowseByTag = () => {
  const [languagesToDisplay, setLanguagesToDisplay] = useState(languages);

  return (
    <>
      <h4 className="mt-6 text-sm font-medium leading-none">Browse By Tag: </h4>
      <ScrollArea className="p-3 mt-5 rounded-md bg-gray-950 h-72">
        <Input
          className="sticky top-0 z-10 w-full mb-3 bg-transparent backdrop-blur-2xl focus-visible:ring-offset-0"
          placeholder="Search for a tag"
          onChange={(e) => {
            const value = e.target.value;
            setLanguagesToDisplay(
              languages.filter((language) =>
                language.toLowerCase().includes(value.toLowerCase())
              )
            );
          }}
        />
        {languagesToDisplay.map((language) => (
          <Link
            href={`/snippets/${language}`}
            key={language}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-white hover:bg-gray-700"
          >
            {language}
          </Link>
        ))}
      </ScrollArea>
    </>
  );
};

export default BrowseByTag;
