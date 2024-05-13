"use client"
import { deleteReservation } from "@/app/lib/actions"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa"



export default function DeleteReservationButton({reservation}){
    const router = useRouter();

    const handleDelete = async ()=>{
        try {
            const deletedReservation = await deleteReservation(reservation.id);
            if(!deletedReservation) throw new Error("Error: cannot delete reservation");
            return router.push("/admin/reservations");
        } catch (error) {
            throw new Error(error)
        }
        
    }

    return(
        <button onClick={handleDelete} className="bg-red-500 rounded-md flex gap-2 text-white font-bold py-2 px-4">
            <FaTrash/>
                Delete
        </button>
    )
}