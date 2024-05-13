"use client";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaUserAlt} from "react-icons/fa";
import { toast } from "react-toastify";
import { getReviews } from "@/app/lib/queries";




export default function Testimonials(){
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        const sr = ScrollReveal();
        sr.reveal(".testimonial",{
            interval:100,
            origin:"left"
        })
    },[])

    const getAllTestimonials = async ()=>{
        try {
            const res = await getReviews();
            const publicReviews = res.filter((rev)=> rev.isPublic);
            setReviews(publicReviews);
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        getAllTestimonials();
    },[])


    return(
        <div className="h-fit w-full px-[10em] my-10 flex flex-col gap-10 items-center md:overflow-x-scroll">
            <div className="md:w-[40%] border-b-4 border-b-blue-500 text-center py-3">
                <span className="w-full text-blue-500 text-3xl font-thin text-center">
                    Testimonials
                </span>
            </div>
            <div className="mt-[20px] flex flex-col md:flex-row gap-4">
                {
                    reviews.length > 0 && reviews.map((review)=>(

                    <div className="pr-5 testimonial">
                        <span className="text-sm font-thin text-gray-500 italic">
                            <FaQuoteLeft/>
                            {review?.review}
                        </span>
                        <div className="mt-3 flex gap-3 items-end">
                            <FaUserAlt className="text-gray-500 text-3xl"/>
                            <span className="font-semibold text-gray-500 italic">
                                {review?.name}
                            </span>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}