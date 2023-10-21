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
    <body
      className={`py-6 mt-6 px-24 bg-[#202040] h-screen text-white ${firaCode.className}`}
    >
      <DesktopNavigationBar />
      <div className="grid mt-10 md:grid-cols-5">
        <Sidebar />
        <div className="col-span-3 ml-10">{children}</div>
        <div></div>
      </div>
    </body>
  );
}
