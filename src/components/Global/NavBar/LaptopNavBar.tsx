

import Link from "next/link"

// import { getTranslations } from "next-intl/server";
// import Image from "next/image";
// import { BsHandbag } from "react-icons/bs";
import Image from "next/image";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { BsHandbag } from "react-icons/bs";
import { SideCart } from "./SideCart";




type Props = {
    type?:string
}
export function LaptopNavBar({type}:Props){

    return (

        <div className="h-full">
            <div className={`flex items-center justify-between py-2 px-6`}>
                <div className="flex gap-2">
                    <Link href='/' className={`block w-16 h-16 relative  rounded-full overflow-hidden`}>
                        <Image src='/logo.jpg' fill alt='' className="object-cover scale-110" />
                    </Link>
                </div>
                <div className="flex gap-20 lg:gap-36 items-center">
                    <div className={`flex gap-4 lg:gap-6 justify-center`}>
                        <Link href='/' className={`${type=='transparent' ? 'text-gray-800' : 'text-gray-500'} hover:text-primary py-1 after:h-[3px] after:bg-primary after:left-1/2 after:bottom-[-2px] after:opacity-0 hover:after:opacity-100 after:transition-all after:rounded-full  hover:after:bottom-0  after:w-[80%] after:-translate-x-1/2 after:absolute   dtext-lg font-medium relative transition`}>Home</Link>
                        <Link href='/shop2' className={`${type=='transparent' ? 'text-gray-800' : 'text-gray-500'} hover:text-primary py-1 after:h-[3px] after:bg-primary after:left-1/2 after:bottom-[-2px] after:opacity-0 hover:after:opacity-100 after:transition-all after:rounded-full  hover:after:bottom-0  after:w-[80%] after:-translate-x-1/2 after:absolute   dtext-lg font-medium relative transition`}>Shop</Link>
                        <Link href='/' className={`${type=='transparent' ? 'text-gray-800' : 'text-gray-500'} hover:text-primary py-1 after:h-[3px] after:bg-primary after:left-1/2 after:bottom-[-2px] after:opacity-0 hover:after:opacity-100 after:transition-all after:rounded-full  hover:after:bottom-0  after:w-[80%] after:-translate-x-1/2 after:absolute   dtext-lg font-medium relative transition`}>Contact</Link>
                        <Link href='' className={`${type=='transparent' ? 'text-gray-800' : 'text-gray-500'} hover:text-primary py-1 after:h-[3px] after:bg-primary after:left-1/2 after:bottom-[-2px] after:opacity-0 hover:after:opacity-100 after:transition-all after:rounded-full  hover:after:bottom-0  after:w-[80%] after:-translate-x-1/2 after:absolute   dtext-lg font-medium relative transition`}>About</Link>
                    </div>
                    <SideCart />
                </div>
                
            </div>
            {/* <div className={`h-[2px] rounded-3xl ${type=='transparent' ? 'bg-gray-400' : 'bg-gray-600 opacity-60'}  max-w-[1150px] mx-auto block mt-4 opacity-70`}/> */}
            
        </div>
    )
}