import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("sb-bqypwedmbvpzkgyqezza-auth-token");

  if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
