import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

import { options } from "@/app/api/auth/[...nextauth]/route";
import { ProfileForm } from "@/components/forms/profile-form";
import db from "@/db";
import { profiles } from "@/db/schema/users";

const ProfilePage = async () => {
  const session = await getServerSession(options);
  const profile = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, session?.user.id));
  return (
    <div>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
