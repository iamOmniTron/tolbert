"use client"
import { FaPlus } from "react-icons/fa"
import Link from "next/link"


export default function NewPostButton(){

    return(
        <Link className="rounded-md text-white font-bold h-[3em] bg-blue-500 px-3 hover:bg-blue-600 shadow-md flex items-center gap-2" href={"/admin/blog/new"}>
            <FaPlus/>
            Create New
        </Link>
    )
}