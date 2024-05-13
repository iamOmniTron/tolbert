import NoDataComponent from "@/app/components/noData/noData";
import { trimText } from "@/app/lib/helpers";
import { getComplaints } from "@/app/lib/queries"
import ViewComplaintButton from "./viewComplaintButton";



export default async function ComplaintTable(){

    const complaints = await getComplaints();

    return(
        <table className="w-full bg-white rounded-md">
            <thead>
                <tr className="border-b-2 px-2">
                    <th className="font-bold pl-2">S/N</th>
                    <th className="font-bold pl-2">Service</th>
                    <th className="font-bold pl-2">Refferal</th>
                    <th className="font-bold pl-2">Satisfaction</th>
                    <th className="font-bold pl-2">Date</th>
                    <th className="font-bold pl-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    complaints.length > 0 ?
                    complaints.map((complaint,idx)=>(
                        <tr key={idx} className="cursor-pointer border-b-2 h-[50px] hover:shadow-lg">
                            <td>
                                {idx+1}
                            </td>
                            <td>
                                {trimText(complaint.service,20)}
                            </td>
                            <td>
                                {trimText(complaint.refferalMode,20)}
                            </td>
                            <td>
                                {complaint.satisfaction}
                            </td>
                            <td>
                                <ViewComplaintButton complaint={complaint}/>
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