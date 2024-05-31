import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const prisma = new PrismaClient();

        const newComent = await prisma.comment.create({
            data: {
                id: body.id,
                coment: body.coment,
                bookId: body.bookId,

            }
        })
        return NextResponse.json(newComent)
    } catch (error) {
        return new NextResponse(JSON.stringify({
            message: 'server error'
        }

        ), { status: 500 })

    }

}