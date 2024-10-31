import { NextRequest } from "next/server";


export async function PUT(req: NextRequest, { params }: { params: { commentId: string }}) {
    try {
        const commentId = params.commentId;
    
    } catch(error) {
        return
    }
}