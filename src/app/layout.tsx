import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClientProvider } from "@/components/providers/client-provider";
import TerminalOverlayComponent from "@/components/terminal-overlay";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevShare - Code Snippet Sharing Platform",
  description:
    "DevShare is a code snippet sharing platform for developers to share, discuss, and collaborate on code snippets. Join the community and improve your coding skills.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-[#202040] ${inter.className}`}>
          <TerminalOverlayComponent />
          <ClientProvider>{children}</ClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
