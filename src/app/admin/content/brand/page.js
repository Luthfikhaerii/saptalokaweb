"use client"
import { useState } from "react";

export default function Brand(){
  const [title,setImage] = useState("");
  
    return(
        <>
     
     <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Brand</h1>

<div className="border-2 rounded-lg w-7/12 m-auto">
        <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">Tambah Brand</h1>
        <form onSubmit={""} method="POST">
            
            <div className="my-2 grid grid-cols-1">
                <h1 className="text-center text-lg font-bold">Logo</h1>
                <input className="mx-auto" type="file" onChange={""} />
            </div>
            <br />

            <div className="my-1 grid grid-cols-1">
                <button className="mx-auto my-10 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> submit</button>
            </div>

        </form>
    </div>

<br/>
<br/>
<br/>
<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center mb-20">
    <a href={`/admin/content/brand/${"asd"}`}>
      <img src="/images/news/recent/cblog.png" className="w-48 h-28 md:w-[400px] md:h-[240px]"/>
    </a>
    <a href={`/admin/content/brand/${"sa"}`}>
      <img src="/images/news/recent/cblog.png" className="w-48 h-28 md:w-[400px] md:h-[240px]"/>
    </a>
    <a href={`/admin/content/brand/${"asds"}`}>
      <img src="/images/news/recent/cblog.png" className="w-48 h-28 md:w-[400px] md:h-[240px]"/>
    </a>
    
</div>
        </>
    )
}