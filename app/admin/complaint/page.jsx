import { FaTicketAlt } from "react-icons/fa";
import ComplaintTable from "./components/complaintsTable";



export default function ComplaintPage(){

    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold flex gap-2 items-center">
                    COMPLAINTS <FaTicketAlt style={{rotate:"50deg"}}/>
                </span>
            </div>
            <div className="min-h-[40vh] mt-3">
                <ComplaintTable/>
            </div>
        </div>
    )
}