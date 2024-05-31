import { PrismaClient, User} from '@prisma/client'
import { LoginInterface } from '../validtions/route';
//jeson web token 
import Jwt from 'jsonwebtoken';
// cookie
import { serialize } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient()
export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as LoginInterface;
        const user = await prisma.user.findUnique(

            {
                where:

                {
                    email: body.email,
                    password: body.password

                }

            }


        )
     
        if (!user) {
            return new NextResponse(JSON.stringify({ massg: 'email or password is incorrect ' }), { status: 400 })
        }
     
 const jwtPayload = {
            id: user.id,
            email: user.email,
            password: user.password
        }

        // const jwtweb= jwt.sign(jwtPayload,"priatetoken293993",{expiresIn:'20d'})
        //     const passwordmatch = await bcrypt.compare(body.password, user.password);
        // if(!passwordmatch){
        //     return new  Response (JSON.stringify({massg:'you password incorrect '}),{status:400})   
        // }

        const token = Jwt.sign(jwtPayload, process.env.JWT as string, { expiresIn: '30d' });
        const cookie = serialize("JwTCookies", token, {
            httpOnly: true,// sevtay
            secure: process.env.NODE_ENV === 'production',// condations
            sameSite: 'strict',// sevtay
            path: '/',// path when the cookie work
            maxAge: 60*60*24*30// experIn

        })
        return new NextResponse(JSON.stringify(
            { massge: 'login succesfull', token }
        ), {
            status: 201,
            headers: {
                'Set-Cookie': cookie
            }
        }

        )
    }
    catch (error) {
        return NextResponse.json({ masssge: "internal server error" }, { status: 500 })
    }
}
