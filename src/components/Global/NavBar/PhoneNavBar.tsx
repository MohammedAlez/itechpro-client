'use client'


import { useState } from "react";
import Link from "next/link"
import {  HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import { useParams } from "next/navigation";
import Image from "next/image";
import { SideCart } from "./SideCart";



type Props = {
    type?:string
}

export function PhoneNavBar({type}:Props){

    const [open, setOpen] = useState(false)
    

    return (
        <div className="">
            <div className={`flex  justify-between items-center rounded-2xl p-2 px-3 md:px-4`}>
                <Link href='/' className="relative rounded-full overflow-hidden w-12 h-12 bg-gray-400">
                    <Image src='/logo.jpg' alt='' fill className="object-cover"/>
                </Link>
                <div className={`flex  gap-3`}>
                    <SideCart />
                    <button onClick={()=>setOpen(true)} className={`hover:scale-90 transition-all ${type=='transparent' ? 'text-black': 'text-white'} `}>
                        
                        <HiOutlineMenuAlt3 size={30} />
                        
                    </button>
                </div>

                {/* Nav Links */}
                <div className={`fixed transition-all ${open ? "top-0" : "-top-[1000px] "} left-0 h-[100vh] z-50 w-full bg-white p-10 sm:px-20 `}>
                    
                    <div className={`flex  mb-14 justify-end`}>
                        <button onClick={()=>setOpen(false)} className={`w-8 h-8 hover:scale-95 transition-all bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 flex justify-center items-center`}>
                            <IoClose size={30}/>
                        </button>
                    </div>
                    <div className={`flex flex-col gap-6 `}>
                        <Link onClick={()=>setOpen(false)} href='/' className={`text-gray-600 text-center relative transition-all py-1  text-3xl hover:text-main  font-bold `}>Home</Link>
                        <Link onClick={()=>setOpen(false)} href='/shop2' className={`text-gray-600 text-center relative transition-all py-1  text-3xl hover:text-main  font-bold `}>Shop</Link>
                        <Link href='/' className={`text-gray-600 text-center relative transition-all py-1  text-3xl hover:text-main  font-bold `}>Contact</Link>
                        <Link href='' className={`text-gray-600 text-center relative transition-all py-1  text-3xl hover:text-main  font-bold `}>About</Link>
                        {/* <Link href='' className={`text-gray-600 text-center relative transition-all py-1  text-3xl hover:text-main  font-bold `}>Shooping Cart</Link> */}
                        {/* <Link href='/shooping-cart' className={`text-gray-600 relative transition-all py-1  text-3xl hover:text-main  font-bold transition`}>{nav_links.shoopingCart}</Link> */}
                    </div>
                    <div className="">

                    </div>
                </div>

            </div>
            {/* <div className={`max-w-[1200px] h-[2px] rounded-full mt-2 mx-3 ${type=='transparent' ? 'bg-gray-200 ' : 'bg-gray-600 opacity-30'}`} /> */}
        </div>
    )
}