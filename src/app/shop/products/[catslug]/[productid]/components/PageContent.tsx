'use client'

import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Images } from './Images'
import { Info } from './Info'
import { Buttons } from './Buttons'
import { RelatedProducts } from './RelatedProducts'
import { useProduct } from '@/hooks/useProduct'
import LoadingSpinner from '@/components/Global/Loader/LoadingSpinner'
import NotFound from '@/app/not-found'
import { NoItemsFound } from '@/components/Global/NoItemsFound'
import DetailedDesc from './DetailedDesc'
import { BlocksContent } from '@strapi/blocks-react-renderer'


type Props = {
    productId:string
}

export function PageContent({productId}:Props){

    const {data, isFetching, isError} = useProduct(productId)
    const product:Product|undefined = data?.data

    // console.log(product)
    // console.log(product?.detailed_desc)

    return (
        <div className="">
            <div className="max-w-[1200px] mx-auto my-20 mt-10 mb-64  px-3">

                {isFetching
                ?
                    <LoadingSpinner height='h-[calc(100vh-30px)]'/>
                :
                product
                ?
                    <>
                        <div className="mb-8 font-bold text-gray-800  flex items-center gap-2">
                            <Link href={'/shop/categories/'} className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                <IoIosArrowBack size={15} />
                            </Link>
                            Retour aux catégories
                        </div>
                        <div className="flex flex-col  gap-10 lg:flex-row">
                            <div className="flex-1 ">
                                <Images product={product}/>
                            </div>
                            <div className="flex-1 ">
                                <Info product={product}/>
                                {product && <Buttons product={product}/>}
                            </div>
                        </div>
                        
                        {product?.detailed_description && <div className="mt-14">
                            <h1 className="font-bold text-xl mb-10">Description</h1>
                             <DetailedDesc content={product.detailed_description as BlocksContent}/>
                        </div>}

                        {/* Related Products */}
                        <div className="my-20">
                            <RelatedProducts relatedProducts={product?.related_products || []}/>
                        </div>
                    </>
                :
                    <>
                        <NoItemsFound />    
                        <div className="flex justify-center">
                            <Link href='/' className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center mx-auto w-fit p-4 my- px-4 bg-customBlack hover:bg-black group text-customWhite font-medium `}>
                                Retournez à l'accueil
                                <span className={`relative group-hover:left-1 left-0  transition-all`}>
                                    <IoIosArrowForward className=""/>
                                </span>
                                
                            </Link>
                        </div>
                    </>
                    
                }
            </div>
        </div>
    )
}