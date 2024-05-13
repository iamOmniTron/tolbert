import { getTotalReservations, getTotalServices } from "@/app/lib/queries";
import Card from "./card"
import { FaTicketAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";


export default async function Cards(){
    
    const services = await getTotalServices();
    const reservations = await getTotalReservations();
    
    const ITEMS = [
        {
            title:"Services",
            icon:<RxDashboard className="text-4xl text-white hover:scale-125 transition-all" style={{
                rotate:"50deg"
            }}/>,
            number:services,
            color:"bg-blue-500"
        },
        {
            title:"Appointments",
            icon:<FaTicketAlt className="text-4xl text-white hover:scale-125 transition-all" style={{
                rotate:"50deg"
            }}/>,
            number:reservations,
            color:"bg-red-500"
        },
    ]
    

    return(
        <>
            <div className="h-[20vh] w-full mt-2 flex py-2 ">
                {
                    ITEMS.map((item,idx)=>(
                        <Card {...item} key={idx} />
                    ))
                }
            </div>
        </>
    )
}