import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";




export default function ServiceHero(){

    return(
        <div className="w-full h-[50vh] relative">
            <div className="absolute w-full h-full opacity-70 -z-50">
                <Image src={"/DSC_0004.JPG"} fill className="contain"/>
            </div>
            <div className="h-full w-full flex justify-center items-center flex-col backdrop-blur-sm">
                <h1 className="text-gray-600 text-5xl font-bold">Medical Services</h1>
                <div className="flex gap-3 text-white text-xl mt-2">
                    <div className="flex items-center">
                        Home <FaChevronRight/>
                    </div>
                    <div>
                        Services
                    </div>
                </div>
            </div>
        </div>
    )
}