"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SERVICES } from "../../components/content";
import ServicesListSection from "../../components/serviceList";
import Link from "next/link";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import {useState,useEffect} from "react";
import { toast } from "react-toastify";
import { getServiceById } from "@/app/lib/queries";




export default function MainSection(){
    const [service,setService] = useState(null);

    const path = usePathname();
    const serviceId = +path.split("/").pop();

    const getService = async ()=>{
        try {
            const res = await getServiceById(serviceId)
            setService(res);
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        getService();
    },[])

    return(
        <div className="my-10 px-[100px] w-full">
            <div className=" flex flex-col md:flex-row gap-3 min-h-[20vh] w-full">
                <div className="md:w-[40%] flex flex-col gap-4">
                    <span className="text-2xl text-red-500 font-bold">WELCOME TO</span>
                    <span className="text-lg font-bold text-gray-500">{service?.name}</span>
                    <p className="text-lg text-gray-500">
                    {service?.description}
                    </p>
                    {
                        service?.phone &&
                        <div className="my-3 text-blue-400 flex gap-3 items-center">
                            <FaPhoneAlt/>
                            09011011029
                        </div>
                    }
                    <div>
                        <Link href={"/appointment"} className="bg-blue-400 px-3 py-4 text-white font-bold hover:scale-105 hover:bg-blue-300 transition-all">
                            Request Appointment
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <Image src={`/${service?.imageUrl}`} height={400} width={400} className="h-full w-full md:rounded-tl-[50px] md:rounded-br-[50px]"/>
                </div>
            </div>
            <div className="my-4">
                <div className="text-center my-5">
                    <span className="text-xl text-red-500 font-bold py-2 border-b-2 border-red-500">SERVICES</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                </div>
            </div>
            {
                service?.subServices?
                <ServicesListSection/>:
                null
            }
            <div className="text-center my-5">
                <Link href={"/appointment"} className="space-x-5 py-4 px-5 bg-blue-500 rounded-md text-white hover:scale-105 hover:bg-blue-300 transition-all flex items-center">Request an Appointment
                    <FaArrowRight className="inline-block"/>
                </Link>
            </div>
        </div>
    )
}


function ServiceCard({service}){


    return(
        <div className="bg-white h-[30vh] w-[20vw] shadow-md rounded-md flex flex-col items-center justify-center text-gray-500">
            <span className="text-4xl">{service?.icon}</span>
            <span className="text-xl">{service?.name}</span>
        </div>
    )
}