import { getProduct } from "@/services/getProduct";
import { useQuery } from "@tanstack/react-query";


export const useProduct=(productId:string)=>{
    return useQuery({ 
        queryKey: ['product', productId], 
        queryFn: ()=>getProduct(productId)
    })
}