"use client"
import ScrollReveal from "scrollreveal";
import { trimText } from "@/app/lib/helpers";
import Image from "next/image";
import { useEffect } from "react";
import { FaArrowRight, FaClock } from "react-icons/fa";
import Link from "next/link";



export default function Blog({blog}){

    useEffect(()=>{
        const sr = ScrollReveal();
        sr.reveal(".blog",{
            interval:100
        })
    },[])
    return(
        <div className="blog h-full w-full border shadow-xl rounded-lg flex flex-col hover:scale-110 transition-transform duration-500 cursor-pointer">
            <div className="w-full h-[200px] rounded-t-lg  hover:opacity-45  duration-300 transition-opacity">
                <Image src={`/${blog?.imageUrl}`} height={200} width={200}  className="cover h-[100%] w-[100%]  rounded-t-lg"/>
            </div>
            <div className="px-3">
                <span className="font-bold text-md text-gray-500">{blog.title}</span>
                <p className="my-2 text-sm font-mono font-semibold text-gray-700">
                    {trimText(blog.content,50)}
                </p>
                <div className="flex justify-between items-center">
                <span className="my-2 text-gray-500 flex items-center gap-2 text-sm font-bold">
                    <FaClock/>
                    {blog?.createdAt.toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"})}
                </span>
                <Link href={`/blog/${blog.id}`}>
                    <FaArrowRight className="text-blue-400"/>
                </Link>
                </div>
            </div>
        </div>
    )
}