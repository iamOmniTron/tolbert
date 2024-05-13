import {useState,useEffect} from "react";
import { FaStar } from "react-icons/fa";


export default function Star({index,setClickedIndex,clickedIndex}){
    const [clicked,setClicked] = useState(false);

    useEffect(()=>{
        if(clickedIndex >= index){
           return setClicked(c=>true)
        }
        setClicked(false)
    },[clickedIndex])

    const toggleClick = ()=>{
        setClickedIndex(()=>index);
        if(clickedIndex >= index && clicked == true){
            return setClicked(c=>!c);
        }
        return setClicked(c=>!c)
    }

    

    return(
        <div className="size-10">
            <FaStar onClick={()=>toggleClick()} className={`cursor-pointer h-full w-full ${clicked?"text-orange-500":"text-white"}`}/>
        </div>
    )
}