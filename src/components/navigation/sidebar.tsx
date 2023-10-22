"use client";

import {
  Compass,
  SaveAll,
  Settings,
  SquareDashedBottomCode,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { languages } from "@/data/dummy";
import { cn } from "@/lib/utils";

const navigationLinks = [
  {
    name: "Discover",
    href: "/app",
    Icon: <Compass size={24} />,
  },
  {
    name: "Snippets",
    href: "/app/snippets",
    Icon: <SquareDashedBottomCode size={24} />,
  },
  {
    name: "Saved Snippets",
    href: "/bookmarks",
    Icon: <SaveAll size={24} />,
  },
  {
    name: "Profile",
    href: "/profile",
    Icon: <User size={24} />,
  },
  {
    name: "Settings",
    href: "/profile",
    Icon: <Settings size={24} />,
  },
];

const Sidebar = () => {
  const [languagesToDisplay, setLanguagesToDisplay] = useState(languages);
  const pathName = usePathname();

  return (
    <div className="hidden sticky top-12 md:flex flex-col h-[80vh] w-64 bg-[#160F30] rounded-md p-4 backdrop-blur-lg">
      <Button className="bg-purple-600 rounded-md hover:bg-purple-700" asChild>
        <Link href="/app/snippets/new">New Snippet</Link>
      </Button>
      <nav className="flex flex-col mt-6 space-y-5">
        {navigationLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-white hover:bg-gray-700",
              pathName === link.href && "text-white"
            )}
          >
            <span className="mr-2">{link.Icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>
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
    </div>
  );
};

export default Sidebar;
