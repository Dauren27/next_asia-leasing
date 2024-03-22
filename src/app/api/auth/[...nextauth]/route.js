import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        const user = {
          email: credentials.email,
          password: credentials.password,
        };

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
};
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
