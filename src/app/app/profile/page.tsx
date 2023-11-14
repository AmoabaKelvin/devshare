import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

import { ProfileForm } from "@/components/forms/profile-form";
import db from "@/db";
import { profiles } from "@/db/schema/users";

const ProfilePage = async () => {
  const { userId } = auth();

  const userProfile = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId!));

  const profileData = {
    ...userProfile[0],
    bio: userProfile[0].bio || "",
    urls: userProfile[0].links
      ? userProfile[0].links.split(",").map((link) => ({ value: link }))
      : [],
  };

  return (
    <div>
      <ProfileForm initialValues={profileData} />
    </div>
  );
};

export default ProfilePage;
