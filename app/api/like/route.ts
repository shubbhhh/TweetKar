import prisma from "@/db";
import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { commentId, postId } = await req.json();
        const session = await getServerSession(AuthOption);
        const userId = session?.user.id

        console.log("req data: ", { commentId, postId })
        console.log("userId: ", userId);
        if (!session || !session.user || !userId) {
            return NextResponse.json({ message: "Unauthorized"}, { status: 401 });
        }
        
        if (!commentId && !postId) {
            return NextResponse.json({message: "Invaild request." }, { status: 400 });
        }
        
        if (postId != null) {
            const response = await prisma.like.create({
                data: {
                    userId: userId,
                    postId: postId
                }
            })

            return NextResponse.json({
                id: response.id,
                postId: response.postId,
                userId: response.userId
            }, {
                status: 200
            })
        } else if (commentId) {
            const response = await prisma.like.create({
                data: {
                    userId: userId,
                    commentId: commentId
                }
            })

            return NextResponse.json({
                id: response.id,
                commentId: response.commentId,
                userId: response.userId
            }, {
                status: 200
            })
        }    
    } catch(error) {
        console.log("Error liking: ", error);
        return NextResponse.json({ message: "Error liking" }, { status: 500 });
    }
}