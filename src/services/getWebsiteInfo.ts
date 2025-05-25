import { FetchingOptions } from "@/hooks/useProducts"
import { API_URL } from "@/utils"
import { headers } from "@/utils/fetchData"



export const getWebsiteInfo=async()=>{



    const res = await fetch(API_URL+'/website-information?populate=*',{
        headers:headers
    })
    if(!res.ok)
        throw new Error("Failed fetching products")

    const data = await res.json()


    return data
}
