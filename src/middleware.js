import { NextResponse } from "next/server";
export function middleware(request) {
  let checkAuth = false;
  const checkToken = request.cookies.get("accessToken");
  if (checkToken) {
    checkAuth = true;
  }
  if (checkAuth) {
    return NextResponse.next();
  } else {
    const loginUrl = new URL("/api/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
}
export const config = {
  matcher: "/posts",
};
