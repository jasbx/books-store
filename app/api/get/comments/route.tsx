import { Comment, PrismaClient } from "@prisma/client";

import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const comment: Comment[] = await prisma.comment.findMany();
        return new Response(JSON.stringify(comment), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });

    }
}