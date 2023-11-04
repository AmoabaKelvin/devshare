"use server";

import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

import { ProfileFormValues } from "@/components/forms/profile-form";
import db from "@/db";
import { profiles } from "@/db/schema/users";

export async function updateProfile(data: ProfileFormValues) {
  const { userId } = auth();

  const links = data.urls?.map((url) => url.value).join(",");

  const profile = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId!))
    .execute();

  if (profile.length === 0) {
    await db.insert(profiles).values({
      userId: userId!,
      bio: data.bio,
      links,
    });
  }

  const insertedData = await db
    .update(profiles)
    .set({
      bio: data.bio,
      links,
    })
    .where(eq(profiles.userId, userId!))
    .returning();

  return insertedData;
}
