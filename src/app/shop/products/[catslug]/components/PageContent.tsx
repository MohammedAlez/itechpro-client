'use client'

import ProductCard from '@/components/Global/ProductCard';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Filter, { initialFilterOptions, FilterOptions } from './Filter';
import { useProducts } from '@/hooks/useProducts';
import { SomethingWrong } from '@/components/Global/SomethingWrong';
import { NoItemsFound } from '@/components/Global/NoItemsFound';
import LoadingSpinner from '@/components/Global/Loader/LoadingSpinner';





export default function PageContent({catslug}:{catslug:string}) {


    const [filterOptions, setFilterOptions] = useState<FilterOptions>(initialFilterOptions)
    // console.log(filterOptions)
    catslug = catslug.replace('%20', ' ')
    
    // passing subcategory params & type of interface & filter options 
    const {data, isLoading, isFetching, isPending, isError} = useProducts({type:'products_page', subCategory:catslug, filter:filterOptions})

    const products:Product[] = data?.data || []

    return (
            <div className="">
                
                <div className="max-w-[1200px] mx-auto my-20 mt-10 mb-64  px-3">

                    <div className="mb-8 font-bold text-gray-800  flex items-center gap-2">
                        <Link href={'/shop/categories/'} className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                            <IoIosArrowBack size={15} />
                        </Link>
                        Retour aux catégories
                    </div>
                    <h1 className="font-bold text-2xl md:text-4xl">
                        Produit de <span className="first-letter:capitalize inline-block">{decodeURIComponent(catslug?.replaceAll('%20', ' '))}</span>
                    </h1>
                    <Filter filterOptions={filterOptions} setFilterOptions={setFilterOptions} isRefetching={isFetching}/>
                    {isLoading
                    ?
                        <LoadingSpinner height='h-[calc(100vh-300px)]'/>
                    :
                    isError
                    ?
                        <SomethingWrong />
                    :
                    products.length>0
                    ?
                        <>
                            <div className="grid grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-4 ">
                                {products.map(e=><ProductCard key={e.id} product={e}/>)}
                            </div>
                        </>
                    :
                        <NoItemsFound />
                    }
                </div>
                
                
            </div>
    )
}
