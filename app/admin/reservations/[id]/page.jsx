"use client"
import {useState,useEffect} from "react";
import { usePathname } from "next/navigation";
import { getReservationById } from "@/app/lib/queries";
import DeleteReservationButton from "./deleteButton";
import BackButton from "./backButton";





export default function Reservation(){
    const [reservation,setReservation] = useState(null);

    const pathname = usePathname();
    const reservationId = +pathname.split("/").pop();

    const fetchReservation = async ()=>{
        try {
            const res = await getReservationById(reservationId);
            setReservation(res);
        } catch (error) {
            throw new Error(error);
        }
    }
    
    useEffect(()=>{
        fetchReservation();
    },[])

    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 APPOINTMENT DETAILS
                </span>
            </div>
            <div className="w-full min-h-[80vh] mt-3 bg-white flex flex-col justify-center px-[60px]">
                <div className="h-full w-[70%]">
                    <div className="flex my-[10px]">
                        <div className="w-[30%]">
                            <span className="font-bold text-lg text-gray-500">Name:</span>
                        </div>
                        <div>
                            <span className="text-lg font-light">{reservation?.name}</span>
                        </div>
                    </div>
                    <div className="flex my-[40px]">
                        <div className="w-[30%]">
                            <span className="font-bold text-lg text-gray-500">E-Mail Address:</span>
                        </div>
                        <div>
                            <span className="text-lg font-light">{reservation?.email}</span>
                        </div>
                    </div>
                    <div className="flex my-[40px]">
                        <div className="w-[30%]">
                            <span className="font-bold text-lg text-gray-500">Phone Number:</span>
                        </div>
                        <div>
                            <span className="text-lg font-light">{reservation?.phone}</span>
                        </div>
                    </div>
                    <div className="flex my-[40px]">
                        <div className="w-[30%]">
                            <span className="font-bold text-lg text-gray-500">Date:</span>
                        </div>
                        <div>
                            <span className="text-lg font-light">{reservation?.createdAt.toDateString()}</span>
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="w-[30%]">
                            <span className="font-bold text-lg text-gray-500">Reason:</span>
                        </div>
                        <div className="flex flex-wrap">
                            <span className="text-lg font-light">{reservation?.reason}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[40px] mt-4 flex gap-3 justify-end">
                    <DeleteReservationButton reservation={reservation}/>
                    <BackButton/>
                </div>
            </div>
        </div>
    )
}