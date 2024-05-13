"use client"
import { deleteBlogPost } from "@/app/lib/actions"
import { useRouter } from "next/navigation"
import { FaTrash } from "react-icons/fa"

export default async function DeletePostButton({item}){


    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const deletedPost = await deleteBlogPost(item.id);
            if(!deletedPost) throw new Error("Cannot delete post");

            return router.push("/admin/blog")
        } catch (error) {
            throw new Error(error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="submit" className="flex bg-red-500 rounded-md text-white font-bold p-2 hover:bg-red-600 shadow-md">
                <FaTrash/>
                Delete
            </button>
        </form>
    )
}