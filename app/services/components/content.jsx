import { FaAddressBook, FaBaby, FaBabyCarriage, FaChild, FaStethoscope } from "react-icons/fa"
import Card from "./serviceCard"
import { RxGroup } from "react-icons/rx"
import { getServices } from "@/app/lib/queries"



export const SERVICES = [
    {
        name:"Obstetrics & Gynacology",
        description:"preconception to postpartum, check-ups, family planning, Antenatal care Specialized gynecological support for Gynaecological issues and Surgeries.",
        path:"/services/og",
        services:[
            {
                name:"Surgeries",
                icon:<FaStethoscope/>
            },
            {
                name:"Procedures",
                icon:<FaAddressBook/>
            },
            {
                name:"Antenatal",
                icon:<FaBaby/>
            },
            {
                name:"Family Planning",
                icon:<FaBabyCarriage/>
            },
            {
                name:"Child Delivery",
                icon:<FaBaby/>
            },
        ].map((s,idx)=>({...s,id:idx+1}))
    },
    {
        name:"In vitro Fertilization",
        description:" Advanced fertility treatment, expert care, cutting-edge technology, tailored plans for a successful parenthood journey",
        path:"/services/ivf",
        services:null
    },
    {
        name:"Neonatal Intensive Care Unit",
        description:"Our NICU provides compassionate, specialized care for newborns requiring extra attention and support.",
        path:"/services/nicu",
        services:null
    },
    {
        name:"Laboratory",
        description:"Cutting-edge laboratory services with state-of-the-art automated equipment, ensuring accurate diagnostics and efficient healthcare solutions for all.",
        path:"/services/labs",
        services:null
    },
    {
        name:"Specialized Department",
        description:"Our Pharmacy is your trusted destination for all your medication needs",
        path:"/services/spd",
        services:null
    },
    {
        name:"Clinical Specialties",
        description:"With a team of highly skilled specialists across various disciplines, we offer expertise in diagnosing and treating complex medical conditions.",
        path:"/services/clinics",
        services:null
    },
].map((service,idx)=>({...service,id:idx+1}))



export default async function MainContent(){

    const services = await getServices();

    return(
        <div className="px-10 my-5 min-h-[40vh]">
            <div className="text-center mb-10">
                <span className="text-xl font-bold text-red-500 py-3 border-b-2 border-red-500">OUR SERVICES</span>
            </div>
            <div className=" grid gap-1 grid-cols-1 md:grid-cols-3">
                {
                    services.map((service)=>(
                        <Card key={service.id} service={service}/>
                    ))
                }
            </div>
        </div>
    )
}