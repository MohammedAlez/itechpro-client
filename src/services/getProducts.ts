import { FetchingOptions } from "@/hooks/useProducts"
import { API_URL } from "@/utils"
import { headers } from "@/utils/fetchData"



export const getProducts=async(fetchingOptions:FetchingOptions)=>{

    

    // const res = await fetch(API_URL+'/products?populate[sub_category][populate][0]=category&populate=main_image'+query(fetchingOptions),{
    const res = await fetch(API_URL+'/products?populate=category&populate=sub_category&populate=main_image'+query(fetchingOptions),{
        headers:headers
    })
    if(!res.ok)
        throw new Error("Failed fetching products")

    const data = await res.json()


    
        return data
    
}


function query(fetchingOptions:FetchingOptions){

    let query = ''
    if(fetchingOptions.type==='products_page'){
        if(fetchingOptions?.subCategory)
            // query += '&filters[sub_category][name][$eq]='+fetchingOptions.subCategory
            query += "&filters[$or][0][sub_category][name][$containsi]=" + fetchingOptions.subCategory;
            query += "&filters[$or][1][category][name][$containsi]=" + fetchingOptions.subCategory;
        if(fetchingOptions.filter?.searchQuery)
            // query += '&filters[sub_category][name][$eq]='+fetchingOptions.filter.searchQuery
            query += `&filters[$or][0][name][$containsi]=${fetchingOptions.filter.searchQuery}&filters[$or][1][description][$containsi]=${fetchingOptions.filter.searchQuery}`
        
        if(fetchingOptions?.filter?.priceRange?.min)
            query += '&filters[price][$gte]='+fetchingOptions.filter?.priceRange.min
        if(fetchingOptions?.filter?.priceRange?.max)
            query += '&filters[price][$lte]='+fetchingOptions.filter?.priceRange.max


    }else if(fetchingOptions.type=='featured_products'){
        query += '&filters[featured_products][$eq]=true'
    }

    query += '&filters[available][$eq]=true'

    return query


}