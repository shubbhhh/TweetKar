import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE({ params }: { params: { commentId: string } }) {
    try {
        const commentId = params.commentId;

        await prisma.comment.delete({
            where: {
                id: commentId
            }
        });

        return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Error while deleting comment"}, { status: 500 });
    }


}