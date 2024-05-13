import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";




export default function CardItem({item}){


    return(
        <div className="size-full rounded-md bg-blue-400 text-white p-4 flex flex-col hover:scale-105 cursor-pointer transition-transform duration-300">
            <div className="flex justify-end text-xl">
                {item.icon}
            </div>
            <div className="flex-1 flex justify-between items-end">
                <div>
                    <span className="font-bold text-xl">{item.title}</span>
                </div>
                <Link href={item.path} className="text-white">
                    <FaArrowRight/>
                </Link>
            </div>
        </div>
    )
}