
import React from 'react'
import { PageContent } from './components/PageContent'
import { redirect } from 'next/navigation'




async function  Page({params}:{params:Promise<{category:string}>}) {

    const {category} = (await params)
    
    // console.log(category)
    if(!category){
        redirect('/shop/categories')
    }

   

    return (
        <PageContent category={category}/>
    )
}

export default Page