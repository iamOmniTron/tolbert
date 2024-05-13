"use client";
import { usePathname } from "next/navigation";
import SubServicesTable from "./components/subservicesTable";
import {useState,useEffect} from "react";
import { toast } from "react-toastify";
import { getServiceById } from "@/app/lib/queries";
import NewSubServiceButton from "./components/newSubServiceButton";




export default function SubServicesPage(){
    const [service,setService] = useState(null);
    const path = usePathname();
    const serviceId = +path.split("/").pop();

    const getService = async ()=>{
        try {
            const res = await getServiceById(serviceId);
            setService(res);
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        getService()
    },[])


    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                FRONTEND / OUR SERVICES / <span className="capitalize">{service?.name}</span> SERVICES
                </span>
            </div>
            <div className="w-full flex justify-end my-3">
                <NewSubServiceButton service={service}/>
            </div>
            <div className="my-3">
                <SubServicesTable service={service}/>
            </div>
        </div>
    )
}