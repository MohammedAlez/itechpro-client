'use client'


import { addItem, removeItem } from '@/state/Cart/cartSlice'
import React, { useState } from 'react'
import { BsHandbag } from 'react-icons/bs'
import { FaLongArrowAltRight, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa6'
import { MdOutlinePayment } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { BuyNowForm } from './BuyNowForm'

export function Buttons({product}:{product:Product}) {
    
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [buyNowDialog, setBuyNowDialog] = useState(false)

    const addToCart=(showToast:boolean)=>{
        dispatch(addItem({
            documentId:product.documentId,
            id:product.id,
            title:product.name,
            image:product.main_image.url,
            quantity,
            price:product.price
        }))
        if(showToast)
            toast.success('Produit ajouté au panier avec succès !')
    }

    return (
        <div className=" mt-10 ">
            <div className="flex gap-3 items-center mb-10">
                <h2 className="text-xl font-bold ">Quantité :</h2>
                <div className="flex gap-3 items-center">
                    <button onClick={(e)=>{
                            e.currentTarget.blur()
                            setQuantity(prev=>quantity===1?prev:prev-1)
                        }} 
                        className="w-7 h-7 md:w-9 md:h-9 rounded-xl focus:scale-90 font-bold flex justify-center items-center text-gray-700 border-gray-300 border-2"
                    >
                        <FaMinus size={17}/>
                    </button>
                    <span className="font-bold text-xl">{quantity}</span>
                    <button onClick={()=>{setQuantity(prev=>prev+1)}} 
                        className="w-7 h-7 md:w-9 md:h-9 rounded-xl focus:scale-90 font-bold flex justify-center items-center text-gray-700 border-gray-300 border-2"
                    >
                        <FaPlus size={17}/>
                    </button>
                </div>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                <button onClick={()=>addToCart(true)} className={`inline-flex justify-center transition-all rounded-3xl overflow-hidden gap-4 items-center w-[300px] p-4 my- px-6 bg-primary hover:opacity-70 group text-customWhite font-medium `}>
                    <BsHandbag size={22}/>
                    Ajouter au panier
                </button>    
                {/* <button 
                    onClick={()=>{
                        addToCart(false)
                        setBuyNowDialog(true)
                    }} 
                    className={`inline-flex justify-center transition-all rounded-3xl overflow-hidden gap-4 items-center w-full p-4 my- px-6 bg-customBlack hover:bg-black group text-customWhite font-medium `}
                >
                    <MdOutlinePayment size={22}/>
                    Acheter maintenant
                </button>     */}
            </div> 

            <div onClick={()=>{
                dispatch(removeItem(product.id))
                setBuyNowDialog(false)
            }} className={`bg-black fixed top-0 left-0 w-full h-[100vh] z-40 transition-all ${buyNowDialog ? 'opacity-30' : 'opacity-0 pointer-events-none'}`} />
            <BuyNowForm buyNowDialog={buyNowDialog}/>
        </div>
    )
}
