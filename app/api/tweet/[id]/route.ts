import prisma from "@/db";
import { NextResponse } from "next/server";


export async function GET({ params }: { params: { postId: string } }) {
    const postId = params.postId;
    try {
        const postDetails = await prisma.post.findUnique({
            where: {
                id: postId
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
        })

        return NextResponse.json(postDetails)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Error while fetching post" }, { status: 400 })
    }
}