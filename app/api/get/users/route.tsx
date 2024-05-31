import { User, PrismaClient } from "@prisma/client";

import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const user: User[] = await prisma.user.findMany();
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });

    }
}