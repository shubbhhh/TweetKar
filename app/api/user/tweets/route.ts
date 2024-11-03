import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    try {
        const userId = params.userId;

        const userTweets = await prisma.post.findMany({
            where: {
                authorId: userId,
            }
        });

        return NextResponse.json(userTweets)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Error while fetching tweets"}, { status: 500 })
    }
}