import { AuthOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
) {
    try {
        const session = await getServerSession(AuthOption);
        const currentUser = session?.user
    
        return NextResponse.json(currentUser)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: 'User not signed-in' }, { status: 404 });
    }
}