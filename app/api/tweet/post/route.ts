import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        // unpack
        const { title, content, authorId, } = await req.json()

        await prisma.post.create({
            data: {
                title: title,
                content: content,
                authorId: authorId
            }
        });
       
        return NextResponse.json({ message: "Post created" }, { status: 200 })
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create the post"}, { status: 500 }) 
    }
}