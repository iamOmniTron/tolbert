"use client";
import { deleteService } from "@/app/lib/actions";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";



export default function ServiceDeleteButton({service}){

    const handleSubmit = async ()=>{
        try {
            const service = await deleteService(service.id);
            if(!service) return toast.error("Error: cannot delete service");
        } catch (error) {
            toast.error(error);
        }
    }

    return(
        <button onClick={handleSubmit} className="text-white font-bold bg-red-400 hover:bg-red-300 rounded-md p-3">
            <FaTrash/>
        </button>
    )

}