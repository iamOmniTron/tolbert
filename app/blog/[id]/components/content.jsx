"use client"
import Image from "next/image";
import { FaChevronRight, FaClock, FaFolder } from "react-icons/fa";
import { BLOGS } from "../../components/blogs";
import {useState,useEffect} from "react";
import { usePathname } from "next/navigation";
import { getBlogPostById } from "@/app/lib/queries";
import { toast } from "react-toastify";


export default function BlogContent(){
    const [blogPost,setBlogPost] = useState(null);

    const blogId = usePathname().split("/").pop();

    const getBlog = async ()=>{
        try {
            const post = await getBlogPostById(+blogId);
            setBlogPost(post);
            console.log(post)
        } catch (error) {
            toast.error("Error: an error occured")
        }
    }

    useEffect(()=>{
        getBlog();
    },[blogId])

    return(
        <div className="flex gap-3 px-10 mt-20">
            <div className="flex-1 pr-10 border-r-2">
                <div className="h-[70vh] w-full">
                    <Image src={`/${blogPost?.imageUrl}`} height={400} width={400} className="h-full w-full"/>
                </div>
                <div className="py-2 my-2 px-3 text-gray-500 font-medium text-3xl">
                    {blogPost?.title}
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 text-gray-500 items-center py-2 border-y-2 my-2 ">
                        <span>
                            <FaFolder/>
                        </span>
                        /
                        <span>
                            Tolbert hospital
                        </span>
                        /
                        <span>
                            News
                        </span>
                        -
                        <span>
                            <FaClock/>
                        </span>
                        <span>
                            {blogPost?.createdAt.toDateString()}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-500 items-center py-2 border-y-2 my-2 ">
                            By {blogPost?.author}
                        </span>
                    </div>
                </div>
            <div className="my-3 text-gray-500 ">
                {blogPost?.content}
            </div>
            <div className="my-3 border-y-2 py-4">
                <span className="flex text-gray-500 gap-2 items-center my-3">
                    <FaChevronRight className=""/>
                    <span className="font-semibold ">
                        YOU MIGHT ALSO LIKE
                    </span>
                </span>
                <div className="grid grid-col-1 md:grid-cols-3 gap-3">
                    {
                        BLOGS.slice(0,5).map((blog,idx)=>(
                            <Post blog={blog} key={idx}/>
                        ))
                    }
                </div>
            </div>
            </div>
            <div className="w-[30%] h-[40vh] text-gray-500 flex justify-center border-y-4 py-20">
                <div className="w-[30%] text-wrap text-center flex flex-col gap-5 h-fit">
                <span className="text-xl italic">ROUTINE CONSULTATION</span> - <span className="font-thin">24 HOURS</span>
                </div>
            </div>
        </div>
    )
}


function Post({blog}){

    return(
        <div className="h-[40vh] w-full flex flex-col hover:shadow-lg transition-all hover:scale-105">
            <Image src={"/DSC_0223.jpg"} height={200} width={200} className="h-[80%] w-full"/>
            <div className=" text-gray-500 px-2 flex flex-col items-center">
                <span className="text-lg font-semibold text-center">{blog.title}</span>
                <span className="flex gap-2 items-center text-sm"><FaClock/> {blog.date}</span>
            </div>
        </div>
    )
}