import Link from "next/link";
import { FaEdit } from "react-icons/fa";



export default function EditServiceButton({service}){

    return(
        <Link href={`/admin/frontend/services/${service.id}/edit`} className="px-3 py-2 bg-blue-400 rounded-md hover:bg-blue-300 text-white font-bold">
            <FaEdit/>
        </Link>
    )
}