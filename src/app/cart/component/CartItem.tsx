'use client'

import { addItem, removeItem } from "@/state/Cart/cartSlice"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import Link from "next/link"
import { SERVER_URL } from "@/utils"



export default function CartItem({item}:{item:CartItemState}){

    const [quantity, setQuantity] = useState<number>(item.quantity)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addItem({...item,quantity}))
    },[dispatch, item, quantity])

    
    return (
        <tr  className="">
            <td className="p-1 py-[10px]">
                <div className="relative min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]">
                    <Image width={40} height={40} className='rounded-full min-h-[40px]' src={item.image} alt=''/>
                </div>
            </td>
            <td className="p-1 py-[10px] text-gray-600">
                <Link href={`/shop/products/c/${item.documentId}`}
                >{item.title}</Link>
            </td>
            <td className="p-1 py-[10px] text-gray-600">
                <div className="flex gap-1 items-center">
                    <button onClick={()=>setQuantity(prev=>prev==1?1:prev-1)} className="rounded-full bg-slate-200 min-w-5 h-5 flex justify-center items-center">
                        <ChevronDown size={14}/>
                    </button>
                    <span className="block mx-1 font-bold text-sm">{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>prev+1)} className=" rounded-full bg-slate-200 min-w-5 h-5 flex justify-center items-center">
                        <ChevronUp size={14}/>
                        
                    </button>
                </div>
            </td>
            <td className="p-1 py-[10px] text-gray-600">{item.price*item.quantity}DA</td>
            <td >
                <button onClick={()=>dispatch(removeItem(item.id))} className="p-1 py-[10px] text-black w-7 h-7 rounded-full hover:bg-gray-100 transition flex justify-center items-center">
                    <X size={16}/>
                </button>
            </td>
        </tr>
    )
}
