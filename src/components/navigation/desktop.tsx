"use client";

import { UserButton } from "@clerk/nextjs";
import { AnimatePresence } from "framer-motion";
import { PanelRightOpen } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

import MobileSideBar from "./mobile";

const DesktopNavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div className="flex bg-[#160F30] justify-between items-center px-3 md:px-6 py-3 rounded-lg">
        <div className="flex items-center w-3/4 lg:w-full">
          <span className="text-lg">DevShare</span>
          <Input
            className="hidden md:block ml-48 w-1/2 lg:w-[61%] bg-transparent border border-[#3d3d3d] focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search for snippets"
          />
        </div>
        <UserButton afterSignOutUrl="/app" />
        <div
          className="p-2 ml-3 bg-purple-800 rounded-md md:hidden"
          onClick={handleMobile}
        >
          <PanelRightOpen />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isMobile && (
          <MobileSideBar isMobile={isMobile} setIsMobile={setIsMobile} />
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopNavigationBar;
