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

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import BrowseByTag from "./sections/browse-by-tag";

export const navigationLinks = [
  {
    name: "Discover",
    href: "/app",
    Icon: <Compass size={24} />,
  },
  {
    name: "My Snippets",
    href: "/app/snippets",
    Icon: <SquareDashedBottomCode size={24} />,
  },
  {
    name: "Saved Snippets",
    href: "/app/snippets/saved",
    Icon: <SaveAll size={24} />,
  },
  {
    name: "Profile",
    href: "/app/profile",
    Icon: <User size={24} />,
  },
  {
    name: "Settings",
    href: "/profile",
    Icon: <Settings size={24} />,
  },
];

const Sidebar = () => {
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
      <BrowseByTag />
    </div>
  );
};

export default Sidebar;
