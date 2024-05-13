import Link from "next/link";
import { FaPlus } from "react-icons/fa";



export default function NewSubServiceButton({service}){

    return(
        <Link href={`/admin/frontend/services/subservices/${service?.id}/new`} className="p-3 bg-blue-400 hover:bg-blue-400 rounded-md text-white font-bold flex gap-2 items-center">
            <FaPlus/>
            Add New
        </Link>
    )
}