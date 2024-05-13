import Link from "next/link"
import Blog from "./blog"
import { getBlogPosts } from "@/app/lib/queries"





export default async function BlogsSection(){

    const blogs = await getBlogPosts();


    return(
        <div className="w-full h-fit items-center px-10 flex flex-col">
            <div className="my-5 w-[40%] flex justify-center border-b-4 border-blue-500">
                <span className="text-blue-500 font-bold text-2xl text-center py-3">
                    Blogs - Latest Feeds
                </span>
            </div>
            <div className="flex flex-col md:flex-row gap-10 flex-1 my-3">
                {
                    blogs.splice(0,3).map((b,idx)=>(
                        <Blog blog={b} key={idx}/>
                    ))
                }
            </div>
            <div className="w-full flex justify-center my-4">
                <Link href={"/blog"} className="py-3 px-4 bg-blue-500 hover:bg-blue-300 transition-all font-bold text-white hover:scale-110">
                    Read More
                </Link>
            </div>
        </div>
    )
}