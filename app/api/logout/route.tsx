import { NextRequest } from "next/server";
import { cookies } from "next/headers";
export async function GET(request:NextRequest){
try {
    cookies().delete("JwTCookies");
    return new Response(JSON.stringify({massge:'logout success !'}),
        {
            status:200
        })
} catch (error) {
    
    return new Response(JSON.stringify({massge:'some thing wrong with server  !'}),
        {
            status:500
        })
}
}