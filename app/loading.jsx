"use client"
import Image from "next/image";

export default function LoadingPage(){


    return(
        <div className="h-[100vh] w-full flex justify-center items-center flex-col gap-4 bg-white">
                <Image src={"/caduceus.png"} height={200} width={200} className="animate-pulse h-20 w-20"/>
                <span className="text-2xl font-semibold text-red-500">Tolbert Specialist Hospital</span>
        </div>
    )
}