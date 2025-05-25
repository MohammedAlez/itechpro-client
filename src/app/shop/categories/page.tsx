'use client'


import React from 'react'
import { CategoryCard } from './components/CategoryCard'
import { useCategories } from '@/hooks/useCategories';
import LoadingSpinner from '@/components/Global/Loader/LoadingSpinner';
import Image from 'next/image';
import { SomethingWrong } from '@/components/Global/SomethingWrong';
import { NoItemsFound } from '@/components/Global/NoItemsFound';




function page() {

    const {data, isFetching, isError} = useCategories();
        
    const categories:Category[] = data?.data || []
    // console.log(categories)


    return (
        <div className="">
                
            {isFetching
            ?
                <LoadingSpinner height='h-[calc(100vh-30px)]'/>
            :
            isError
            ?
                <SomethingWrong />
            :
                <div className="max-w-[1200px] mx-auto my-20 mb-64  px-3 md:px-10 ">
                    <h1 className="font-bold text-2xl md:text-4xl">
                        Acheter par catégorie
                    </h1>
                    {categories.length>0
                    ?
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-6 md:gap-10">
                            {categories.map(category=>{
                                return(
                                    <CategoryCard key={category.id} category={category}/>
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

export default page