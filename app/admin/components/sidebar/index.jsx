import {RxDashboard} from "react-icons/rx"
import {FaArrowLeft, FaChair, FaCog, FaMobile, FaNewspaper, FaTicketAlt} from "react-icons/fa";
import NavItem from "./components/navitem";
import Link from "next/link";



const NAV_ITEMS = [
    {
        title:"Dashboard",
        link:"/dashboard",
        icon:<RxDashboard/>,
        children:null
    },
    {
        title:"Blogs",
        link:"/blog",
        icon:<FaNewspaper/>,
        children:null
    },
    {
        title:" Appointments",
        link:"/reservations",
        icon:<FaChair/>,
        children:null
    },
    {
        title:"Complaints",
        link:"/complaint",
        icon:<FaTicketAlt style={{rotate:"50deg"}}/>,
        children:null
    },
    {
        title:"Frontend",
        link:"/frontend",
        icon:<FaMobile/>,
        children:[
            {
                title:"Services",
                link:"/frontend/services"
            },
            {
                title:"Home",
                link:"/frontend/home"
            },
            {
                title:"Visit",
                link:"/visit"
            }
        ].map((s,idx)=>({...s,id:idx+1}))
    },
    {
        title:"Settings",
        link:"/setting",
        icon:<FaCog/>,
        children:null
    },
].map((itm,idx)=>({...itm,id:idx+1}))



export default function SidebarNav(){

    return(
        <>
            <div className="min-h-[75vh] w-full p-x-2 mt-[1em]">
                <div className="flex flex-col mx-[20px] space-y-2">
                    {
                        NAV_ITEMS.map((item)=>(
                            <NavItem item={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
            <Link className="h-[10vh] w-[80%] flex justify-center items-center space-x-2 text-gray-500 hover:bg-gray-200" href={"/"} style={{
                borderRadius:"4px"
            }}>
                <FaArrowLeft/>
                <span className="font-bold">Logout</span>
            </Link>
        </>
    )
}