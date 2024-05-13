"use client";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

export default function EditPostButton({item}){

    
    return(
        <Link className="flex bg-blue-500 rounded-md text-white font-bold p-2 hover:bg-blue-600 shadow-md" href={`/admin/blog/${item.id}/edit`}>
            <FaRegEdit/>
            Edit
        </Link>
    )
}