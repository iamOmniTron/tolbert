
import ReservationsTable from "./components/reservationsTable"



export default function ReservationsPage(){


    return(
        <div>
             <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 APPOINTMENTS
                </span>
            </div>
            <div className="min-h-[40vh] mt-3">
            <ReservationsTable/>
            </div>
        </div>
    )
}