'use client'

import { useState } from "react"

export default function Admin(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function submit(){
        return 1
    }
    return(
        <>
       <div></div>
        <div className="border-2 rounded-lg w-7/12 m-auto">
        <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">LOGIN</h1>
            <form onSubmit={submit()} method="POST">
                 <div className="my-2 grid grid-cols-1">
                <h1 className="text-center text-lg font-bold">Email</h1>
                 <input className="mx-auto" type="text" onChange={""}/>
                 </div>
                 <br/>
                 <div className="my-2 grid grid-cols-1"> 
                 <h1 className="text-center text-lg font-bold" >Password</h1>
                 <input type="password" className="mx-auto" onChange={""}/>
                 </div>
                 <div className="my-1 grid grid-cols-1">
                 <button className="mx-auto my-10 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> submit</button>
                 </div>
                
            </form>
        </div>
        </>
    )
}