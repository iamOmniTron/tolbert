import { trimText } from "@/app/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";




export default function SingleBlog({blog}){

    return(
        <div className="h-[70vh] rounded-md flex flex-col gap-3 border-2 shadow-lg">
            <div className="h-[40%] w-full rounded-t-md">
                <Image src={`/${blog.imageUrl}`} height={200} width={200} className="rounded-t-md cover w-full h-full"/>
            </div>
            <div className="px-4">
                <span className="text-md font-semibold text-gray-500">{blog?.title}</span>
                <span className="my-3 flex gap-1 items-center text-gray-500">
                    <FaCalendarAlt className=""/>
                    <span className="text-sm">{blog?.createdAt.toDateString()}</span>
                </span>
                <div className="mb-5 text-gray-700">
                    {trimText(blog?.content,200)}
                </div>
                <Link href={`/blog/${blog.id}`} className="px-4 text-gray-500 py-3 border-2 border-gray-300 hover:bg-gray-300 transition-colors duration-200 ease-in-out">
                    Read More
                </Link>
            </div>
        </div>
    )
}