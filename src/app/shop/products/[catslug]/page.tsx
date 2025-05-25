import ProductCard from '@/components/Global/ProductCard';
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Filter from './components/Filter';
import PageContent from './components/PageContent';
import { redirect } from 'next/navigation';



export default async function Page({params}:{params:Promise<{catslug:string}>}) {

    const {catslug} = (await params)
    // console.log("the Category params  from " + category)

    if(!catslug){
        redirect('/shop/categories')
    }

    return (
        <>
            <PageContent catslug={catslug}/>
        </>
    )
}
