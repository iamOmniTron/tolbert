import { FaClinicMedical, FaCog } from "react-icons/fa";
import Card from "./components/card";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

const ITEMS = [
    {
        id:1,
        label:"Frontpage Setting",
        icon:<FaCog className="text-2xl hover:rotate-180 hover:scale-125 transition-all"/>,
        bg:"bg-orange-500",
        path:"/admin/frontend/frontpage"
    },
    {
        id:2,
        label:"Our Services",
        icon:<FaClinicMedical className="text-2xl hover:scale-125 transition-all"/>,
        bg:"bg-blue-500",
        path:"/admin/frontend/services"
    }
]



export default function Frontend(){

    return(
        <div className="w-full">
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 FRONTEND SETTINGS
                </span>
            </div>
            <div className="my-3 flex h-[20vh] gap-3">
                {
                    ITEMS.map((item)=>(
                        <Card item={item}/>
                    ))
                }
            </div>
            <div className="mt-3 w-[15%] py-5">
                <Link href={"/"} className="bg-red-500 rounded-md text-white font-bold p-2 flex items-center justify-between">
                    Visit Site Live
                    <RxArrowRight className="text-xl hover:scale-125 transition-all"/>
                </Link>
            </div>
        </div>
    )
}