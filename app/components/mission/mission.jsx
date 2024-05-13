"use client";
import ScrollReveal from "scrollreveal";
import Image from "next/image";
import { useEffect } from "react";
import { FaHeartbeat, FaPeopleCarry, FaStar, FaTeamspeak, FaUsers } from "react-icons/fa";





export default function MissionSection(){

    useEffect(()=>{
        const sr = ScrollReveal();

        // sr.reveal(".card",{
        //     // origin:"bottom",
        //     // interval:100
        // })
    },[]);

    return(
        <div className="min-h-[60vh] w-full relative">
            <div className="h-full w-full absolute bottom-0 left-0 -z-10 opacity-25">
                <Image src={"/DSC_0205.JPG"} fill className="conver h-full w-full"/>
            </div>
            <div className=" flex flex-col md:flex-row justify-center gap-4 items-center">
                <div className="card h-[350px] w-[350px] rounded-se-3xl py-4 rounded-bl-3xl bg-white flex flex-col items-center gap-4 px-3 hover:scale-105 transition-transform duration-150 cursor-pointer">
                    <FaHeartbeat className="text-5xl text-red-500 animate-pulse"/>
                    <span className="text-red-500 font-semibold">Mission</span>
                    <span className="text-center text-lg font-thin text-gray-500">
                        The mission of Tolbert Specialists Hospital is to promote, preserve and restore individual and family by providing expert medical and care within an innovative and dignified environment.
                    </span>
                </div>
                <div className="card h-[350px] w-[350px] rounded-se-3xl py-4 rounded-bl-3xl shadow-xl bg-white flex flex-col items-center gap-4 px-3 hover:scale-105 transition-transform duration-150">
                    <FaStar className="text-5xl text-red-500 animate-pulse"/>
                    <span className="text-red-500 font-semibold">Objective</span>
                    <span className="text-center text-lg font-thin text-gray-500">
                        Tolbert Specialists Hospital is an emerging center of excellence in medical and surgical care located in Abuja FCT. Established as a private institution in the traditions of world's best hospitals.
                    </span>
                </div>
                <div className="card h-[350px] w-[350px] rounded-se-3xl py-4 rounded-bl-3xl shadow-xl bg-white flex flex-col items-center gap-4 px-3 hover:scale-105 transition-transform duration-150">
                <FaUsers className="text-5xl text-red-500 animate-pulse"/>
                    <span className="text-red-500 font-semibold">Management & staff</span>
                    <span className="text-center text-lg font-thin text-gray-500">
                        Are commited to acquiring and applying the most current knowledge and technical skills in the treatment of our patients, and we do this with the utmost respect for the dignity and privacy of each individual. 
                    </span>
                </div>
            </div>
        </div>
    )
}