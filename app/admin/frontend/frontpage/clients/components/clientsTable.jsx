import NoDataComponent from "@/app/components/noData/noData";
import { getClients } from "@/app/lib/queries"
import Image from "next/image";
import DeleteClientButton from "./deleteClientButton";



export default async function ClientsTable(){

    const clients = await getClients();

    return(
        <table  className="w-full bg-white rounded-md">
            <thead>
                <tr className="border-b-2 px-2">
                    <th className="font-bold pl-2">S/N</th>
                    <th className="font-bold pl-2">Logo</th>
                    <th className="font-bold pl-2">Name</th>
                    <th className="font-bold pl-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    clients.length > 0 ? 
                        clients.map((client,idx)=>(
                            <tr key={idx} className="cursor-pointer border-b-2 h-[50px] hover:shadow-lg">
                                <td>{idx+1}</td>
                                <td className="flex justify-center">
                                <Image src={`/DSC_0002.JPG`} height={100} width={100} className="size-10 rounded-full"/>
                                </td>
                                <td>{client?.name}</td>
                                <td>
                                    <DeleteClientButton client={client}/>
                                </td>
                            </tr>
                        ))
                    :
                    <th colSpan={4}>
                        <NoDataComponent/>
                    </th>
                }
            </tbody>
        </table>
    )
}