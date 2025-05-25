'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { SERVER_URL } from '@/utils';
import { Swiper as SwiperCore } from 'swiper/types'; // Import Swiper types

export function Images({ product }: { product: Product | undefined }) {
    const images = product ? (product?.images ? [product.main_image, ...product.images] : [product?.main_image]) : []
    
    const [activeIndex, setActiveIndex] = useState(0);  // Track active image index
    const swiperRef = useRef<SwiperCore | null>(null);  // Store Swiper instance

    return (
        <div className="flex flex-col gap-4">
            <div className="">
                <div className="w-full sm:max-w-[550px] md:max-w-[600px] border rounded-2xl mx-auto">
                    <Swiper
                        // pagination={{
                        //     dynamicBullets: true,
                        //     clickable: true
                        // }}
                        modules={[Pagination]}
                        spaceBetween={10}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update state when slide changes
                        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                    >
                        {images.map((e, index) => (
                            <SwiperSlide key={e.url}>
                                <div className="h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden relative">
                                    <Image src={`${e.url}`} alt='' fill className='object-cover' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 flex-wrap justify-center">
                {images.map((e, index) => (
                    <div 
                        key={e.url} 
                        className={`h-16 min-w-16 md:h-20 md:min-w-20 border border-gray-200 outline-none rounded-2xl overflow-hidden relative cursor-pointer 
                        ${index === activeIndex ? ' outline-gray-400 border-gray-400' : ''}`} // Highlight active thumbnail
                        onClick={() => swiperRef.current?.slideTo(index)} // Scroll to selected image
                    >
                        <Image src={`${e.url}`} alt='' fill className='object-cover' />
                    </div>
                ))}
            </div>
        </div>
    )
}
