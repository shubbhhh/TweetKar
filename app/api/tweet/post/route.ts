import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        const tweets = await prisma.post.findMany({
            orderBy: {
                publishedDate: "desc"
            },
            select: {
                id: true,
                content: true,
                publishedDate: true,
                author: true,
                // authorId: true,
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

export async function POST(req: NextRequest) {
    try {
        const { content, authorId, } = await req.json()

        await prisma.post.create({
            data: {
                content: content,
                authorId: authorId
            }
        })
       
        return NextResponse.json({ message: "Post created" }, { status: 200 })
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create the post"}, { status: 500 }) 
    }
}