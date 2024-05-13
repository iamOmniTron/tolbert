"use client"
import Link from "next/link"
import Submenu from "./submenu"

const MENU_ITEMS = [
    {
        title:"Home",
        path:"/",
        children:null
    },
    {
        title:"Medical Services",
        path:"/services",
        children:null
    },
    {
        title:"For Patient",
        path:null,
        children:[
            {
                title:"ANC",
                path:"/anc",
                children:null
            },
            {
                title:"What's New",
                path:"/blog",
                children:null
            },
            {
                title:"Complaints",
                path:"/complaint",
                children:null
            },
            {
                title:"Rating",
                path:"/rating",
                children:null
            }
        ]
    },
    {
        title:"What's New",
        path:"/blog",
        children:null
    },
    {
        title:"Contact",
        path:"/contact",
        children:null
    },
]



export default function NavMenu(){


    return(
        <div className="w-full px-[14px] flex flex-wrap gap-2">
            {
                MENU_ITEMS.map((item,idx)=>(
                    !item.children?
                    <Link href={item.path} className="font-bold h-fit px-[10px] text-sm md:text-[14px] hover:bg-gray-400 hover:text-white transition-all" key={`id-${idx}`}>
                        {item.title}
                    </Link>
                    :
                    <Submenu item={item} key={idx}/>
                ))
            }
        </div>
    )
}