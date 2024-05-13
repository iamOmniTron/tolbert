"use client"

import { updateHero } from "@/app/lib/actions";
import { getHero } from "@/app/lib/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";




export default function HeroSection(){
    const [_,setHero] = useState(null);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")
    const [images,setImages] = useState(null);

    const router = useRouter();


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const payload = {
                ...Object.fromEntries(formData),
            }
            Object.keys(images).forEach((imgKey)=>{
                payload[imgKey] = images[imgKey]
            })
            const newFD = new FormData();
            Object.keys(payload).forEach((p)=>{
                newFD.append(p,payload[p])
            })
            console.log(Object.fromEntries(newFD))
            const isSaved = await updateHero(newFD);
            if(!isSaved) return toast.error("Error: cannot update hero");
            toast.success("Hero content updated successfully");
            return router.push("/admin/frontend/frontpage");
        } catch (error) {
            console.log(error)
            toast.error("Error: an error occured");
        }
    }

    const getHeroContent = async ()=>{
        try {
            const res = await getHero();
            setHero(res);
            setTitle(res?.title);
            setDescription(res?.content);
            setImages(res?.imageUrls);
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        getHeroContent();
    },[])


    return(
        <div>
             <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 FRONT PAGE SETTINGS / HERO SECTION
                </span>
            </div>
            <div className="w-full h-[70vh] bg-white p-4 mt-3 text-gray-500 flex justify-center">
                <form onSubmit={handleSubmit} className="w-[70%] h-full flex flex-col gap-10"> 
                        <div className="h-10">
                            <label htmlFor="title" className="text-sm font-bold">Lead Title</label>
                            <input value={title} onChange={(e)=>setTitle(e.target.value)}  id="title" name="title" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter title"/>
                        </div>
                        <div className="h-30">
                            <label htmlFor="description" className="text-sm font-bold">Hero Description</label>
                            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} id="description" name="content" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter description"/>
                        </div>
                        <div className="h-10">
                            <label htmlFor="file" className="text-sm font-bold">Hero Image</label>
                            <input maxLength={5} multiple onChange={(e)=>setImages(e.target.files)} id="file" className="px-3 accent-blue-500 size-full" type="file"/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-400 text-white font-bold rounded-md hover:bg-blue-300 py-3 px-4">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}