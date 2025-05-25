import { API_URL } from "@/utils"
import { headers } from "@/utils/fetchData"


export const getProduct=async(productId:string)=>{
    
    // console.log("headersss=====> ", headers)
    const res = await fetch(`${API_URL}/products/${productId}?populate=related_products.main_image&populate=related_products.sub_category&populate=main_image&populate=images`,{
        headers
    })
    const data = await res.json()

    if(!res.ok)
        throw new Error("Failed fetching product")

    return data
        
}