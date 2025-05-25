import Image from "next/image";
import NavBar from "../Global/NavBar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";




export async function Hero(){


    return (
        <div className={`relative h-[100vh]  px-1 `}>
            <Image src='/bg.png' alt='' fill className="object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"/>
            <div className="rounded-2xl z-40 relative max-w-[1200px] mx-auto top-2">
                <NavBar />
            </div>
            <div className={`rounded-2xl relative max-w-[1200px] mx-auto my-20 mt-28 md:mt-32 md:my-32 text-center `}>
                <h1 className="font-bold md:text-2xl mb-3  text-gray-300 text-lg">Welcome to Taj Informatique</h1>
                <h1 className="font-bold text-3xl  my-6 md:text-5xl  text-gray-100">Powerful Laptops For Every Need</h1>
                <p className={`text-lg sm:text-2xl md:text-2xl max-w-[800px] mx-auto text-customWhite`}>
                    From gaming rigs to professional workstations, find the perfect laptop to match your style and performance requirements.
                </p>
                <div className={`my-10  flex flex-col items-center sm:flex-row gap-5 justify-center `}>
                    {/* <Link href='/contact' className={` block font text-lg rounded-lg w-fit p-2 px-3 bg-secondary text-white  transition`}>{t("NavBar.contact_us")}</Link> */}
                    <Link href='/' className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 bg-primary hover:bg-gray-300 group text-gray-900 font-medium `}>
                        Shop Now
                        <span className={`relative group-hover:left-1 left-0  transition-all`}>
                            <IoIosArrowForward className=""/>
                        </span>
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}