import { getServices } from "@/app/lib/queries"
import Service from "./service"




export default async function Services(){
     const services = await getServices();

    return(
        <div className="w-full min-h-[30vh] px-10 flex items-center flex-col">
            <div className="my-5 w-[40%] flex justify-center border-b-4 border-blue-500">
                <span className="text-blue-500 font-bold text-2xl py-3 text-center">
                    What We Do
                </span>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
                {
                    services.slice(0,4).map((service,idx)=>(
                        <Service service={service} key={idx}/>
                    ))
                }
            </div>
        </div>
    )
}