"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileEdit, PanelTopOpen, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import CodePreviewComponent from "@/components/code-preview";
import { Snippet } from "@/components/snippet-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SavedSnippets = ({ snippet }: { snippet: Snippet }) => {
  const pathName = usePathname();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="text-white bg-gray-900 border-none">
      <CardHeader className="flex flex-row items-center justify-between gap-2 group">
        <div className="flex flex-col">
          <span className="hover:cursor-pointer">{snippet.description}</span>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <span className="text-gray-400"> by </span>
            <span className="text-purple-400">{snippet.author}</span>
            <span className="text-gray-400"> • </span>
            <span className="text-gray-400"> 1 month ago</span>

            {/* Section contains the edit and delete buttons, but only present when the group is hovered on */}
            <div
              className={cn(
                "flex items-center gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100",
                pathName === "/app/snippets/saved" && "hidden"
              )}
            >
              <span className="text-gray-400"> • </span>
              <FileEdit size={16} className="cursor-pointer" />
              <Trash2 size={16} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <PanelTopOpen
            size={24}
            onClick={() => setShowDetails(!showDetails)}
            className="cursor-pointer"
          />
        </div>
      </CardHeader>
      <AnimatePresence mode="wait">
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardContent>
              <div className="overflow-y-auto rounded-lg no-scrollbar h-max max-h-64">
                <CodePreviewComponent
                  code={snippet.code}
                  language={snippet.language}
                />
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default SavedSnippets;
