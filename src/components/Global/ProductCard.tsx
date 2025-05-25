'use client'

import { addItem } from "@/state/Cart/cartSlice";
import { SERVER_URL } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "sonner";




export default function ProductCard({product}:{product:Product}){

    const dispatch = useDispatch()

    // console.log(product)
    const addToCart=()=>{
        if(product)
            dispatch(addItem({
                documentId:product.documentId,
                id:product.id,
                title:product.name,
                image:product.main_image.url,
                quantity:1,
                price:product.price
            }))
        toast.success('Produit ajouté au panier avec succès !')
    }

    return (
        <div className="relative overflow-hidden rounded-3xl bg-[#f6f6f6] p-2 group">
            <Link href={'/shop/products/category/'+product.id} className="relative w-full sm:min-h-[200px] min-h-[170px] block">
                <Image src={product.main_image.url} alt='' fill className="object-cover rounded-3xl bg-gray-200"/>
            </Link>
            <div className="mt-2">
                {/* <span className="text-gray-500 text-sm inline-block mb-1">Laptops</span> */}
                <Link href={'/shop/products/category/'+product.id} className="font-medium  text-sm md:text-lgd sm:text-base block mt-2">{product.name}</Link>
                <div className="flex gap-2 items-end">
                    <span className="text-green-600 block w-full my-1 font-medium">{product.price}Da</span>
                    {/* <del className="text-gray-600 text-sm">{product.price}Da</del> */}
                </div>
            </div>
            {/* <button onClick={addToCart} className="bg-primary flex gap-2 items-center justify-center text-white w-[80%] mx-auto rounded-3xl p-2 py-3 mt-1">
                <FaPlus size={20} /> Add to Cart
            </button> */}
            <div onClick={addToCart} style={{transition:'0.1s'}} className="cursor-pointer h-7 w-7 bottom-3  right-3 transition flex justify-center items-center text-white rounded-full bg-primary absolute ">
                <FaPlus size={20} />
            </div>
        </div>
    )
}
// export default function ProductCard({product}:{product:Product}){

//     const dispatch = useDispatch()

//     // console.log(product)
//     const addToCart=()=>{
//         dispatch(addItem({
//             documentId:product.documentId,
//             id:product.id,
//             title:product.name,
//             image:product.main_image.url,
//             quantity:1,
//             price:product.price
//         }))
//         toast.success('Produit ajouté au panier avec succès !')
//     }

//     // console.log(product)
//     const redirectLink = product?.sub_category 
//                          ? `/shop/products/${product.sub_category.name}/${product.documentId}` 
//                          : product?.category 
//                          ? `/shop/products/${product?.category.name}/${product.documentId}` 
//                          : `/shop/products/c/${product.documentId}`
//     return (
//         <div className="relative overflow-hidden rounded-2xl bg-[#f6f6f6] p-2 group">
//             <Link href={redirectLink} className="relative w-full sm:min-h-[200px] min-h-[170px] block">
//                 <Image src={SERVER_URL + product?.main_image?.url} alt='' fill className="object-contain rounded-2xl bg-gray-200"/>
//             </Link>
//             <div className="mt-2">
//                 <span className="text-gray-500 text-sm inline-block mb-1">{product?.sub_category?.name || product?.category?.name}</span>
//                 <Link href={redirectLink} className="font-medium text-sm sm:text-base block">{product?.name}</Link>
//                 <div className="flex gap-2 items-end">
//                     <span className="text-green-600 ">{product?.price}Da</span>
//                     {/* <del className="text-gray-600 text-sm">{product.price}Da</del> */}
//                 </div>
//             </div>
//             <div onClick={addToCart} style={{transition:'0.1s'}} className="cursor-pointer h-8 w-8 -bottom-10 group-hover:bottom-3 opacity-0 group-hover:opacity-100 right-3 transition flex justify-center items-center text-white rounded-full bg-customBlack absolute ">
//                 <FaPlus size={20} />
//             </div>
//         </div>
//     )
// }