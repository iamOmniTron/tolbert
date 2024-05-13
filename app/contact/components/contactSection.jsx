import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";





export default function ContactSection(){

    return(
        <div className="h-[100vh] w-full p-[50px] flex justify-center flex-col">
            <div className="flex flex-col md:flex-row h-[65vh] w-full shadow-lg rounded-md border-1">
                <div className="w-[50%] bg-gray-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7391510711905!2d7.462198469257291!3d8.996133071314208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ceee9275641%3A0x3e184a2f47bd81fd!2sGaduwa%20estate%2C%2017%20Democracy%20Cres%2C%20Abuja%20900110%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1714025541490!5m2!1sen!2sng" className="border-0 w-full h-full" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="h-full flex-1 px-5 pt-3 bg-white">
                    <h1 className="text-xl font-bold text-gray-500">Contact With Us</h1>
                    <form>
                        <div className="flex flex-col md:flex-row gap-3 h-[50px] my-3">
                            <input placeholder="Name" className="h-full border-2 outline-gray-300 rounded-sm px-3"/>
                            <input placeholder="Email" className="h-full border-2 outline-gray-300 rounded-sm px-3"/>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 h-[50px] my-3">
                            <input placeholder="Phone" className="h-full border-2 outline-gray-300 rounded-sm px-3"/>
                            <input placeholder="Subject" className="h-full border-2 outline-gray-300 rounded-sm px-3"/>
                        </div>
                        <div className="h-[150px]">
                            <textarea className="w-full h-full px-3 border-2 outline-gray-300 rounded-sm" placeholder="Your message"/>
                        </div>
                        <div className="my-2">
                            <button className="w-full font-bold text-white py-3 px-4 bg-blue-400 hover:bg-blue-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 min-h-28 w-full mt-10">
                <div className="h-full w-full rounded-lg bg-blue-500 text-white flex gap-2 items-center p-4">
                    <FaPhone className="text-lg rotate-90"/>
                    +(234)37587905, 092914769
                </div>
                <div className="h-full w-full rounded-lg bg-blue-500 text-white flex gap-2 items-center p-4">
                    <FaMapMarkerAlt className="text-lg"/>
                    No. 17 Democracy Crescent, Gaduwa Housing Estate, Abuja 
                </div>
                <div className="h-full w-full rounded-lg bg-blue-500 text-white flex gap-2 items-center p-4">
                    <FaClock className="text-3xl"/>
                    Mon - Sun (24 Hours)
                </div>
            </div>
        </div>
    )
}