import { getServices } from "@/app/lib/queries";
import NewServiceButton from "./components/newServiceButton";
import ServiceCard from "./components/serviceCard";




export default async function OurServices(){

    const services = await getServices();

    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                FRONTEND / OUR SERVICES
                </span>
            </div>
            <div className="w-full flex justify-end my-3">
                <NewServiceButton/>
            </div>
            <div className="py-10 mt-3 bg-white w-full min-h-full px-4">
                <div className="grid grid-cols-2 gap-4">
                    {
                        services.map((service,idx)=>(
                            <ServiceCard service={service} key={idx}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}