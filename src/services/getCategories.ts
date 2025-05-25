import { API_URL } from "@/utils"
import { headers } from "@/utils/fetchData"


export const getCategories=async()=>{
    
    const res = await fetch(`${API_URL}/categories?populate=*`,{
        headers
    })
    const data = await res.json()

    if(!res.ok)
        throw new Error("Failed fetching categories")

    return data
        
}