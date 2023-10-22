import { Fira_Code } from "next/font/google";

import DesktopNavigationBar from "@/components/navigation/desktop";
import Sidebar from "@/components/navigation/sidebar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function DevShareAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`py-6 px-3 md:px-24 bg-[#202040] text-white ${firaCode.className}`}
    >
      <DesktopNavigationBar />
      <div className="grid grid-cols-1 mt-10 md:grid-cols-5">
        <Sidebar />
        <div className="md:ml-10 col-span-full md:col-span-3">{children}</div>
        <div></div>
      </div>
    </main>
  );
}
