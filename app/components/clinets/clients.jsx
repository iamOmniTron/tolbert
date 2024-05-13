"use client"
import ScrollReveal from "scrollreveal";
import { FaFacebookMessenger } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getClients } from "@/app/lib/queries";
import Image from "next/image";





export default function Clients(){
    const [clients,setClients] = useState([]);

    useEffect(()=>{
        const sr = ScrollReveal();
        sr.reveal(".client",{
            origin:"bottom",
            interval:100
        })
    },[]);


    const getAllClients = async ()=>{
        try {
            const res = await getClients();
            setClients(res);
        } catch (error) {
            toast.error("Error: an error occured");
        }
    }

    useEffect(()=>{
        getAllClients();
    },[])

    return(
        <div className="h-fil w-full px-[10em] my-10 flex flex-col gap-10 items-center">
            <div className="md:w-[40%] w-full border-b-4 border-b-blue-500 text-center py-3">
                <span className="w-full text-blue-500 text-3xl font-thin text-center">
                    Our Clients
                </span>
            </div>
            <div className="px-10 flex gap-3 flex-col md:flex-row ">
                {
                    clients.map((client,idx)=>(
                        <div key={idx} className="client h-[200px] w-[200px] border border-gray-200 flex justify-center items-center bg-gray-300 shadow-lg">
                            <Image src={`/${client.logo}`} height={100} width={100} className="size-full"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}