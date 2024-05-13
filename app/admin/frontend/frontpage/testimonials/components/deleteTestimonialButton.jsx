"use client"
import { deleteReview } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";



export default function DeleteTestimonialButton({review}){
    const router = useRouter();

    const handleSubmit = async ()=>{
        try {
            const res = await deleteReview(review.id);
            if(!res) return toast.error("Error: cannot delete review");
            toast.success("Review deleted successfully");
            return router.push("/admin/frontend/frontpage");
        } catch (error) {
            console.log(error)
            toast.error("Error: an error occured");
        }
    }

    return(
        <button onClick={handleSubmit} className="p-4 text-white font-bold bg-red-400 hover:bg-red-300 rounded-md">
            <FaTrash/>
        </button>
    )
}