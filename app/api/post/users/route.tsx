import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const prisma = new PrismaClient();

        const newUser = await prisma.user.create({
            data: {
                id:body.id,
                email:body.email,
                username:body.username,
                password:body.password
            }
        })
        return NextResponse.json(newUser)
    } catch (error) {
        return new NextResponse(JSON.stringify({
            message: 'server error'
        }

        ), { status: 500 })

    }

}