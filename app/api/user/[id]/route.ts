import prisma from "@/db";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = params.id

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        return NextResponse.json(user)
    } catch(error) {
        console.log("Error fetch user: ", error)
        return NextResponse.json({ error: "Error while fetch user" }, { status: 500 })
    }

}