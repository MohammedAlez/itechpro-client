'use client'

import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io"
import { SubCategoryCard } from "./SubCategoryCard"
import { useSubCategories } from "@/hooks/useSubCategories"
import { SomethingWrong } from "@/components/Global/SomethingWrong"
import { NoItemsFound } from "@/components/Global/NoItemsFound"
import LoadingSpinner from "@/components/Global/Loader/LoadingSpinner"




export function PageContent({category}:{category:string}){

    // category = category.replace('%20', ' ')
    const {data, isError, isFetching} = useSubCategories(decodeURIComponent(category?.replaceAll('%20', ' ')))
    // console.log("sub categories related to category: ", data)
    const subCategories:SubCategory[] = data?.data || []


    return (
        <div className="">
            {isFetching
            ?
                <LoadingSpinner height="h-[calc(100vh-30px)]"/>
            :
            isError
            ?
                <SomethingWrong />
            :
                <div className="max-w-[1200px] mx-auto my-20 mb-64  px-3">
                        <div className="mb-8 font-bold text-gray-800  flex items-center gap-2">
                            <Link href={'/shop/categories'} className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
                                <IoIosArrowBack size={15} />
                            </Link>
                            Retour aux catégories
                        </div>
                        <h1 className="font-bold text-2xl md:text-4xl">
                            Catégories de <span className="first-letter:capitalize inline-block ">{decodeURIComponent(category?.replaceAll('%20', ' '))}</span>
                        </h1>
                        {
                        subCategories.length>0
                        ?
                            <div className="grid grid-cols-2 md:grid-cols-3 mt-20 gap-3 md:gap-10">
                                {subCategories.map(subcategory=>{
                                    return(
                                        <SubCategoryCard key={subcategory.id} subCategory={subcategory} category={category} />
                                    )
                                })}
                            </div>
                            :
                            <NoItemsFound />
                        
                        }
                        
                </div>
            }
            

        </div>
    )
}