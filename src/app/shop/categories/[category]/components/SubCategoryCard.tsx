import { SERVER_URL } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { IoIosArrowForward } from 'react-icons/io'



// export async function SubCategoryCard({subCategory, params}:{subCategory:SubCategory, params:Promise<{category:string}>}) {

//   const category = (await params).category
//   console.log("from the subcategory card  ", category)
export function SubCategoryCard({subCategory, category}:{subCategory:SubCategory, category:string}) {


  return (
    // <Link href={'/'} className='relative rounded-3xl overflow-hidden h-52 md:h-64 group'>
    <Link href={'/shop/products/'+subCategory.name} className='relative rounded-3xl overflow-hidden h-52 md:h-64 group'>
        <Image src={SERVER_URL + subCategory.image.url} alt='' fill className='group-hover:scale-110 transition object-cover'/>
        <div className="bg-black opacity-50 group-hover:opacity-30 absolute top-0 left-0 h-full w-full" />
        <div className="h-full flex justify-between relative z-10 p-5 md:p-8 items-end ">
            <h2 className="text-customWhite  font-bold text-xl md:text-4xl first-letter:capitalize">{subCategory.name}</h2>
            {/* <Link href='/' className={`inline-flex group h-fit  text-sm md:text-base transition-all rounded-3xl overflow-hidden gap-2  items-center w-fit p-3 md:p-4 bg-customWhite hover:bg-gray-100 group text-customBlack font-medium `}>
                Shop Now
                <span className={`relative group-hover:left-1 left-0  transition-all`}>
                    <IoIosArrowForward className=""/>
                </span>
                
            </Link> */}
        </div>
    </Link>
  )
}
