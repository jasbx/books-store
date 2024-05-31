"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Conect = () => {
  const router = useRouter();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [subject,setSub]=useState("")
  const [msg,setMsg]=useState("")
  const FormSubmitHandle = (e: React.FormEvent) => {
    router.replace('/')//user   rOUTER
    e.preventDefault();
    if (name === "") return toast.info("ok")
    if (name.length <5) return toast.error("name is lass than 5 char  ")
    if (email === "") return toast.error("email is requierd")
    if (subject === "") return toast.error("subject is requierd")
    if (msg === "") return toast.error("message is requierd")
      toast.success("youre massege has ben send :)")
  }
  return (
    <>
    <div className="container form mb-20 ">
      <form method="POST" onSubmit={FormSubmitHandle} className="form-style-9 mt-20 p-5">
        <h1>
          <code>Connect</code> with uS
        </h1>
        <ul>
          <li>
            <input
            onChange={(e)=>setName(e.target.value)}
              type="text"
              name="name"
              className="field-style field-split align-left"
              placeholder="Name"
            />
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              className="field-style field-split align-right"
              placeholder="Email"
            />
          </li>
      
          <li>
            <input
            onChange={(e)=>setSub(e.target.value)}
              type="text"
              name="subject"
              className="field-style field-full align-none"
              placeholder="Subject"
            />
          </li>
          <li>
            <textarea
            onChange={(e)=>setMsg(e.target.value)}
              name="msg"
              className="field-style"
              placeholder="Message"
              
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
    </div>
    <div className="m-32"></div>
    </>
  );
};

export default Conect;
