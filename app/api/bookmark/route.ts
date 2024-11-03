import prisma from "@/db";
import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {

    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Error while fetching bookmarks" }, { status: 500 })
    }
    
}

export async function POST(req: NextRequest) {
    try {
        const { postId } = await req.json();
        const session = await getServerSession(AuthOption);
        const userId = session?.user.id

        if (!session || !userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const bookmark = await prisma.bookmark.create({
            data: {
                postId: postId,
                userId: userId,
            }
        })

        return NextResponse.json({ bookmark }, { status: 200 });
    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Error while adding a bookmark" }, { status: 500 })
    }
    
}

export async function DELETE(req: NextRequest) {
    try {
        const { postId } = await req.json();
        const session = await getServerSession(AuthOption);
        const userId = session?.user.id

        if (!postId) {
            return NextResponse.json({ message: "Invalid request" }, { status: 400 })
        }

        if (!session || !userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const bookmarks = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                bookmarks: {
                    where: { 
                        AND: {
                            postId: postId,
                            userId: userId
                        }
                    }
                }
            }
        });

        if(!bookmarks?.bookmarks) {
            return NextResponse.json({ message: "Bookmark does not exist" }, { status: 404 });
        }

        if (bookmarks?.bookmarks.length > 0) {
            const bookmarkId = bookmarks?.bookmarks[0].id

            const deletedBookmark = await prisma.bookmark.delete({
                where: {
                    id: bookmarkId
                }
            })

            return NextResponse.json(deletedBookmark, { status: 200 });
        }
    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "Error while removing a bookmark" }, { status: 500 })
    }
}