

import { LaptopNavBar } from "./LaptopNavBar";
import { PhoneNavBar } from "./PhoneNavBar";





export default function NavBar({type}:{type?:string}){



    return (
        <div className="bg-[#f2f2f2]rounded-2xl px-2 mt-2 ">
            <div className="max-w-[1300px] mx-auto z-30 relative bg-gray-100 rounded-3xl shadow-sm " >
                <div className="md:hidden">
                    <PhoneNavBar  type={type}/>
                </div>
                <div className="hidden md:block">
                    <LaptopNavBar  type={type}/>
                </div>
            </div>
        </div>
    )
}