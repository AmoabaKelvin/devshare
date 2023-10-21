"use client";

import { PanelTopOpen } from "lucide-react";
import { useState } from "react";

import CodePreviewComponent from "@/components/code-preview";
import { Snippet } from "@/components/snippet-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SavedSnippets = ({ snippet }: { snippet: Snippet }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="text-white bg-gray-900 border-none">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-col">
          {snippet.description}
          <div className="flex items-center gap-2 mt-2 text-sm">
            <span className="text-gray-400"> by </span>
            <span className="text-purple-400">{snippet.author}</span>
            <span className="text-gray-400"> • </span>
            <span className="text-gray-400"> 1 month ago</span>
          </div>
        </div>
        <PanelTopOpen size={24} onClick={() => setShowDetails(!showDetails)} />
      </CardHeader>
      {showDetails && (
        <CardContent>
          <div className="overflow-y-auto rounded-lg no-scrollbar h-max max-h-64">
            <CodePreviewComponent
              code={snippet.code}
              language={snippet.language}
            />
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SavedSnippets;
