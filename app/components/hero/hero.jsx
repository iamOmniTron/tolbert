"use client"
import ScrollReveal from "scrollreveal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import { getHero } from "@/app/lib/queries";
import Carousel from "./components/carousel";


export function HeroSection(){
    const [hero,setHero] = useState(null);

    const getHeroContent = async ()=>{
        try {
            const res = await getHero();
            setHero(res)
        } catch (error) {
            console.log(error);
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        const sr = ScrollReveal({
            duration:3000,
            distance:"60px",
            delay:600
        })
        sr.reveal(".hero",{
            origin:"left"
        })
    },[])

    useEffect(()=>{
        getHeroContent();
    },[])

    return(
            <div className="w-screen h-[60vh] relative">
                <div className="w-full h-full opacity-35 transition-opacity duration-200   absolute">
                    <Carousel images={hero?.imageUrl && JSON.parse(hero?.imageUrl)}/>
                </div>
                <div className="h-full backdrop-blur-sm w-full  px-10 flex items-center justify-center md:justify-start md:pl-[15em] hero">
                    <div className="h-[60%] flex flex-col ">
                        <span className=" font-bold text-red-600 text-lg md:text-5xl hover:scale-110 transition-transform duration-1000" style={{lineHeight:"1.2em"}}>
                            {hero?.title}
                        </span>
                        <span className="mt-2 text-md font-semibold text-gray-700">
                            {hero?.content}
                        </span>
                        <div className="mt-2 flex gap-4">
                            <Link href={"/appointment"} className="py-3 px-4 rounded-md bg-blue-500 font-bold text-white hover:bg-blue-400 hover:scale-105 transition-all flex gap-2 items-center">
                                Book Appointment <FaArrowRight/>
                            </Link>
                            <Link href={"/services"} className="py-3 px-4 rounded-md bg-red-500 font-bold text-white hover:bg-red-400 hover:scale-105 transition-all flex gap-2 items-center">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}


