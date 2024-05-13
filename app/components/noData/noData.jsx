import {SlDrawer} from "react-icons/sl";

export default function NoDataComponent(){

    return(
        <div className="w-full min-h-24 flex justify-center items-center gap-3 text-gray-500">
                <SlDrawer className="text-2xl"/>
                <span className="font-bold text-xl text-center ">No Data</span> 
        </div>
    )
}