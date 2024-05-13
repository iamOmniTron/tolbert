"use client"
import { createReservation } from "@/app/lib/actions";
import { useRouter } from "next/navigation";



export default function ReservationContent(){
    const router = useRouter();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const reservation = await createReservation(formData);
            if(!reservation) throw new Error("Error: cannot make a reservation");
            return router.push("/");
        } catch (error) {
            throw new Error(error);
        }
    }

    return(
        <div className="my-4 px-[100px]">
            <div className="text-center my-10">
                <span className="text-xl text-red-500 font-bold py-4 border-b-2 border-red-500">Schedule an Appointment</span>
            </div>
            <div className="my-10 h-[50vh] w-full flex">
                <form className="flex flex-1 flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="h-10">
                        <input name="name" placeholder="Your Name" className="size-full p-5 outline-gray-500"/>
                    </div>
                    <div className="flex gap-3 h-10">
                        <input name="phone" placeholder="Phone" type="tel" className="h-full flex-1 p-5 outline-gray-500"/>
                        <input name="email" placeholder="Email" type="email" className="h-full flex-1 p-5 outline-gray-500"/>
                        <input name="date" placeholder="Date" type="date" className="h-full flex-1 p-5 outline-gray-500"/>
                    </div>
                    <div className="flex-1 h-32 bg-blue-200">
                        <textarea name="reason" placeholder="Reasons" className="size-full outline-gray-500 p-5"/>
                    </div>
                    <div>
                        <button type="submit" className="h-10 text-white font-bold w-full bg-blue-400 hover:bg-blue-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}