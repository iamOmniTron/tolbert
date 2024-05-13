"use client"
import ScrollReveal from "scrollreveal";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";




export default function Service({service}){

    useEffect(()=>{
        const sr = ScrollReveal();

        sr.reveal(".service",{
            interval:150,
            distance:"150px"
        })
    },[])

    return(
        <div className=" service min-h-[40vh] drop-shadow-xl relative hover:scale-110 transition-transform duration-300 flex gap-3 justify-center items-center bg-gray-100 ">
            <div className="h-full w-[50%]">
                <Image src={`/${service?.imageUrl}`} height={500} width={300} className="contain h-full"/>
            </div>
            <div className="h-full flex-1 px-2">
                <h3 className="text-lg font-bold">{service?.title}</h3>
                <p className="my-3">{service?.description}</p>
                <Link href={"/services"} className="text-lg font-thin text-gray-500 px-4 py-3 border-b-2 border-gray-300 hover:bg-gray-300 transition-colors ease-in">
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}