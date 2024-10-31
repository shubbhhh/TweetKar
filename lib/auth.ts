import prisma from "@/db"
import { error } from "console"
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from 'bcrypt'
import { NextAuthOptions } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id?: string | null;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

export const AuthOption = {
    providers: [
        CredentialsProvider({
            name: "signin", 
            id: "signin",
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'email' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credential): Promise<any> {
                if (!credential) {
                    throw new Error("Credentials required!")
                }
                const { email, password } = credential

                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    },
                })

                if (!user || !user.password) {
                    return error("Invalid cedentials!")
                }

                console.log(user.password, password)

                const isPasswordCorrect = await bcrypt.compare(
                    password,
                    user.password
                )

                console.log(isPasswordCorrect)

                if (!isPasswordCorrect) {
                    throw new Error("Invalid password")
                }
                
                return { 
                    id: user.id, 
                    name: user.name, 
                    email: user.email
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.name = user.name;
            token.email = user.email;
          }
          return token;
        },
        async session({ session, token }) {
          if (token && session && session.user) {
            session.user = {
                ...session.user,
                id: token.sub
            }; 
          }
          return session;
        },
    },
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV == "development",
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET

} satisfies NextAuthOptions;