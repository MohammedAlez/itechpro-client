'use client'

import { useAppSelector } from "@/hooks";
import { initializeCart, removeItem } from "@/state/Cart/cartSlice";
import { SERVER_URL } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdClose, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";





export function SideCart(){

    const [open, setOpen] = useState(false)
    const shoppingCart = useAppSelector(state=>state.cart)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(initializeCart());
    },[dispatch])

    return (
        <div className="">
            <button onClick={()=>setOpen(!open)} className="w-10 h-10 relative rounded-full text-customBlack flex items-center justify-center hover:bg-red-100 transition ">
                <BsHandbag size={25}/>
                <span className="text-white bg-primary absolute -top-0 -right-0 text-sm  flex items-center justify-center rounded-full w-5 h-5">{shoppingCart.length}</span>
            </button>
            {open && <div onClick={()=>setOpen(false)} className={`bg-black opacity-30 fixed top-0 left-0 w-full h-[100vh] z-40`} />}
            <div className={`fixed p-3 z-50 transition-all top-0 ${open ? 'right-0' : 'right-[-1000px]'} w-full sm:w-[330px] md:w-[400px] transition h-[100vh] bg-gray-100`}>
            {
                    shoppingCart.length>0 ?
                        <>
                            <div className="flex justify-end p-2 ">
                                <button onClick={()=>setOpen(!open)} className="flex items-center justify-center rounded-2xl w-10 h-10 bg-gray-200 hover:bg-gray-300 transition ">
                                    <MdClose size={23}/>
                                </button>
                            </div>
                            <div className="mt-6 flex flex-col justify-between h-[calc(100%-90px)] flex-1">
                                <div className="h-[calc(100%_-_80px)] overflow-y-scroll">
                                    {shoppingCart.map(product=>{
                                        return (
                                            <div key={product.id} className="p-2 rounded-lg mb-2 bg-[#8d8c8c15] flex gap-2 ">
                                                
                                                <Image src={product.image} width={80} height={80} alt='' 
                                                    className="rounded-3xl object-cover p-2 min-h-[85px]"
                                                />
                                                <div className="flex-1 py-2 flex flex-col justify-between my-1">
                                                    <h1 className="font-semibold ">{product.title}</h1>
                                                    <div className="font-medium text-green-500 flex gap-1 items-center">
                                                        <span className="flex flex-row-reverse gap-1">
                                                            {product.price},00 <span>DA</span>
                                                        </span> 
                                                        <span className="text-black text-sm">x {product.quantity}</span>
                                                    </div>
                                                </div>
                                                <div className="py-1">
                                                    <button onClick={()=>dispatch(removeItem(product.id))} className="text-customBlack cursor-pointer hover:text-customBlack rounded-full hover:bg-gray-300 h-8 w-8 flex justify-center items-center">
                                                        <MdDelete size={18}/>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="">
                                    {/* <Link href='/cart' className="p-3 mb-14 lg:mb-2 px-5 w-full justify-center items-center transition-all duration-300 flex flex-row-reverse gap-2 rounded-3xl bg-[#5F6C37] group hover:bg-[#6a7a38] text-white font-semibold ">
                                        الذهاب الى السلة 
                                        <span className="text-green transition-all duration-200 relative -right-[10px] opacity-0 group-hover:opacity-100 group-hover:right-0 ">
                                            <FaArrowLeft size={18}/>
                                        </span>  
                                    </Link> */}
                                    <Link onClick={()=>setOpen(false)} href='/cart' className={`inline-flex justify-center hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-full p-4 my- px-4 bg-primary hover:opacity-70 group text-customWhite font-medium `}>
                                        Aller au panier
                                        <span className={`relative group-hover:left-1 left-0  transition-all`}>
                                            <IoIosArrowForward className=""/>
                                        </span>
                                        
                                    </Link>
                                </div>
                            </div>
                        </>
                    :
                        <div className="">
                            <div className="flex justify-end p-2 ">
                                <button onClick={()=>setOpen(!open)} className="flex items-center justify-center rounded-2xl w-10 h-10 bg-gray-200 hover:bg-gray-300 transition ">
                                    <MdClose size={23}/>
                                </button>
                            </div>
                            <div className="flex flex-col gap-10 items-center mt-[20vh]">
                                <Image src='/empty-cart.png' alt="" width={200} height={200} />
                                <Link href='/shop2' onClick={()=>setOpen(false)} className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 text-sm bg-primary hover:opacity-70 group text-customWhite font-medium `}>
                                    Acheter maintenant
                                    <span className={`relative group-hover:left-1 left-0  transition-all`}>
                                        <IoIosArrowForward className=""/>
                                    </span>
                                    
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}