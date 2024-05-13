"use client"
import { deleteService, updateService } from "@/app/lib/actions";
import { getServiceById } from "@/app/lib/queries";
import { usePathname, useRouter } from "next/navigation"
import {useState,useEffect} from "react";
import { toast } from "react-toastify";




export default function EditServicePage(){
    const [service,setService] = useState(null);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    const pathname = usePathname();
    const paths = pathname.split("/");
    const serviceId = +paths.splice(-2,1).toString();

    const router = useRouter();

    const getService = async ()=>{
        try {
            const res = await getServiceById(serviceId);
            setService(res);
            setName(res?.name);
            setDescription(res?.description);
            setImageUrl(res?.imageUrl);

        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const file = formData.get("file");
            if(typeof file == "string") formData.delete("file");
            const isUpdated = await updateService(service.id,formData);
            if(!isUpdated) return toast.error('Error: cannot update service');
            toast.success("Service updated successfully")
            return router.push("/admin/frontend/services");
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    const handleDelete = async ()=>{
        try {
            const service = await deleteService(service.id);
            if(!service) return toast.error("Cannot delete service");
            toast.success("Service deleted successfully");
            return router.push("/admin/frontend/services");
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        getService();
    },[])


    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                FRONTEND / OUR SERVICES / EDIT
                </span>
            </div>
            <div className="my-3 bg-white w-full h-[80vh] text-gray-500">
                <div className="w-full flex justify-center py-5">
                    <form className="w-[70%] h-full flex flex-col gap-10" onSubmit={handleSubmit}>
                        <div className="h-10">
                            <label htmlFor="name" className="text-sm font-bold">Name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} id="name" name="name" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter name of service"/>
                        </div>
                        <div className="h-24">
                            <label htmlFor="description" className="text-sm font-bold">Description</label>
                            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} id="description" name="description" className="px-3 accent-blue-500 size-full border outline-blue-500 rounded-md" placeholder="enter descriptive content of service"/>
                        </div>
                        <div className="h-10">
                            <label htmlFor="description" className="text-sm font-bold">Image</label>
                            <input name="file" className="size-full font-bold text-sm" type="file"/>
                        </div>
                        <div className="flex justify-end gap-3">
                            <button type="submit" className="bg-blue-400 text-white font-bold rounded-md hover:bg-blue-300 py-3 px-4">Update</button>
                            <button className="bg-red-400 text-white font-bold rounded-md hover:bg-red-300 py-3 px-4" onClick={handleDelete}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}