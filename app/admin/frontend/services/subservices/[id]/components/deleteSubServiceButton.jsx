"use client";
import { deleteSubService } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";



export default function DeleteSubServiceButton({subService}){

    const router = useRouter()
    const handleDeleteSubService = async ()=>{
        try {
            const service = await deleteSubService(subService.id);
            if(!service) return toast.error("Cannot delete service");
            toast.success("Service deleted successfully");
            return router.push("/admin/frontend/frontpage")
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    return(
        <button onClick={handleDeleteSubService} className="p-3 text-white font-bold bg-red-400 hover:bg-red-300 rounded-md">
            <FaTrash/>
        </button>
    )
}