import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";



export default function Card({item}){

    return(
        <div className={`h-full w-full rounded-md p-3 ${item.bg} hover:shadow-lg`}>
            <div className="flex justify-between items-center text-white">
                <h1 className="text-xl font-bold">{item.label}</h1>
                <div>
                    {item.icon}
                </div>
            </div>
            <div className="mt-[50px] flex justify-end">
                <Link href={item.path} className="text-white px-4">
                    <RxArrowRight className="font-bold text-2xl hover:scale-125 transition-all"/>
                </Link>
            </div>
        </div>
    )
}