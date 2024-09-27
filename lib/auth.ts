import prisma from "@/db"
import { error } from "console"
import CredentialsProvider from "next-auth/providers/credentials"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from 'bcrypt'

export const AuthProvider = {
    adapter: PrismaAdapter(prisma),
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
                    return error("Credentials required!")
                }
                const { email, password } = credential

                const user = prisma.user.findUnique({
                    where: {
                        email: email
                    },
                })

                if (!user) {
                    return error("Invalid cedentials!")
                }

                const isPasswordCorrect = await bcrypt.compare(
                    user.password,
                    password
                )

                if (!isPasswordCorrect) {
                    return error("Invalid password")
                }
                
                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV == "development",
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
}