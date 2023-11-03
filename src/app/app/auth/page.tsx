"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="mb-8 text-4xl font-bold text-center">Login to Devshare</h1>
      <Button
        className="px-4 py-2 text-white bg-slate-600"
        onClick={() => signIn("github", { callbackUrl: "/app" })}
        type="button"
        size="lg"
      >
        Sign In With GitHub
      </Button>
    </main>
  );
};

export default LoginPage;
