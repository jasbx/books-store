import { PrismaClient, User } from '@prisma/client'
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
const prisma = new PrismaClient()
export async function POST(request: Request) {
    const body = await request.json();
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (user) {
        return new Response(JSON.stringify({ massg: 'you alradey register' }), { status: 400 })
    }

    const newuser: User = await prisma.user.create({
        data:{
            id: body.id,
            username: body.username,
            email: body.email,
            password: body.password,
        }
    })
    const jwtPayload={
        email:body.email,
        password:body.password,
    }
    
    const token = jwt.sign(jwtPayload,process.env.JWT as string,{expiresIn:'30d'})
const cookie= serialize("JwTCookies",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV==='production',
    sameSite:'strict',
    path:'/',
    maxAge:60*60*24*30,
})

    return new Response(JSON.stringify('register and set Cookies'), {
        status: 201,
        headers: {
            'Set-Cookie': cookie
        }
    }

    )
}
