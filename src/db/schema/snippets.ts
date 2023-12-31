import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import { users } from "./users";

export const snippets = pgTable("snippet", {
  id: serial("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  description: text("description"),
  code: text("code").notNull(),
  language: text("language").notNull(),
  tags: text("tags").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" })
    .notNull()
    .$default(() => new Date()),
  updatedAt: timestamp("updatedAt", { mode: "date" })
    .notNull()
    .$default(() => new Date()),
});

export type Snippet = typeof snippets.$inferSelect;
export type SnippetInsert = typeof snippets.$inferInsert;

export const insertSnippetSchema = createInsertSchema(snippets);
