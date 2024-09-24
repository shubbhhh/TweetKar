import { AuthProvider } from "@/lib/auth";
import NextAuth from "next-auth/next";

const authHanlder = NextAuth({
    ...AuthProvider,
    session: {
        strategy: "jwt"
    }
});

export { authHanlder as GET, authHanlder as POST };