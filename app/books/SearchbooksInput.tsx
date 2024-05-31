"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchbooksInput = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();
    const HandleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/booksearch?search=${search}`);
    }
    return (
        <>
            <div>
                <form onSubmit={HandleSearch}>
                    <div>
                        <div data-mdb-input-init className="form-outline text-center ml-20 mr-20 mb-4">
                            <label className="form-label " >Search for the books address</label>
                            <input
                                type="search"
                                id="form2Example1"
                                className="form-control"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {

                            }
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default SearchbooksInput
