import prisma from "@/db";
import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const session = await getServerSession(AuthOption);
        const currentUserId = session?.user.id

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
                Likes: {
                    select: {
                        userId: true
                    }
                },
                comments: true
            }
        });

        const postsWithLikedState = tweets.map(post => {
            const isLiked = post.Likes.some(like => like.userId === currentUserId);
            return {
                ...post,
                isLiked
            };
        });

        return NextResponse.json(postsWithLikedState)
    } catch(error) {
        console.log(error)
        return NextResponse.json({error: "Error while fetch tweets"}, { status: 400 })
    }
}