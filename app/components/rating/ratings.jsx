"use client"
import Star from "./ratingStar";




export default function Stars({rating,setRating}){

    return(
        <div className="flex w-full justify-start gap-3">
            {
                Array(5).fill("").map((_,i)=>(
                    <Star setClickedIndex={setRating} clickedIndex={rating} index={i+1} key={i}/>
                ))
            }
        </div>
    )
}
