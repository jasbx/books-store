import { PrismaClient, Book } from '@prisma/client';
import DataApi from '../api/post/data';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  const newBook: Book =await prisma.book.create({
    data: {
      id:body.id,
      title:body.title,
      desc:body.desc,
      price:body.price,
      
    }
  });
  return new Response(JSON.stringify(newBook,),{status:2001});
}

// export function GET(request: Request) {

//   return Response.json(DataApi, { status: 200 });
// }
