'use client'

import Image from "next/image";
// import NavBar from "../Global/NavBar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Autoplay  } from 'swiper/modules';
import { useWebsiteInfo } from "@/hooks/useWebsiteInfo";
import { SERVER_URL } from "@/utils";


const banners = [
    '/images/banners/baner-1.jpg',
    '/images/banners/baner-2.jpg',
    '/images/banners/baner-3.jpg',
    '/images/banners/baner-4.jpg',
    
]


export function NewHero(){

    // const data=[
    //     {
    //         id:1,
    //         title:'Discover the Latest Smartphones',
    //         desc:'Shop the newest releases from top brands like Apple, Samsung, and Google. Stay connected with cutting-edge technology and unbeatable prices.',
    //         image:'/sliders/phones.png',
    //     },
    //     {
    //         id:2,
    //         title:'Powerful Laptops for Every Need',
    //         desc:'From gaming rigs to professional workstations, find the perfect laptop to match your style and performance requirements.',
    //         image:'/sliders/laptops.png',
    //     },
    //     {
    //         id:3,
    //         title:'Enhance Your Tech Experience with Accessories',
    //         desc:'Explore our range of accessories, from headphones to chargers, designed to complement your devices and make life easier.',
    //         image:'/sliders/accessories.png',
    //     },
    // ]

    const {data} = useWebsiteInfo()

    const websiteInfo:WebsiteInfo|undefined = data?.data
    // console.log(websiteInfo)

    return (
        <div className={`relative  h-[100vh]  px-1 `}>
            {/* <Image src='/bg.png' alt='' fill className="object-cover" /> */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-9d0"/> */}
            <div className="rounded-2xl z-40 relative max-w-[1300px] mx-auto top-2">
                {/* <NavBar type="transparent"/> */}
            </div>
            <div className="max-w-[1300px] relative mx-auto mt-3 flex gap-10 items-center justify-center px-2 ">
                <div className=" w-full sm:max-w-[550px]md:max-w-[600px] h-[calc(100dvh-100px)] md:h-[calc(100vh-110px)] flex-1 rounded-3xl overflow-hidden">
                    
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000,      // 3 seconds delay
                            disableOnInteraction: false,  // continue autoplay after user interaction
                        }}
                    >
                        {websiteInfo?.home_page_sliders && websiteInfo?.home_page_sliders.length>0 
                        ? 
                            websiteInfo?.home_page_sliders.map(e=>{
                                return (
                                    <SwiperSlide key={e.url} >
                                        <div className="relative overflow-hidden rounded-3xl h-[500px]d h-[calc(100vh-100px)] md:h-[calc(100vh-110px)] mx-auto">
                                            <Image src={SERVER_URL+e.url} fill alt='' className="object-cover " />
                                            
                                        </div>
                                    </SwiperSlide>
                                    )
                            })
                        :
                            banners.map(e=>{
                                return (
                                    <SwiperSlide key={e} >
                                        <div className="relative overflow-hidden rounded-3xl h-[500px]d h-[calc(100vh-100px)] md:h-[calc(100vh-110px)] mx-auto">
                                            <Image src={e} fill alt='' className="object-cover " />
                                            <div className="absolute top-0 left-0 bg-black opacity-35 w-full h-full"></div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                
                <div className={`flex-1 rounded-2xl py-3 absolute top-1/3 md:top-1/4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-10 w-full max-w-[800px] h-full text-center md:text-left px-6 z-10 `}>
                    <h1 className="font-bold mb-2  text-gray-300 text-xl lg:text-xl">{websiteInfo?.title || 'Welcome to ITECHPRO'}</h1>
                    <h1 className="font-bold text-3xl lg:text-5xl  mb-6   text-gray-100">{websiteInfo?.sub_title || 'Des ordinateurs portables puissants pour tous les besoins'}</h1>
                    {/* <p className={`text-lg lg:text-xl  max-w-[800px] mx-auto text-gray-300`}>
                        {websiteInfo?.description ||
                            "Des plates-formes de jeu aux stations de travail professionnelles, trouvez l'ordinateur portable parfait qui correspond à votre style et à vos exigences de performances."
                        }
                    </p> */}
                    <div className={`my-10  flex flex-col items-center sm:flex-row gap-5  `}>
                        {/* <Link href='/contact' className={` block font text-lg rounded-lg w-fit p-2 px-3 bg-secondary text-white  transition`}>{t("NavBar.contact_us")}</Link> */}
                        <Link href='/shop2' className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 bg-customWhite hover:bg-white group text-black font-medium `}>
                            Shop Now
                            <span className={`relative group-hover:left-1 left-0  transition-all`}>
                                <IoIosArrowForward className=""/>
                            </span>
                    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


                