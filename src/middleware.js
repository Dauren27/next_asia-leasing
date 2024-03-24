// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextauth.token?.role === "user" &&
      req.nextUrl.pathname == "/admin/cars"
    ) {
      return NextResponse.error(new Error("Page Not Found"), { status: 404 });
    }
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role === "user" &&
      req.nextUrl.pathname != "/admin/profile" &&
      !req.nextUrl.pathname.startsWith("/admin/cars")
    )
      return NextResponse.error(new Error("Page Not Found"), { status: 404 });
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
export const config = {
  matcher: [
    "/admin/cars/:path*",
    "/admin/users/:path*",
    "/admin/applications/:path*",
    "/admin/profile",
  ],
};
