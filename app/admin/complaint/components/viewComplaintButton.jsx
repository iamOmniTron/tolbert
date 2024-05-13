import Link from "next/link"
import { FaEye } from "react-icons/fa"


export default function ViewComplaintButton({complaint}){

    return(
        <Link className="items-center flex gap-2 bg-blue-500 py-2 px-4 rounded-md font-bold text-white" href={`/admin/complaint/${complaint.id}`}>
            <FaEye/> View
        </Link>
    )
}