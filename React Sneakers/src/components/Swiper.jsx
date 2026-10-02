import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



function SwiperNavButtons() {
    const swiper = useSwiper()
    const baseCSS = "bg-white/80 w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 z-15 flex items-center justify-center shadow cursor-pointer hover:bg-white transition duration-400"
    return (
        <>  
            <button onClick={() => swiper.slidePrev()}
                className={`${baseCSS} left-3`}>
                <IoIosArrowBack size={25}/>
            </button>
            <button onClick={() => swiper.slideNext()}
                className={`${baseCSS} right-3`}>
                <IoIosArrowForward size={25}/>
            </button>
        </>
    )
}




export function HeroSwiper() {
    /* const banners = [
        { img: '../', title: '' },
        { img: '', title: '' },
        { img: '', title: '' },
        потом 
        banners.map(итд)
    ] */
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            //navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            className="rounded-2xl h-120 w-full"
        >
            <SwiperSlide className='h-full'><img src="/img/banner2.jpg" alt="" className='w-full h-full object-cover' /></SwiperSlide>
            <SwiperSlide className='h-full'><img src="/img/banner3.jpg" alt="" className='w-full h-full object-cover' /></SwiperSlide>
            <SwiperNavButtons/>
        </Swiper>
    )
}