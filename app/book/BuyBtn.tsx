"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BuyBtn = () => {
    const [buy, setBuy] = useState(0)
    const HandleBtn = () => {
        toast.success("Success Buying !")
        setBuy(buy + 1)
    }
    return (
        <div className="d-grid gap-2">
            <button
                className='btn btn-outline-dark w-full'
                onClick={HandleBtn}>

                Buy

            </button>
            <p>{buy}</p>
        </div>
    )
}

export default BuyBtn
