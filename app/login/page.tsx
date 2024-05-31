
import React from 'react'
import LoginInput from './LoginInput'
// import { cookies } from "next/headers";

const page = () => {
    
//     const token = cookies().get("JwTCookies")?.value as string;
//  if(token){
// console.log('navbars')
//  }
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 bg-sky-400'>


            <LoginInput />




        </div>
    )
}

export default page
