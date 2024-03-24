import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
        role: { label: "role", type: "text", required: true },
      },
      async authorize(credentials) {
        const user = {
          email: credentials.email,
          role: credentials.role,
        };

        return user;
      },
    }),
  ],
  secret: "supersecret",
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;

      return session;
    },
  },
  pages: {
    signIn: "/admin",
  },
};
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
