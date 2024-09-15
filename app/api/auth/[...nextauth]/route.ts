import { AuthProvider } from "@/lib/auth";
import NextAuth from "next-auth/next";

const authHanlder = NextAuth(AuthProvider);

export { authHanlder as GET, authHanlder as POST };