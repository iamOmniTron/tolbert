import Image from "next/image"
import { trimText } from "@/app/lib/helpers"
import {RxLapTimer} from "react-icons/rx"
import Link from "next/link"
import { getBlogPosts } from "@/app/lib/queries"
import { FaArrowRight } from "react-icons/fa";
import NoDataComponent from "@/app/components/noData/noData";



export default async function MostRecentBlogPost(){
    const posts = await getBlogPosts();
    const mostRecentPost = posts[0];
    return mostRecentPost?
    <div className="bg-white max-h-[44vh] w-full flex flex-col rounded-md">
            <div className="h-[20vh] w-full">
                <Image src={`/${mostRecentPost?.imageUrl}`} height={400} width={400} className="contain rounded-t-md w-full h-full"/>
            </div>
            <div className="flex-1 p-2">
            <span className="font-bold text-gray-500">{mostRecentPost.title}</span>
            <div className="my-2 text-gray-500">
                {
                    trimText(mostRecentPost.content,100)
                }
            </div>
            <div className="border-t-2 flex justify-between">
                <span className="flex items-center text-sm text-gray-500"><RxLapTimer/> Last updated: {mostRecentPost.updatedAt.toDateString()}
                </span>
                <Link href={"/admin/blog"} className="text-blue-500 hover:bg-gray-300 px-3 flex gap-2 items-center">
                    Visit <FaArrowRight/>
                </Link>
            </div>
            </div>
        </div>:
        <div className={"bg-white w-full py-10 flex items-center justify-center rounded-md"}>
            <NoDataComponent/>
        </div>
}