import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/app/auth",
  },
});

export const config = {
  matcher: ["/app/profile", "/app/snippets:path*"],
};
