"use client"

import { createClient } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"


export default function NewClientsPage(){
    const router = useRouter();


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const client = await createClient(formData);
            if(!client) return toast.error("Error: cannot add client")
            toast.success("Client added successfully");
            return router.push("/admin/frontend/frontpage");
        } catch (error) {
            toast.error("Error: an error occured");
        }

    }

    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                    ADD NEW CLIENT
                </span>
            </div>
            <div className="w-full h-[70vh] bg-white p-4 mt-3 text-gray-500 flex justify-center">
                <form onSubmit={handleSubmit} className="w-[70%] h-full flex flex-col gap-10"> 
                        <div className="h-10">
                            <label htmlFor="name" className="text-sm font-bold">Client Name</label>
                            <input id="name" name="name" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter title"/>
                        </div>
                        <div className="h-10">
                            <label htmlFor="file" className="text-sm font-bold">Logo</label>
                            <input id="file" name="logo" className="px-3 accent-blue-500 size-full" type="file"/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-400 text-white font-bold rounded-md hover:bg-blue-300 py-3 px-4">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}