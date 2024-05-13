"use client"
import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"


export default function Carousel({images}){

    return(
        <Swiper 
        autoplay
        speed={300}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            className="h-full"
            navigation
            >
                {
                    images && images.map((img,idx)=>(
                    <SwiperSlide key={idx}>
                        <Image src={`/${img}`} fill className="contain"/>
                    </SwiperSlide>
                    ))
                }
        </Swiper>
    )  
}