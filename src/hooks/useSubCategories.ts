import { getCategories } from "@/services/getCategories";
import { getSubCategories } from "@/services/getSubCategories";
import { useQuery } from "@tanstack/react-query";


export const useSubCategories=(category:string)=>{
    return useQuery({ 
        queryKey: ['sub-cateogries', category], 
        queryFn: ()=>getSubCategories(category)
    })
}