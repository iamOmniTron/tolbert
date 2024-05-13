import { FaArrowLeft } from "react-icons/fa"
import Link from "next/link"


export default function BackButton(){


    return(
        <Link href={"/admin/reservations"} className="bg-blue-500 rounded-md flex gap-2 text-white font-bold py-2 px-4">
            <FaArrowLeft/>
                Back
        </Link>
    )
}