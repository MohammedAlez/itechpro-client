'use client'


import React from 'react'
import ProductCard from '@/components/Global/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { NoItemsFound } from '@/components/Global/NoItemsFound';




export function RelatedProducts({relatedProducts}:{relatedProducts:Product[]}) {

  return (
    <>
        <div className="mb-8 font-bold text-gray-800 text-2xl flex items-center gap-2">
            Produits associés
        </div>
        <div className="">
            {relatedProducts.length
            ?
                <Swiper
                    
                    slidesPerView={5}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // '@0.75': {
                        //     slidesPerView: 3,
                        //     spaceBetween: 10,
                        // },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        '@1.30': {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    className=""
                >
                    {
                        relatedProducts.map((c)=>{
                            return (
                                <SwiperSlide key={c.id}>
                                    <ProductCard product={c}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            :
                <h1 className="text-customBlack font-bold text-2xl mt-5 text-center">Aucun produit associé pour le moment</h1>
            }
        </div>
    </>
  )
}
