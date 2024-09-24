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
}