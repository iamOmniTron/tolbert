import Image from "next/image"
import SidebarNav from "./sidebar"
import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"



export default function Container({children}){
    return(
        <>
            <div className="h-screen w-screen flex overflow-hidden">
                <div className="h-full w-[300px]">
                    <div className="flex flex-col items-center bg-white mt-5">
                        <Link className="my-3" href={"/"}>
                            <Image src={"/logo.png"} alt="site-logo" height={150} width={150} />
                        </Link>
                    <div className="h-[2px] w-[80%] bg-gray-300"/>
                        <SidebarNav/>
                    </div>
                </div>
                <div className="min-h-full w-full bg-gray-200 overflow-y-scroll">
                    <div className="w-full bg-white h-[12vh] sticky top-0 overflow-hidded z-20 px-[20px]">
                        <div className="h-full flex items-center justify-end gap-3 text-gray-500">
                                <span className="font-bold hover:shadow-lg cursor-pointer">
                                    System Administrator
                                </span>
                                <FaUserCircle className="text-2xl cursor-pointer"/>
                        </div>
                    </div>
                    <div className="px-5 mb-5 min-h-full">
                        {children}
                    </div>
                <div className="w-full h-[10vh] flex justify-center bg-white items-center bottom-0">
                    <span className="text-blue-500 text-center font-bold">Copyright Tolbert 2024 {new Date().getFullYear() == "2024"?"":`- ${new Date().getFullYear()}`}</span>
                </div>
                </div>
            </div>
        </>
    )
}