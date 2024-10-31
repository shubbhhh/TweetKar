import prisma from "@/db";
import { NextResponse } from "next/server"

export async function GET({ params }: { params: { userId: string } }) {
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