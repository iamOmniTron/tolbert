"use client"
import { updateReviewVisibility } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



export default function ToggleTestimonialVisbilityButton({testimonial}){
    const router = useRouter();

    const handleSubmit = async ()=>{
        try {
            const res = await updateReviewVisibility(testimonial);
            if(!res) return toast.error("Error: cannot update review");
            toast.success("Review updated successfully");
            router.push("/admin/frontend/frontpage")
        } catch (error) {
            console.log(error);
            toast.error("Error: an error occured");
        }
    }

    return(
        <button onClick={handleSubmit} className="text-white font-bold py-3 px-4 rounded-md bg-blue-400 hover:bg-blue-300">
            {testimonial?.isPublic ? "Public":"Not Public"}
        </button>
    )
}