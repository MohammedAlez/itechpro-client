import { getProducts } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";


export type FetchingOptions = {
    type:'featured_products' | 'products_page'
    subCategory?:string
    filter?:{
        searchQuery:string,
        priceRange:{
            min:number
            max?:number
        }
    }
}
export const useProducts=(fetchingOptions:FetchingOptions)=>{
    return useQuery({ 
        queryKey: ['products', fetchingOptions], 
        queryFn: ()=>getProducts(fetchingOptions)
    })
}