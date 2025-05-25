import { BiWorld } from "react-icons/bi";
import { CiBoxes } from "react-icons/ci";
import { PiPackage } from "react-icons/pi";






export async function Services(){




    return (
        <div className="max-w-[1300px] px-3 mx-auto my-32 flex flex-col gap-4 items-center lg:flex-row lg:justify-center">

            <div className="relative lg:-right-10 flex flex-col max-w-[400px] min-w-[320px] items-center gap-4 text-main bg-customWhite text-customBlack border borde p-8 px-1 rounded-[40px]">
                <div className="">
                    <PiPackage size={70}/>
                </div>
                <h1 className="font-bold text-2xl text-main max-w-60 text-center">Free Shipping</h1>
            </div>
            <div className="relative z-10 flex flex-col max-w-[400px] min-w-[320px] items-center gap-4 text-customWhite bg-customBlack bg-main p-12 px-1 rounded-[40px]">
                <div className="">
                    <BiWorld size={80}/>
                </div>
                <h1 className="font-bold text-2xl text-[#e4e3e3] max-w-60 text-center">Cash On Delivery</h1>
            </div>
            <div className="relative lg:-left-10 flex flex-col max-w-[400px] min-w-[320px] items-center gap-4 text-main bg-customWhite text-customBlack border borde p-8 px-1 rounded-[40px]">
                <div className="">
                    <CiBoxes size={70}/>
                </div>
                <h1 className="font-bold text-2xl text-main max-w-60 text-center">Repair & Upgrade</h1>
            </div>

        </div>
    )
}