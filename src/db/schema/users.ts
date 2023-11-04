import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(), // use clerk id as primary key
  name: text("name"),
  email: text("email").notNull(),
  image: text("image"),
  username: text("username"),
  githubId: text("githubId"),
});

export const profiles = pgTable("profile", {
  id: serial("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  bio: text("bio"),
  joined: timestamp("joined", { mode: "date" }),
  links: text("links"),
});

export type Profile = typeof profiles.$inferSelect;

export const insertProfile = createInsertSchema(profiles);
