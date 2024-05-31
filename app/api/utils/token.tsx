import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Jwtpaload } from "./dbtype";
export  function virfyToken (request:NextRequest): JwtPayload {
    //verify the token
    //get the token from the cookie
try {
    const cookie = request.cookies.get("JwTCookies")
    const authToken = cookie?.value as string
    if (!authToken)return new NextResponse(JSON.stringify({massge:'null'}));
    const praviteKey =process.env.JWT as string
    const token = jwt.verify(authToken,praviteKey) as JwtPayload
    return token as Jwtpaload;
   
  
} catch (error) {
    
    return new NextResponse(JSON.stringify({massge:'server error'}),{status:500})

    
}
}
