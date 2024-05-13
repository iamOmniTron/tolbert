"use client"
import { createBlogPost } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import {useState,useCallback} from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"




export default function NewBlog(){
    const [content,setContent] = useState(null);

    const onChange = useCallback((value)=>{
        setContent(value)
    },[])

    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        formData.append("content",content);
        try {
            const post = await createBlogPost(formData);
            if(!post) throw new Error("Error: Cannot create post");

            return router.push("/admin/blog");
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    return(
        <div>
             <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                    CREATE NEW BLOG POST
                </span>
            </div>
            <div className="min-h-[70vh] bg-white w-full mt-3">
                <div className="mx-5 flex justify-start pl-[4em] py-4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex h-[40px] gap-4 w-full my-2">
                            <label className="font-bold text-md w-[150px]">
                               Blog Title
                            </label>
                            <textarea name="title" placeholder="enter blog title" className="px-3 accent-blue-500 w-full border outline-blue-500 rounded-md"/>
                        </div>
                        <div className="flex gap-4 w-full my-2 min-h-[200px]">
                            <label className="font-bold text-md w-[150px]">
                                Blog Content
                            </label>
                            {/* <textarea  name="content" placeholder="enter blog content" className="px-3 outline-blue-500 w-[700px] border rounded-md"/> */}
                            <SimpleMdeReact value={content} onChange={onChange}  className="w-full text-white"/>

                        </div>
                        <div className="flex h-[40px] gap-4 w-full my-2">
                            <label className="font-bold text-md w-[150px]">
                               Author
                            </label>
                            <textarea name="author" placeholder="enter blog author's name" className="px-3 accent-blue-500 w-full border outline-blue-500 rounded-md"/>
                        </div>
                        <div className="flex h-[40px] gap-4 w-full my-2">
                            <label className="font-bold text-md w-[150px]">
                                Lead Image
                            </label>
                            <input name="file" placeholder="upload image" type="file" className="text-sm w-full"/>
                        </div>
                        
                        <div className="w-full flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white flex items-center gap-2 font-bold border rounded-md px-3 py-2">
                                Publish <FaCheck/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}