"use client";

import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

import DesktopNavigationBar from "../navigation/desktop";
import Sidebar from "../navigation/sidebar";

const pathsThatDoNotFollowTheLayout = [
  "/app/auth/sign-in",
  "/",
  "/app/auth/sign-up",
];

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  if (pathsThatDoNotFollowTheLayout.includes(pathName)) {
    return <>{children}</>;
  }

  return (
    <main
      className={`py-6 px-3 mt-6 md:px-24 bg-[#202040] text-white ${robotoMono.className}`}
    >
      <DesktopNavigationBar />
      <div className="grid grid-cols-1 mt-10 md:grid-cols-5">
        <Sidebar />
        <div className="md:ml-10 col-span-full md:col-span-4">{children}</div>
        <div></div>
      </div>
    </main>
  );
};
