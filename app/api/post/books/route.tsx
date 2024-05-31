import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const prisma = new PrismaClient();

        const newBook = await prisma.book.create({
            data: {
                id: body.id,
                title: body.title,
                desc: body.desc,
                price: body.price,

            }
        })
        return NextResponse.json(newBook)
    } catch (error) {
        return new NextResponse(JSON.stringify({
            message: 'server error'
        }

        ), { status: 500 })

    }

}