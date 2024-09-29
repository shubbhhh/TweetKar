import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        // console.log(req)
        const users = await prisma.user.findMany({
            orderBy: {
                creationDate: "desc"
            }
        });
        
        return NextResponse.json(users);
    } catch(error) {
        console.log(error)
        return NextResponse.json({ error: "Error while fetching users" }, { status: 400 });
    }
}