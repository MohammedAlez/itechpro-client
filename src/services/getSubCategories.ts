import { API_URL } from "@/utils"
import { headers } from "@/utils/fetchData"



export const getSubCategories=async(category:string)=>{

    // const query = encodeURIComponent(category);
    // console.log(API_URL+'/sub-categories?populate=*&filters[category][name][$eqi]='+query)
    // console.log("the category request : ", category.toUpperCase())
    const res = await fetch(API_URL+'/sub-categories?populate=*&filters[category][name][$containsi]='+category,{
    // const res = await fetch(API_URL+'/sub-categories?populate=*',{
        headers:headers 
    })
    if(!res.ok)
        throw new Error("Failed fetching sub-categories")

    const data = await res.json()


    return data
}