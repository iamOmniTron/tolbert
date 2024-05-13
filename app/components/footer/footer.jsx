



export default function Footer(){

    return(
        <div className="w-full h-[10vh] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">
                Copyright {new Date().getFullYear()} - Tolbert Specialists Hospital
            </span>
        </div>
    )
}