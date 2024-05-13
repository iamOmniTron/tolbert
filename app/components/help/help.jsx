"use client"
import ScrollReveal from "scrollreveal";
import Image from "next/image";
import { FaCalendar, FaCalendarAlt, FaHandHoldingMedical, FaHospitalSymbol, FaPills, FaStethoscope } from "react-icons/fa";
import { useEffect } from "react";





export default function HelpSection(){

    useEffect(()=>{
        const sr = ScrollReveal();
        sr.reveal(".help",{
            origin:"left"
        })

        sr.reveal(".box",{
            interval:100
        })
    },[])


    return(
        <div className="min-h-[60vh] gap-[5em] w-full flex flex-col md:flex-row justify-between px-10 my-[4em]">
            <div className="md:w-[55%] help cursor-pointer hover:scale-105 transition-transform duration-500 flex flex-col justify-center h-full pl-10">
                <span className="text-2xl w-full font-bold  text-red-500 py-3 border-b-2 border-red-500">
                We are always here to help you and your family
                </span>
                <span className="mt-2 text-xl font-thin text-gray-500 italic">
                    Tolbert specialists hospital is open 24 hours. Staff taking care of patients withing the main service area are available round the clock.
                </span>
            </div>
            <div className=" w-full flex justify-center gap-4">
                <div className="space-y-4">
                    <div className="boxsize-44 md:size-60 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-200 flex flex-col gap-3 justify-center items-center">
                        <FaCalendarAlt className="text-red-500 font-bold text-4xl"/>
                        <span className="text-red-500 text-lg font-bold">
                            Monday - Sunday
                        </span>
                        <span className="text-lg font-light">
                            24 Hours
                        </span>
                    </div>
                    <div className="box size-44 md:size-60 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-200 flex flex-col gap-3 justify-center items-center">
                       <FaStethoscope className="text-blue-500 font-bold text-4xl"/>
                       <span className="text-blue-500 text-lg font-bold">
                        Emergency
                       </span>
                       <span className="text-lg font-light">
                        24 Hours
                       </span>
                    </div>
                </div>
                <div className="space-y-4 pt-10">
                    <div className="boxsize-44 md:size-60 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-200 flex flex-col gap-3 justify-center items-center">
                    <Image src={"/caduceus.png"} height={40} width={40} className="text-red-500"/>
                        <span className="text-center text-blue-500 text-lg font-bold px-1">
                            NHIS and HMOs accredited
                        </span>
                    </div>
                    <div className="boxsize-44 md:size-60 bg-white shadow-2xl rounded-lg hover:scale-105 transition-transform duration-200 flex flex-col gap-3 justify-center items-center">
                    <FaPills className="text-red-500 font-bold text-4xl"/>
                        <span className="text-red-500 text-lg font-bold text-center">
                            Enriched Pharmacy and laboratory
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}