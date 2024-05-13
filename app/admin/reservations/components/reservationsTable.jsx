import { getReservations } from "@/app/lib/queries";
import ViewReservationButton from "./viewReservationButton";
import NoDataComponent from "@/app/components/noData/noData";
import { trimText } from "@/app/lib/helpers"




export default async function ReservationsTable(){

    const reservations = await getReservations();

    return(
        <table className="w-full bg-white rounded-md">
                    <thead>
                        <tr className="border-b-2">
                            <td className="font-bold pl-2">S/N</td>
                            <td className="font-bold">Fullname</td>
                            <td className="font-bold">E-Mail</td>
                            <td className="font-bold">Reasons</td>
                            <td className="font-bold pr-2">Date</td>
                            <td className="font-bold pr-2">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservations.length > 0 ? reservations.map((i,idx)=>(
                                <tr key={idx} className="border h-[50px]">
                                    <td>{idx+1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{trimText(i.reason,20)}</td>
                                    <td>{i.createdAt.toDateString()}</td>
                                    <td>
                                        <ViewReservationButton reservation={i}/>
                                    </td>
                                </tr>
                            )):
                            <th colSpan={6}>
                                <NoDataComponent/>
                            </th>
                        }
                    </tbody>
            </table>
    )
}