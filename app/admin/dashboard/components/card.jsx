

export default function Card({title,icon,number,color}){

    return(
        <>
            <div className={`mx-2 w-full h-full ${color} hover:shadow-lg relative overflow-hidden`} style={{borderRadius:"5px"}}>
                <div className="px-3 mt-4 space-x-7">
                    <span className="text-2xl font-bold text-white">
                        {title}
                    </span>
                    <span className="font-italic text-xl text-white">
                        {number}
                    </span>
                </div>
                <div className="absolute" style={{
                    bottom:-5,
                    right:20
                }}>
                    {
                        icon   
                    }
                </div>
            </div>
        </>
    )
}