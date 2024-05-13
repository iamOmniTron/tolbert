import { FaImage, FaUserFriends, FaUsers, FaYoutubeSquare, } from "react-icons/fa"
import CardItem from "./components/cardItem"



const ITEMS = [
    {
        title:"Hero",
        icon:<FaImage/>,
        path:"/admin/frontend/frontpage/hero",
    },
    {
        title:"Testimonials",
        icon:<FaUsers/>,
        path:"/admin/frontend/frontpage/testimonials"
    },
    {
        title:"Clients",
        icon:<FaUserFriends/>,
        path:"/admin/frontend/frontpage/clients"
    },
    {
        title:"Video",
        icon:<FaYoutubeSquare/>,
        path:"/admin/frontend/frontpage/video"
    },
]


export default function FrontPageSetting(){




    return(
        <div className="w-full">
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 FRONT PAGE SETTINGS
                </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 w-full h-[20vh]">
                {
                    ITEMS.map((i,idx)=>(
                        <CardItem item={i} key={idx}/>
                    ))
                }
            </div>
        </div>
    )
}