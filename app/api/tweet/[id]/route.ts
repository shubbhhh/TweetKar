import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const postId = params.id;
    console.log("Post Id: ", postId)

    try {
        const postDetails = await prisma.post.findUnique({
            where: {
                id: postId
            },
            select: {
                id: true,
                content: true,
                publishedDate: true,
                author: true,
                authorId: true,
                bookmarks: true,
                Likes: true,
                comments: {
                    select: {
                        id: true,
                        message: true,
                        postId: true,
                        user: true,
                        Likes: true,
                        children: true,
                        createdAt: true
                    }
                }
            }
        })

        return NextResponse.json(postDetails)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Error while fetching post" }, { status: 400 })
    }
}