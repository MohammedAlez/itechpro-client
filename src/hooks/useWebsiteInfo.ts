import { getWebsiteInfo } from "@/services/getWebsiteInfo";
import { useQuery } from "@tanstack/react-query";



export const useWebsiteInfo=()=>{
    return useQuery({ 
        queryKey: ['website-info'], 
        queryFn: getWebsiteInfo
    })
}