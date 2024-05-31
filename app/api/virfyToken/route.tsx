import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Jwtpaload } from "../utils/dbtype";
export  function virfyToken (token:string): JwtPayload|null {
    //verify the token
    //get the token from the cookie
try {
    const praviteKey =process.env.JWT as string
    const tokens = jwt.verify(token,praviteKey) as JwtPayload
    if(!tokens || tokens===null) return null
    return tokens as Jwtpaload;
   
  
} catch (error) {
    
    return new NextResponse(JSON.stringify({massge:'server error'}),{status:500})

    
}
}
