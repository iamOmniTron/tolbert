import Link from "next/link"

export default function NavItem({item}){

    return(
        <div className="h-[3em]">
            <div className="border-[2px] bg-gray-200 h-full flex pl-2 items-center cursor-pointer hover:shadow-lg hover:bg-gray-100 transition-all" style={{borderRadius:"5px"}}>
                <Link className="font-bold text-gray-500 flex w-full gap-3" href={`/admin${item.link}`}>
                    {item.icon}
                    {item.title}
                </Link>
            </div>
        </div>
    )
}