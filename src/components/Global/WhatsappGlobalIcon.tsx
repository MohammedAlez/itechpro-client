'use client'

import { useWebsiteInfo } from "@/hooks/useWebsiteInfo";
import Link from "next/link";
import { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa6";



export function WhatsappGlobalIcon(){

    const {data} = useWebsiteInfo()
        
    const websiteInfo:WebsiteInfo|undefined = data?.data

    return (
        <>
            <Link target="_blank" href={'https://wa.me/'+websiteInfo?.whatsapp_phone_number} 
                className="fixed bottom-5 right-5 z-[9] bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all flex items-center justify-center text-3xl"
            >
              <FaWhatsapp size={35}/>
            </Link>
        </>
    )
}