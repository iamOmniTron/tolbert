"use client"
import { FaChevronUp } from "react-icons/fa";



export default function ScrollToTop(){

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return(
        <div onClick={scrollToTop} className="transition-all hover:bg-blue-400 shadow-lg z-20 bg-blue-700 h-[50px] w-[50px] cursor-pointer rounded-full flex items-center justify-center fixed bottom-20 right-10 hover:scale-125">
            <FaChevronUp className="text-white text-[20px] animate-bounce"/>
        </div>
    )
}