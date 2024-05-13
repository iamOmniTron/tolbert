import Link from "next/link";
import { FaPlus } from "react-icons/fa";



export default function NewClientButton(){

    return(
        <Link className="rounded-md text-white font-bold h-[3em] bg-blue-500 px-3 hover:bg-blue-600 shadow-md flex items-center gap-2" href={"/admin/frontend/frontpage/clients/new"}>
            <FaPlus/>
            Create New
        </Link>
    )
}