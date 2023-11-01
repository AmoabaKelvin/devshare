import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import db from "@/db";
import { profiles } from "@/db/schema/users";

export const options: AuthOptions = {
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/app/auth/signin",
    signOut: "/app/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  secret: process.env.NEXTAUTH_SECRET!,

  // Automatically create a profile for new users
  events: {
    createUser: async (message) => {
      const { id } = message.user;
      await db
        .insert(profiles)
        .values({
          userId: id,
        })
        .execute();
    },
  },

  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
