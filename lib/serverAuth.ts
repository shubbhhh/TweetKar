import prisma from "@/db";
import { AuthOption } from "./auth";
import { getServerSession } from "next-auth/next";
import { NextApiRequest } from "next";

export default async function serverAuth(req: NextApiRequest) {
    const session = await getServerSession(AuthOption);

    if (!session?.user?.email) {
        throw new Error("Not signed-in");
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session?.user?.email
        }
    })

    if (!currentUser) {
        throw new Error("User not found");
    }

    return { currentUser };
};