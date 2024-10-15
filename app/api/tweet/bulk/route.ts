import prisma from "@/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const tweets = await prisma.post.findMany({
            orderBy: {
                publishedDate: "desc"
            },
            select: {
                id: true,
                title: true,
                content: true,
                publishedDate: true,
                author: true,
                authorId: true,
                bookmarks: true,
                Likes: true,
                comments: true
            }
        });

        return NextResponse.json(tweets)
    } catch(error) {
        console.log(error)
        return NextResponse.json({error: "Error while fetch tweets"}, { status: 400 })
    }
}