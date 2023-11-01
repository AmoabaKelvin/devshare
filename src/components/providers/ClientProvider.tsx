"use client";

import { usePathname } from "next/navigation";

import DesktopNavigationBar from "../navigation/desktop";
import Sidebar from "../navigation/sidebar";

const pathsThatDoNotFollowTheLayout = ["/app/auth"];

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  console.log(pathName);

  if (pathsThatDoNotFollowTheLayout.includes(pathName)) {
    return <>{children}</>;
  }

  return (
    <>
      <DesktopNavigationBar />
      <div className="grid grid-cols-1 mt-10 md:grid-cols-5">
        <Sidebar />
        <div className="md:ml-10 col-span-full md:col-span-4">{children}</div>
        <div></div>
      </div>
    </>
  );
};
