import Link from "next/link";
import { FaStethoscope } from "react-icons/fa";




export default function SubServicesButton({service}){

    return(
        <Link href={`/admin/frontend/services/subservices/${service.id}`} className="text-white rounded-md p-3 font-bold bg-gray-400 hover:bg-gray-300">
            <FaStethoscope/>
        </Link>
    )
}