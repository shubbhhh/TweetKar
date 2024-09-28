import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/db';

export async function POST(req: Request) {
    try {
        const { email, username, name, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
