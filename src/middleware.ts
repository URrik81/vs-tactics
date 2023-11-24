import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import paths from "@src/services/paths";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  if (nextUrl.pathname !== paths.login && !request.cookies.get("token")) {
    return NextResponse.redirect(new URL(paths.login, request.url));
  }

  switch (nextUrl.pathname) {
    case paths.login:
      if (request.cookies.get("token")) {
        return NextResponse.redirect(new URL(paths.index, request.url));
      }

      break;
    case paths.index:
      return NextResponse.redirect(new URL(paths.profile, request.url));
    default:
      break;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|static|favicon.ico).*)"],
};
