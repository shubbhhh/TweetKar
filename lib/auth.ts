import prisma from "@/db"
import { error } from "console"
import CredentialsProvider from "next-auth/providers/credentials"

export const AuthProvider = {
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
                    select: {
                        id: true,
                        email: true,
                        
                    }     
                })
                return
            }
        })
    ]
}