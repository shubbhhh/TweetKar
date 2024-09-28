import prisma from "@/db"
import { error } from "console"
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from 'bcrypt'

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

                if (!user) {
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