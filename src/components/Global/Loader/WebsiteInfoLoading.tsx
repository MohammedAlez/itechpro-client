'use client'


import { useWebsiteInfo } from "@/hooks/useWebsiteInfo"
import Image from "next/image"
import { ReactNode } from "react"



export function WebsiteInfoLoading({children}:{children:ReactNode}){

    const {isLoading} = useWebsiteInfo()

    if(isLoading){
        return (
            <div className="min-h-[100vh] w-full  bg-gray-100 flex flex-col items-center justify-center gap-6 z-[999999999] fixed top-0 left-0">
                <Image src='/logo.jpg' alt='' width={60} height={60} className="rounded-full "/>
                <span className="text-sm font-bold">Chargement...</span>
            </div>
        )
    }
    
    return children
}