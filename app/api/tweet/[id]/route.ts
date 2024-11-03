import prisma from "@/db";
import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const postId = params.id;
    const sesssion = await getServerSession(AuthOption);

    const userId = sesssion?.user.id
    console.log("Post Id: ", postId)
    console.log("UserId:", userId)

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

        const hasLiked = postDetails?.Likes.filter((user) => user.id == userId)
        const isLiked = hasLiked? true : false
        return NextResponse.json({ ...postDetails, isLiked: isLiked })
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Error while fetching post" }, { status: 400 })
    }
}