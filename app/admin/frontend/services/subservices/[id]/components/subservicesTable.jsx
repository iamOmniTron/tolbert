import NoDataComponent from "@/app/components/noData/noData";
import Image from "next/image";
import DeleteSubServiceButton from "./deleteSubServiceButton";





export default function SubServicesTable({service}){
    console.log(service)

    return(
            <table className="w-full bg-white rounded-md">
                <thead>
                        <tr className="border-b-2 px-2">
                            <th className="font-bold pl-2">S/N</th>
                            <th className="font-bold">
                                Image
                            </th>
                            <th className="font-bold">Name</th>
                            <th className="font-bold">Action</th>
                        </tr>
                </thead>
                <tbody className="text-center">
                    {
                        service?.subServices?.length > 0 ?
                            service.subServices.map((subService,idx)=>(
                                <tr key={idx} className="cursor-pointer border-b-2 h-[50px] hover:shadow-lg font-bold">
                                    <td>
                                        {idx+1}
                                    </td>
                                    <td className="flex justify-center">
                                        <Image src={`/${subService?.imageUrl}`} height={100} width={100} className="size-10 rounded-full"/>
                                    </td>
                                    <td>
                                        {subService?.name}
                                    </td>
                                    <td>
                                        <DeleteSubServiceButton subService={subService}/>
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