import { getReservations } from "@/app/lib/queries"
import ViewButton from "./tableViewButton"
import { trimText } from "@/app/lib/helpers";
import NoDataComponent from "@/app/components/noData/noData";

export default  async function DashboardTable(){

    const reservations = await getReservations();


    return(
        <table className="w-full bg-white rounded-md">
                        <thead>
                        <tr className="border-b-2 px-2 py-3">
                            <th className="font-bold">S/N</th>
                            <th className="font-bold">E-mail</th>
                            <th className="font-bold">Reason</th>
                            <th className="font-bold">Date</th>
                            <th className="font-bold">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                               reservations.length > 0 ? reservations.slice(0,8).map((d,idx)=>(
                                    <tr className="cursor-pointer border-b-2 h-[50px] hover:shadow-lg text-gray-500 text-sm font-bold" key={idx}>
                                        
                                        <td className="font-bold pl-2">
                                            {idx+1}
                                        </td>
                                        <td>
                                            {d.email}
                                        </td>
                                        <td>
                                            {trimText(d.reason,20)}
                                        </td>
                                        <td>
                                            {d.date.toDateString()}
                                        </td>
                                        <td className="pl-5">
                                            <ViewButton item={d}/>
                                        </td>
                                     </tr>
                                )):
                                <th colSpan={5}>
                                    <NoDataComponent/>
                                </th>
                            }
                        </tbody>
                    </table>
    )
}