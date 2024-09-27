import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

import prisma from "@/db";

export default async function RegisterHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(404).end();
    }

    try {
        const { email, username, name, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        });

        return res.status(200).json(user);
    } catch(error) {
        console.log(error)
        console.log("-----------------------------------")
        return res.status(404)
    }
}