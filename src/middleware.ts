import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // If base domain is app.devshare.dev, redirect to devshare.dev/app
  if (request.nextUrl.hostname === "app.devshare.dev") {
    return NextResponse.redirect(new URL("https://devshare.dev/app"), {
      status: 301,
    });
  }
}
