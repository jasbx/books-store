"use client"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const Logout = () => {
    const LogoutBtn=async()=>{
        
        try {
            await axios.get("http://localhost:3006/api/logout")
            window.location.href="/login"
            toast.success("logout success")
        } catch (error:any) {
            toast.error(error.message)
        }
    }
  return (
    <div>
      <ul className="nav-item  rounded-t-xl">
          <button onClick={LogoutBtn} className="btn btn-outline-dark m-2">logout</button>
          </ul>
    </div>
  )
}

export default Logout
