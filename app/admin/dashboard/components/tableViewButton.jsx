"use client";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

export default function ViewButton({item}){

    return(
        <Link href={`/admin/reservations/${item.id}`}  className="text-blue-500">
            <RxArrowRight className="text-xl"/>
        </Link>
    )
}