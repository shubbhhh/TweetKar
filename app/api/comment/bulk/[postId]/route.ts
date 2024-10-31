import prisma from "@/db"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest, params: { postId: string }) {
    const { postId } = params; 
    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: postId
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return NextResponse.json(comments)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Error while fetch comments" }, { status: 500 })
    }
}