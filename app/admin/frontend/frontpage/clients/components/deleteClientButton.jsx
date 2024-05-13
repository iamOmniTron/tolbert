"use client"
import { deleteClient } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";



export default function DeleteClientButton({client}){

    const router = useRouter();

    const handleSubmit = async ()=>{
        try {
            const res = await deleteClient(client.id);
            if(!res) return toast.error("Error: cannot delete client");
            toast.success("Client deleted successfully");
            return router.push("/admin/frontend/frontpage")
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    return(
        <button onClick={handleSubmit} className="p-3 bg-red-400 rounded-md text-white font-bold hover:bg-red-300">
            <FaTrash/>
        </button>
    )
}