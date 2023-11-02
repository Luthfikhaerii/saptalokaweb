"use client"
import { useState } from "react";

export default function PortofolioDetail({params}) {
    const {id} = params
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [images,setImage] = useState("");

    return (
        <>

            <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Detail portofolio</h1>

            <div className="border-2 rounded-lg w-7/12 m-auto">
                <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">PORTOFOLIO</h1>
                <form onSubmit={""} method="POST">
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Title</h1>
                        <input name="title" className="mx-auto" type="text" onChange={""} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Description</h1>
                        <input name="description" className="mx-auto" type="text" onChange={""} />
                    </div>
                    <br/>
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Image</h1>
                        <input className="mx-auto" type="file" onChange={""} />
                    </div>
                    <br />

                    <div className="my-1 grid grid-cols-1">
                        <button className="mx-auto mt-5 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> update</button>
                    </div>
                    <div className="my-1 grid grid-cols-1">
                        <button className="mx-auto mb-5 ext-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> delete</button>
                    </div>

                </form>
            </div>
        </>
    )
}