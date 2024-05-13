import { FaCogs } from "react-icons/fa";




export default function SettingsPage(){

    return(
        <div>
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold flex gap-2 items-center">
                    PASSWORD SETTING <FaCogs/>
                </span>
            </div>
            <div className="mt-3 bg-white w-full min-h-[70vh] flex justify-center items-center flex-col">
                <h1 className="font-bold text-xl text-gray-500">RESET PASSWORD</h1>
                <div className="w-[30vw]">
                    <form>
                        <div className="w-full h-[50px] my-3">
                            <input className="w-full outline-blue-500 h-full border pl-3" placeholder="Enter Current Password..."/>
                        </div>
                        <div className="w-full h-[50px] my-3">
                            <input className="w-full outline-blue-500 h-full border pl-3" placeholder="Enter New Password..."/>
                        </div>
                        <div className="w-full h-[50px] my-3">
                            <input className="w-full outline-blue-500 h-full border pl-3" placeholder="Re-enter New Password..."/>
                        </div>
                        <div className="w-full flex justify-end">
                            <button className="flex gap-2 py-2 px-4 rounded-md bg-blue-500 font-bold text-white items-center">
                                CONFIRM
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}