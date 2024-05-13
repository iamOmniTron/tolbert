"use client"
import { FaCheck, FaTrash } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import {useState,useEffect} from "react";
import { getBlogPostById } from "@/app/lib/queries";
import { deleteBlogPost, updateBlogPost } from "@/app/lib/actions";
import { toast } from "react-toastify";



export default function EditBlogForm(){
    const [blog,setBlog] = useState(null);
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [author,setAuthor] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const router = useRouter();
     
    const paths = usePathname().split("/");
    const blogId = +paths.splice(-2,1).toString();

    const handleDelete = async ()=>{
        try {
            await deleteBlogPost(blog?.id);
            return router.push("/admin/blog")
        } catch (error) {
            throw new Error(error);
        }
    }


    const handleUpdate = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const file = formData.get("file");
            if(typeof file == "string") formData.delete("file");
            const isUpdated = await updateBlogPost(blog.id,formData);
            if(!isUpdated) return toast.error('Error: cannot update post');
            toast.success("post updated successfully")
            return router.push("/admin/blog");
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    const fetchBlogPost = async ()=>{
        try {
            const blog = await getBlogPostById(blogId);
            setBlog(blog);
            setTitle(blog.title);
            setAuthor(blog.author);
            setContent(blog.content);
            setImageUrl(blog.imageUrl);
        } catch (error) {
            throw new Error(error);
        }
    }

    useEffect(()=>{
        fetchBlogPost();
    },[blogId])

    return(
        <div>
             <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                    EDIT BLOG POST
                </span>
            </div>
            <div className="min-h-[70vh] bg-white w-full mt-3">
                <div className="mx-5 flex justify-start pl-[4em] py-4">
                    <form onSubmit={handleUpdate}>
                        <div className="flex h-[40px] gap-4 w-full my-2">
                            <label className="font-bold text-md w-[150px]">
                               Blog Title
                            </label>
                            <textarea value={title} onChange={(e)=>setTitle(e.target.value)} name="title" placeholder="enter blog title" className="outline-blue-500 px-3 accent-blue-500 w-[700px] border rounded-md"/>
                        </div>
                        <div className="flex h-[40px] gap-4 w-full my-2 min-h-[200px]">
                            <label className="font-bold text-md w-[150px]">
                                Blog Content
                            </label>
                            <textarea value={content} onChange={(e)=>setContent(e.target.value)} name="content" placeholder="enter blog content" className="outline-blue-500 px-3 w-[700px] border rounded-md"/>
                        </div>
                        <div className="flex h-[40px] gap-4 w-full my-2">
                            <label className="font-bold text-md w-[150px]">
                               Author
                            </label>
                            <textarea value={author} onChange={(e)=>setAuthor(e.target.value)} name="author" placeholder="enter blog author's name" className="px-3 accent-blue-500 w-[700px] outline-blue-500 border-2 rounded-md"/>
                        </div>
                        <div className="flex h-[40px] gap-4 w-full my-2">
                            <label className="font-bold text-md w-[150px]">
                                Lead Image
                            </label>
                            <input onChange={(e)=>setImageUrl(e.target.value)} name="file" placeholder="upload image" type="file" className="text-sm"/>
                        </div>
                        <div className="w-full flex justify-end gap-3">
                            <button type="submit" className="bg-blue-500 text-white flex items-center gap-2 font-bold border rounded-md px-3 py-2">
                                Publish Changes <FaCheck/>
                            </button>
                            <button onClick={handleDelete} className="bg-red-500 text-white flex items-center gap-2 font-bold border rounded-md px-3 py-2">
                                Delete <FaTrash/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}