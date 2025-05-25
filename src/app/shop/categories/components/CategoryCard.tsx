import { SERVER_URL } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export function CategoryCard({category}:{category:Category}) {

  // console.log(category)
  const redirectLink = category?.has_subcategories ? '/shop/categories/'+category.name : '/shop/products/'+category.name
  return (
    <div className='relative rounded-3xl overflow-hidden h-52 md:h-64'>
        <Image src={SERVER_URL+category.image.url} alt='' fill className='group-hover:scale-105 transition object-cover'/>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-black/0" />
        <div className="h-full flex justify-between relative z-10 p-4 md:p-8 items-end gap-2">
            <h2 className="text-customWhite  font-bold text-lg md:text-2xl first-letter:capitalize">{category.name}</h2>
            <Link href={redirectLink} className={`min-w-fit inline-flex group h-fit  text-sm md:text-base transition-all rounded-3xl overflow-hidden gap-2  items-center w-fit p-3 md:p-4 bg-customWhite hover:bg-gray-100 group text-customBlack font-medium `}>
              Achetez
                <span className={`relative group-hover:left-1 left-0  transition-all`}>
                    <IoIosArrowForward className=""/>
                </span>
                
            </Link>
        </div>
    </div>
  )
}
