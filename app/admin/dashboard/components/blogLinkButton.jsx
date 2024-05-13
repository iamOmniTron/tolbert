import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"


export default function BlogLink({blog}){

    return(
        <Link href={`/admin/blog/${blog.id}`} className="text-blue-500 hover:bg-gray-300 px-3 flex gap-2 items-center">
            Visit <FaArrowRight/>
        </Link>
    )
}