import prisma from "@/db";
import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest) {
    try {
        const { userId } = await req.json();
        console.log("userId", userId)
        const session = await getServerSession(AuthOption);
        const currentUser = session?.user;
        
        if (!currentUser || !currentUser.id) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }

        const sub = await prisma.subscriber.create({
            data: {
                userId: userId,
                subscriberId: currentUser.id        
            }
        })

        console.log(sub)
        return NextResponse.json({ currentUser })

    } catch(error) {
        console.log("Subscribing: ", error)
        return NextResponse.json({ error: "Error subscribing"})
    }
}



export async function DELETE(req: NextRequest) {
    try {
        const { userId } = await req.json();
        console.log("userId", userId)
        const session = await getServerSession(AuthOption);
        const currentUser = session?.user;
        
        if (!currentUser || !currentUser.id) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }
        
        const subToDelete = await prisma.subscriber.findFirst({
            where: {
                userId: userId,
                subscriberId: currentUser.id
            }
        })
        
        const sub = await prisma.subscriber.delete({
            where: {
                id: subToDelete?.id
            }
        })

        console.log(sub)
        return NextResponse.json({ sub })

    } catch(error) {
        console.log("Subscribing: ", error)
        return NextResponse.json({ error: "Error unfollowing"})
    }
}