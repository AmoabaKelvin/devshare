"use client";

import { Lightbulb, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import CodePreviewComponent from "@/components/code-preview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Snippet {
  author: {
    name: string | null;
    github: string | null;
  };
  id: number;
  userId: string;
  description: string | null;
  code: string;
  language: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
}

const SnippetCard = (snippet: Snippet) => {
  const [eureka, setEureka] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleEureka = () => {
    setEureka(!eureka);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <Card className="mt-6 text-white bg-gray-900 border-none">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex items-center">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage
              src={`https://github.com/${snippet.author.github}.png`}
              alt="AmoaKelvin"
            />
            <AvatarFallback>
              {snippet.author.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between">
            <Link href={`/app/profile/${snippet.author.github}`}>
              <span className="text-sm">{snippet.author.name}</span>
            </Link>
            <span className="text-sm text-slate-400">
              {new Date(snippet.createdAt).toDateString()}
            </span>
          </div>
        </div>
        <span className="text-sm text-slate-400">{snippet.language}</span>
      </CardHeader>
      <CardContent>
        <p className="mb-3 text-sm">{snippet.description}</p>
        <div className="overflow-y-auto rounded-lg no-scrollbar h-max max-h-64">
          <CodePreviewComponent
            language={snippet.language}
            code={snippet.code}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          {snippet.tags.split(", ").map((tag) => (
            <Badge
              key={tag}
              className="mr-2 text-xs text-slate-400 border-slate-500 hover:cursor-pointer"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-slate-400">
          <div className="flex items-center">
            <Lightbulb
              size={23}
              className={cn("lightbulb", eureka && "clicked")}
              onClick={handleEureka}
            />
            <span className="text-sm">5</span>
          </div>
          <div className="flex items-center">
            <Save
              size={23}
              className={cn("ml-4 save", saved && "clicked")}
              onClick={handleSave}
            />
            <span className="ml-1 text-sm">5</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SnippetCard;
