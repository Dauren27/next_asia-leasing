export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/admin/cars/:path*",
    "/admin/users/:path*",
    "/admin/applications/:path*",
    "/admin/profile",
  ],
};
