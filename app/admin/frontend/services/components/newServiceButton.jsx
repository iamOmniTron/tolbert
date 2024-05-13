import Link from "next/link";
import { FaPlus } from "react-icons/fa";





export default function NewServiceButton(){

    return(
        <Link href={"/admin/frontend/services/new"} className="py-3 px-2 rounded-md bg-blue-400 hover:bg-blue-300 text-white font-bold flex gap-3 items-center">
            <FaPlus/>
            Add New
        </Link>
    )
}