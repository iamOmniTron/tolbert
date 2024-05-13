"use client"
import Stars from "@/app/components/rating/ratings";
import { createReview } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";



export default function RatingsContent(){
    const [rating,setRating] = useState(0);
    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const formData = new FormData(e.target);
            formData.append("rating",rating);
            const review = await createReview(formData);
            if(!review) return toast.error("Error: cannot create review");
            toast.success("Thank you, Your review was noted successfully!")
            return router.push("/");
        } catch (error) {
            toast.error("Error: somethig went wrong");
        }
    }

    return(
        <div className="my-5 px-10">
            <div className="text-center">
                <span className="text-lg text-red-500 font-bold py-4 border-b-2 border-red-500 px-3">
                    Leave us a Review
                </span>
            </div>
            <form onSubmit={handleSubmit} className="my-10 min-h-[40vh] flex gap-4 flex-col">
            <div className="flex">
                    <input name="name" className="outline-gray-500 size-full p-5" placeholder="Your Name"/>
                </div>
                <div className="flex gap-4">
                    <span className="italic text-gray-500 text-lg w-[40%]">How many Stars will you rate us?</span>
                    <Stars rating={rating} setRating={setRating}/>
                </div>
                <div className="flex-1">
                    <textarea name="review" className="outline-gray-500 size-full p-5" placeholder="Your review"/>
                </div>
                <div>
                    <button type="submit" className=" bg-blue-500 py-4 px-3 text-white font-bold hover:bg-blue-400 w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}