import { AuthOption } from "@/lib/auth";
import NextAuth from "next-auth/next";

const authHanlder = NextAuth({
    ...AuthOption,
    session: {
        strategy: "jwt"
    }
});

export { authHanlder as GET, authHanlder as POST };