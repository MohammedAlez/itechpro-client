import { getCategories } from "@/services/getCategories";
import { useQuery } from "@tanstack/react-query";


export const useCategories=()=>{
    return useQuery({ 
        queryKey: ['categories'], 
        queryFn: getCategories
    })
}