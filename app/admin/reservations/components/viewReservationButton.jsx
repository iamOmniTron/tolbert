import Link from "next/link"
import { FaEye } from "react-icons/fa"



export default function ViewReservationButton({reservation}){

    return(
        <Link className="items-center w-fit flex gap-2 bg-blue-500 py-2 px-4 rounded-md font-bold text-white" href={`/admin/reservations/${reservation.id}`}>
            <FaEye/> View
        </Link>
    )
}