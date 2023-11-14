"use server";

import { auth } from "@clerk/nextjs";
import { z } from "zod";

import db from "@/db";
import { insertSnippetSchema, snippets } from "@/db/schema/snippets";

export async function createSnippet(
  data: Omit<z.infer<typeof insertSnippetSchema>, "userId">
) {
  if (!insertSnippetSchema.safeParse(data)) {
    return { error: "Invalid data" };
  }

  const { userId } = auth();
  const snippet = await db
    .insert(snippets)
    .values({
      userId: userId!,
      description: data.description,
      code: data.code,
      language: data.language,
      tags: data.tags,
    })
    .returning();

  return snippet;
}

export async function getSnippets() {}
