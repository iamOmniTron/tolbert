"use client";
import Image from "next/image";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";



export default function WelcomeSection(){

    useEffect(()=>{
        const sr = ScrollReveal({
            duration:3000,
            distance:"60px",
            delay:600
        })

        sr.reveal(".img",{
            origin:"left"
        });
        sr.reveal(".heading",{
            origin:"top"
        });

        sr.reveal(".text",{
            origin:"right",
        })
        sr.reveal(".btn",{
            origin:"bottom",
        })
    },[]);

    return(
        <div className="h-fit w-full overflow-hidden px-10 flex gap-10 py-4 my-10">
            <div className="w-[40%] hidden md:block">
                <div className="h-full w-full mx-auto rounded-ss-lg rounded-ee-lg shadow-lg img">
                    <Image src={"/DSC_0004.JPG"} height={300} width={300} className="cover h-full w-full rounded-ss-lg rounded-ee-lg hover:opacity-50 transition-all hover:scale-105"/>
                </div>
            </div>
            <div className="w-full flex-1">
                <div className="flex flex-col ">
                    <span className="font-bold text-md text-gray-500 heading">
                        Welcome to
                    </span>
                    <span className="mt-5 text-3xl font-semibold text-blue-500 text">
                        Tolbert Specialists Hospital
                    </span>
                    <span className="mt-2 text-wrap font-normal text-gray-500 text">
                    Tolbert Specialist Hospital is an Ultra-modern Hospital that operates 24 Hours daily. At tolbert, we provide excellent health care services to both in an out patients. Our Hospital has a wide range of services and functional units, These include diagnostic treatment functions such as Clinical Laboratory, Scanning Emergency Rooms, a well equipped operating Theathre and other hospitality functions such as housekeeping, and the fundamental in-patient care or bed related function of a hospital.
                    </span>
                    <div className="my-2 btn">
                        <button className="py-2 px-4 rounded-md  bg-blue-500 font-bold text-white hover:bg-blue-400 hover:scale-105 transition-all">
                            Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}