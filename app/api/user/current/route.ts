import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
    req: NextApiRequest,
) {
    try {
        const { currentUser } = await serverAuth(req);
    
        return NextResponse.json(currentUser)
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: 'User not signed-in' }, { status: 404 });
    }
}