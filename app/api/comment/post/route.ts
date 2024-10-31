import prisma from "@/db"
import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import toast from "react-hot-toast";


export async function POST(req: NextRequest) {
    try {
        const { postId, comment } = await req.json()
        const session = await getServerSession(AuthOption);
        const userId = session?.user.id

        if (!session || !userId) {
            return NextResponse.json({ message: "Unauthorized"}, { status: 401 })
        }

        console.log({
            postId: postId,  
            userId: userId, 
            message: comment
        })
        
        await prisma.comment.create({
            data: {
                postId: postId,
                userId: userId,
                message: comment
            }
        });

        // toast.success("Comment Posted.")
        return NextResponse.json({ message: "Comment Posted!"}, { status: 200 })
    } catch(error) {
        console.log(error)
        console.log(error)
        return NextResponse.json({ error: "Error while post a comment" }, { status: 500 })
    }
}