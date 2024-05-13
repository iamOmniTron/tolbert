import Image from "next/image"
import Link from "next/link"

const MAIN_SERVICES = [
    {
        name:"Surgeries",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut."
    },
    {
        name:"Procedures",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut."
    },
    {
        name:"Antenatal",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut."
    },
    {
        name:"Child Delivery",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut."
    },
    {
        name:"Family Planning",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum aliquam debitis hic ipsam asperiores quas possimus dolores, minus ut? Facilis voluptas voluptate iure saepe. In, inventore. Esse, culpa aut."
    },
].map((s,idx)=>({...s,id:idx+1}))



export default function ServicesListSection(){

    return(
        <div className="my-3 grid grid-cols-1 ">
            {
                MAIN_SERVICES.map(service=>(
                    <SingleServiceComponent service={service} key={service.id}/>
                ))
            }
        </div>
    )
}

function SingleServiceComponent({service}){

    return(
        <div className={`my-5 flex flex-col gap-3 min-h-[40vh] ${service.id % 2 == 0?`md:flex-row-reverse`:""}`}>
            <div className="md:w-[50%]">
                <span className="text-lg text-red-500 font-bold">{service?.name}</span>
                <p className="text-gray-500 ">{service?.description}</p>
            </div>
            <div className="flex-1">
                <Image src={"/DSC_0094.JPG"} height={300} width={300} className="w-full h-full rounded-md"/>
            </div>
        </div>
    )
}