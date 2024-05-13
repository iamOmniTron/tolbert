 "use client";

import { createSubService } from "@/app/lib/actions";
import { getServiceById } from "@/app/lib/queries";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";






export default function NewSubService(){
    const [service,setService] = useState();
    const router = useRouter()

    const path = usePathname();
    const serviceId = +path.split("/").splice(-2,1);

    const getService = async ()=>{
        try {
            const res = await getServiceById(serviceId);
            setService(res);
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            formData.append("serviceId",+serviceId);
            const subService = await createSubService(formData);
            if(!subService) return toast.error("Error: cannot create service");
            toast.success("Service created successfully");
            return router.push("/admin/frontend/services");
        } catch (error) {
            toast.error("Error: something went wrong");
        }
    }



    useEffect(()=>{
        getService()
    },[serviceId])


    return(
        <div>
             <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                FRONTEND / OUR SERVICES / <span className="capitalize">{service?.name}</span>/ SERVICE / NEW
                </span>
            </div>
            <div className="my-3 bg-white w-full h-[80vh] text-gray-500">
                <div className="w-full flex justify-center py-5">
                    <form className="w-[70%] h-full flex flex-col gap-10" onSubmit={handleSubmit}>
                        <div className="h-10">
                            <label htmlFor="name" className="text-sm font-bold">Name</label>
                            <input id="name" name="name" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter name of service"/>
                        </div>
                        <div className="h-24">
                            <label htmlFor="description" className="text-sm font-bold">Description</label>
                            <textarea id="description" name="description" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter descriptive content of service"/>
                        </div>
                        <div className="h-10">
                            <label htmlFor="description" className="text-sm font-bold">Hot-Line</label>
                            <input name="phone" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter department hot-line" type="tel"/>
                        </div>
                        <div className="h-10">
                            <label htmlFor="description" className="text-sm font-bold">Image</label>
                            <input name="file" className="size-full font-bold text-sm" type="file"/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-400 text-white font-bold rounded-md hover:bg-blue-300 py-3 px-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}