import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
    try {
        const username = params.username;
        console.log("User name:", username)
        const user = await prisma.user.findUnique({
            where: {
                username: username
            },
            select: {
                id: true,
                name: true,
                details: true,
                profilePic: true,
                username: true,
                email: true,
                creationDate: true,
                subscribers: true,
                subscribedTo: true
            }
        })

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        return NextResponse.json(user)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ message: "Error while fetching user" }, { status: 500 })
    }
}