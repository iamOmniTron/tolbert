"use client"
import { useState } from "react"




export default function VideoOfTheMonthSection(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }

    return(
        <div>
        <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
           <span className="text-gray-500 font-bold">
            FRONT PAGE SETTINGS / VIDEO SECTION
           </span>
       </div>
       <div className="w-full h-[70vh] bg-white p-4 mt-3 text-gray-500 flex justify-center">
           <form onSubmit={handleSubmit} className="w-[70%] h-full flex flex-col gap-10"> 
                   <div className="h-10">
                       <label htmlFor="title" className="text-sm font-bold">Title</label>
                       <input value={title} onChange={(e)=>setTitle(e.target.value)}  id="title" name="title" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter title"/>
                   </div>
                   <div className="h-30">
                       <label htmlFor="description" className="text-sm font-bold">Description</label>
                       <textarea value={description} onChange={(e)=>setDescription(e.target.value)} id="description" name="content" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter description"/>
                   </div>
                   <div className="h-30">
                       <label htmlFor="link" className="text-sm font-bold">Video Embed Link</label>
                       <textarea id="link" name="link" className="px-3 outline-blue-500 rounded-md border accent-blue-500 size-full" type="text" placeholder="paste video's youtube embed link here"/>
                   </div>
                   <div className="flex justify-end">
                       <button type="submit" className="bg-blue-400 text-white font-bold rounded-md hover:bg-blue-300 py-3 px-4">Submit</button>
                   </div>
           </form>
       </div>
   </div>
    )
}



