import { eq } from "drizzle-orm";
import { Lightbulb, Save } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import db from "@/db";
import { snippets } from "@/db/schema/snippets";
import { users } from "@/db/schema/users";

import CommentSection from "./_components/comments";
import { CodeEditor } from "../new/page";

const getSnippets = async (snippetId: number) => {
  const _snippets = await db
    .select({
      author: {
        name: users.name,
        github: users.username,
        image: users.image,
      },
      snippets,
    })
    .from(snippets)
    .where(eq(snippets.id, snippetId))
    .innerJoin(users, eq(snippets.userId, users.id));

  if (_snippets.length > 0) {
    return _snippets[0];
  }

  return null;
};

const SnippetDetailPage = async ({ params }: { params: { id: string } }) => {
  const snippet = await getSnippets(Number(params.id));

  if (!snippet) {
    redirect("/404");
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-8">
      <div className="md:col-span-6 md:mr-2">
        {/* Author details here */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={snippet.author.image!}
              alt={snippet.author.name!}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-purple-400">
                {snippet.author.name}
              </h1>
              <div className="flex gap-3">
                <p className="text-slate-300">@{snippet.author.github}</p>
                <p className="text-slate-300">•</p>
                <p className="text-slate-300">
                  {new Date(snippet.snippets.createdAt).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Codes section */}
        <div className="flex flex-col gap-4 mt-10">
          <p>
            <span className="text-purple-400">{">>"} </span>
            {snippet.snippets.description}
          </p>
          <CodeEditor
            value={snippet.snippets.code}
            className="rounded-lg pointer-events-none"
            language={snippet.snippets.language}
            style={{
              fontSize: 17,
              fontFamily: "Fira Code",
            }}
            contentEditable={false}
          />
          {/* Add the tags here */}
          <div className="flex flex-wrap gap-3">
            {snippet.snippets.tags.split(",").map((tag, id) => (
              <Badge
                key={id}
                className="text-xs text-slate-400 border-slate-500"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="flex flex-col gap-4 mt-10">
          <CommentSection />
        </div>
      </div>

      <div className="md:col-span-2">
        {/* Save and idea icons */}
        <h1 className="text-xl text-purple-400">Quick Actions</h1>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-3">
            <Save className="w-6 h-6 text-purple-400" size={23} />
            <span>25</span>
          </div>
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-purple-400" size={23} />
            <span>5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnippetDetailPage;
