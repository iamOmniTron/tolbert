import { trimText } from "@/app/lib/helpers";
import Image from "next/image";
import Link from "next/link";



export default function Card({service}){

    return(
        <div className="h-[50vh]  bg-white shadow-lg rounded-se-lg rounded-bl-lg  hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col gap-2">
            <div className="w-full h-[50%]">
                <Image src={`/${service.imageUrl}`} height={300} width={300} className="cover h-full w-full rounded-se-lg"/>
            </div>
            <div className="px-2 flex-1 flex flex-col gap-2 items-center">
                <span className="text-lg text-red-500 font-bold text-center">{service?.name}</span>
                <span className="text-gray-500 text-center tracking-wide">
                    {trimText(service?.description,60)}
                </span>
                <Link href={`services/${service.id}`} className="py-2 px-4 w-[50%] bg-blue-400 text-white font-bold hover:bg-blue-300 text-center">
                    Learn More
                </Link>
            </div>
        </div>
    )
}