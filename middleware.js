import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookieStore = await cookies();
  const isLoggedIn = await cookieStore.get("userId");
  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/cart",
};
