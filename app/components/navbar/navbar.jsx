"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import NavMenu from "../nav-menu/nav-menu";
import Link from "next/link";






export default function NavBar(){

    const router = useRouter();


    return(
        <div className="w-full min-h-[20vh] bg-white p-3 sticky top-0 shadow-lg z-30 text-wrap">
            <div className="w-full flex gap-3 justify-center md:justify-end items-center mb-[20px] text-[14px]">
                <span className="text-xl text-blue-500 hover:scale-110">
                    <FaPhone className="rotate-90"/>
                </span>
                <span className="font-bold text-blue-500 hover:scale-110">
                +(234)37587905 |
                    092914769
                </span>
                <span className="text-xl text-blue-500 hover:scale-110 cursor-pointer">
                    <FaFacebook/>
                </span>
                <span className="text-xl text-red-500 hover:scale-110 cursor-pointer">
                    <FaYoutube/>
                </span>
                <span className="text-xl text-pink-500 hover:scale-110 cursor-pointer">
                    <FaInstagram/>
                </span>
                <span  className="text-xl text-blue-400 hover:scale-110 cursor-pointer">
                    <FaTwitter/>
                </span>
            </div>
            <div className="w-full sticky flex  text-gray-500">
                <Link href={"/"} className="w-[30%] pl-[20px]">
                    <Image src={"/logo.png"} height={150} width={150} className="size-100"/>
                </Link >
                <div className="relative flex-1 flex">
                    <NavMenu/>
                    <Link href={"/appointment"} className="bg-red-500 h-fit rounded-md text-white hover:bg-red-400 p-2 font-bold gap-2 items-center min-w-fit">
                        Book Appointment
                    </Link>
                </div>
            </div>
        </div>
    )
}