import Stars from "@/app/components/rating/ratings";




export default function ComplaintsForm(){

    return(
        <div className="min-h-[70vh] w-full  my-4 flex justify-center py-10">
            <form className="min-w-[90%] border-y-2 p-2 text-gray-500 flex flex-col gap-3">
                <div className="font-bold text-lg text-gray-500 text-center">Our Services</div>
                <div className="pl-5 flex justify-between items-center gap-2 h-10 my-3">
                    <span>1. How is our services?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 justify-between  flex items-center gap-2 h-10 my-3">
                    <span>Reception?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 flex justify-between  items-center gap-2 h-10 my-3">
                    <span>Customer Service?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 flex justify-between  items-center gap-2 h-10 my-3">
                    <span>Pharmacy?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 flex justify-between  items-center gap-2 h-10 my-3">
                    <span>Nursing Department?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 flex justify-between  items-center gap-2 h-10 my-3">
                    <span>House Keeping?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 flex justify-between items-center gap-2 h-10 my-3">
                    <span>Doctor's Department?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="font-bold text-lg text-gray-500 text-center">Referral</div>
                <div className="pl-5 flex justify-between items-center gap-2 h-10 my-3">
                    <span>2. How did you hear about us?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 justify-between  flex items-center gap-2 h-10 my-3">
                    <span>If needed, will you refer a patient?</span>
                    <textarea className="w-[70%] h-full bg-neutral-200 caret-gray-500 px-2 border-b-4 outline-gray-300"/>
                </div>
                <div className="pl-5 flex justify-between  items-center gap-2 h-10 my-3">
                    <span>How many stars will you rate us?</span>
                    <Stars/>
                </div>
                <button className="py-3 px-4 bg-blue-500 text-white font-bold w-full hover:bg-blue-400 my-3">
                    Submit
                </button>
            </form>
        </div>
    )
}