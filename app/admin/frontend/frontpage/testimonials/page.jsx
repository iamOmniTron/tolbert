import TestimonialsTable from "./components/testimonialsTable";


export default function TestimonialPage(){


    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                FRONT PAGE SETTINGS / TESTIMONIALS SECTION
                </span>
            </div>
            <div className="w-full h-[70vh] bg-white p-4 mt-3 text-gray-500 flex justify-center">
                <TestimonialsTable/>
            </div>
        </div>
    )
}