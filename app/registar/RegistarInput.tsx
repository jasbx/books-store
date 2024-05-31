"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
const LoginInput = () => {
    const router = useRouter();
    const [username, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loadin, setLoad] = useState(false)


    const FormSubmitHandle = async (e: React.FormEvent) => {

        e.preventDefault()
        try {
            await fetch("http://localhost:3006/api/registar", {
                method: 'POST',
                body: JSON.stringify({
                    username:username,
                    email:email,
                    password:password
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            toast.success("success login")
            setLoad(true)
        } catch (error: any) {
            toast.error(error.response.data.message)
            setLoad(false)
        }
        
        if (email === "") return toast.error("email is requierd")
        if (password === "") return toast.error("password is requierd")
    }
    return (


        <form onSubmit={FormSubmitHandle}>
            
            
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" >Email address</label>
                    <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                

                </div>

<div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" >User name</label>
                    <input
                        type="text"
                        id="form2Example1"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                    />
                

                </div>

     
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" >Password</label>
                    <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                   
                </div>
            </div>


            <button type="submit" disabled={loadin}
                data-mdb-button-init data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4">

                {
                    loadin ? "loading..." : "registar"
                }
            </button>


        </form>

    )
}

export default LoginInput
