import Image from "next/image";
import ServiceDeleteButton from "./serviceDeleteButton";
import EditServiceButton from "./editServiceButton";
import SubServicesButton from "./subServicesButton";




export default function ServiceCard({service}){

    return(
        <div className="h-[80vh] w-full shadow-lg rounded-md flex flex-col hover:scale-105 transition-transform duration-300">
            <div className="h-[40%] w-full">
                <Image src={`/${service?.imageUrl}`} height={200} width={200} className="cover w-full h-full rounded-t-md"/>
            </div>
            <div className="flex-1 px-4 py-2 text-gray-500">
                <div className="my-2">
                    <span className="text-lg font-bold">{service?.name}</span>
                </div>
               <p className="my-2 font-semibold text-sm">{service?.description}
               </p>
                <span className="font-bold my-2">Services</span>
                <div className="flex flex-col gap-3 my-3">
                    <span className="text-sm font-medium">Total Services:{service?.subServices.length}</span>
                    <span className="text-sm font-medium">Date Added: {service?.createdAt?.toDateString()}</span>
                    <div className="w-full flex justify-end gap-3 my-3">
                        <SubServicesButton service={service}/>
                        <EditServiceButton service={service}/>
                        <ServiceDeleteButton service={service}/>
                    </div>
                </div>
            </div>
        </div>
    )
}