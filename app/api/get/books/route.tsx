import { Book,PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const books: Book[] = await prisma.book.findMany();
        return new Response(JSON.stringify(books), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });

    }
}