import { PrismaClient } from '@prisma/client';
import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server';

import { virfyToken } from '../../utils/token';
const prisma = new PrismaClient();
//DELETE BY ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json()

    try {

        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(params.id)
            }
        })
        //نجيك اليوزر ادا كان موجود او لا 1
        if (!user) {
            return new NextResponse(JSON.stringify({ massge: 'user not found' }), { status: 404 })
        }

        const token = virfyToken(request)
        if (token.id === user.id) {
            await prisma.user.delete({
                where: {
                    id: parseInt(params.id)

                }

            })
            return new NextResponse(JSON.stringify({ massge: 'user deleted' }), { status: 201 })
        }
    } catch {
        return new NextResponse(JSON.stringify({ massge: 'server error' }), { status: 500 })
    }
}
//=================================================================================================

// GET USER PY ID 
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(params.id)
            }
        })
        if (!user) {
            return new NextResponse(JSON.stringify({ massge: 'user not found' }), { status: 404 })
        }

        const userToken = virfyToken(request)
        if (userToken === null || userToken.id !== user.id) {
            return new NextResponse(JSON.stringify({ massge: 'auth token is null!' }), { status: 401 })
        }
        return new NextResponse(JSON.stringify(user), { status: 200 })

    } catch (error) {
        return new NextResponse(JSON.stringify({ massge: 'server error' }), { status: 500 })

    }
}
//=============================================================================================
// PUT USER PY ID 
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    //========================
    //type the body 
    interface BodyData {
        id?: number,
        username?: string;
        email?: string;
        password?: string;
    }
    //========================
    try {
        const body = await request.json() as BodyData;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(params.id)
            }
        })
        if (!user) {
            return new NextResponse(JSON.stringify({ massge: 'user not found' }), { status: 404 })
        }

        const userToken = virfyToken(request)
        if (userToken === null || userToken.id !== user.id) {
            return new NextResponse(JSON.stringify({ massge: 'auth token is null!' }), { status: 401 })
        }
        const newuser = await prisma.user.update({
            where: {
                id: parseInt(params.id)
            },
            data: {
                id: body.id,
                username: body.username,
                email: body.email,
                password: body.password
            }
        })
        //    if(body.password){
        //     const salt= await bcrypt.genSalt(10)
        //  await bcrypt.hash(body.password,salt)
        // }
        //يعرض كلشي الا باسوود
        const { password, ...other } = newuser
        //

        return new NextResponse(JSON.stringify({ ...other }), { status: 200 })

    } catch (error) {
        return new NextResponse(JSON.stringify({ massge: 'server error' }), { status: 500 })

    }
}