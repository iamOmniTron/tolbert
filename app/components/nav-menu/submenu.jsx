"use client";
import Link from "next/link";
import { useState} from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa"


export default function Submenu({item}){
    const [view,setView] = useState(false);

    const toggleClick = ()=>setView(c=>!c);


    return(
        <div className="cursor-pointer" >
                        <div onClick={toggleClick}  className="flex items-center gap-2 select-none hover:bg-gray-400 hover:text-white transition-colors duration-100 px-[10px]">
                            <span className="font-bold text-sm md:text-[14px] ">{item.title}</span>
                            {
                                view?
                                <FaChevronDown/>:
                                <FaChevronUp/>
                            }
                        </div>
                        <div id="submenu" className={`flex gap-2 px-3 shadow-2xl items-center absolute md:left-6 top-6 right-0 ${view?'block':'hidden'} bg-white h-[60px] transition-tranform duration-500 rounded-md`}>
                            {
                                item.children.map((c,idx)=>({...c,id:idx+1})).map((child)=>(
                                    <Link href={child.path} className="transition-all font-bold hover:bg-gray-400 hover:text-white text-sm md:text-[14px] mx-2 px-3" key={child.id}>
                                        {child.title}
                                    </Link>
                                ))
                            }
                        </div>
        </div>
    )
} 