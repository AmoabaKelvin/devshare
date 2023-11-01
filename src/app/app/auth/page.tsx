"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <button
        className="px-4 py-2 text-white bg-slate-600"
        onClick={() => signIn("github", { callbackUrl: "/app" })}
        type="button"
      >
        Sign In With GitHub
      </button>
    </main>
  );
};

export default LoginPage;
