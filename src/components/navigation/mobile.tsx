import { motion } from "framer-motion";
import { PanelRightClose } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { languages } from "@/data/dummy";
import { cn } from "@/lib/utils";

import BrowseByTag from "./sections/browse-by-tag";
import { navigationLinks } from "./sidebar";

type MobileSideBarProps = {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSideBar = ({ isMobile, setIsMobile }: MobileSideBarProps) => {
  const pathName = usePathname();
  const [languagesToDisplay, setLanguagesToDisplay] = useState(languages);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"></div>
      {/* Sidebar */}
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5 }}
        className="absolute right-0 h-screen inset-y-0 z-50 w-[80%] py-12 px-8 bg-[#202040] text-white lg:hidden"
      >
        <div className="flex">
          <PanelRightClose size={30} onClick={() => setIsMobile(!isMobile)} />
        </div>

        <div className="flex flex-col mt-6 space-y-5">
          <Button
            className="bg-purple-600 rounded-md hover:bg-purple-700"
            asChild
          >
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
      </motion.div>
    </>
  );
};

export default MobileSideBar;
