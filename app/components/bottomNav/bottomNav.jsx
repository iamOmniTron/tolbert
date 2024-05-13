import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { RxCircle } from "react-icons/rx";



export default function BottomNav(){



    return(
        <div className="h-fit w-full bg-gray-300">
            <div className="h-full w-full p-[100px] flex flex-col md:flex-row justify-between gap-10">
                <div className="w-full flex flex-col gap-5">
                    <div className="border-l-4 border-blue-500 px-3">
                        <span className="font-bold text-lg text-gray-500">
                            OUR CONTACT
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="block font-bold text-md text-gray-500">
                            Address:
                        </span>
                        <span className="block text-md text-gray-500 text-wrap">
                            No. 17 Democracy Crescent, Gaduwa Housing Estate, Abuja
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="block font-bold text-md text-gray-500">
                            Contact:
                        </span>
                        <span className="block text-md text-gray-500">
                        +(234)37587905
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="block font-bold text-md text-gray-500">
                            Email:
                        </span>
                        <span className="block text-md text-gray-500">
                            support@tolberthospital.com
                        </span>
                    </div>
                    <div className="mt-2">
                        <Image src={"/logo.png"} height={150} width={150} />
                    </div>
                </div>
                <div className="w-full">
                    <div className="border-l-4 border-blue-500 px-3">
                            <span className="font-bold text-lg text-gray-500">
                                ABOUT US
                            </span>
                    </div>
                    <div className="mt-2 flex flex-col gap-10">
                    <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                About Tolbert specialists Hospital
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Corporate Profile
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Our CSR
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Facilities & Equipments
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Patnership
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="border-l-4 border-blue-500 px-3">
                            <span className="font-bold text-lg text-gray-500">
                                KEY SERVICES
                            </span>
                    </div>
                    <div className="mt-2 flex flex-col gap-10">
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Obstetrics & Gynacology
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                IVF
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Neonatal Intensive Care Unit
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                General Surgery Laboratory
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Plastic Surgery
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="border-l-4 border-blue-500 px-3">
                            <span className="font-bold text-lg text-gray-500">
                                QUICK LINKS
                            </span>
                    </div>
                    <div className="mt-2 flex flex-col gap-10">
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Book Appointment
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                About Us
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Services
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Term of use
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm font-thin flex gap-2">
                                <RxCircle/>
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}