
interface Category {
    id:number
    name:string
    image:{
        url:string
    } 
    has_subcategories:boolean
}


interface SubCategory {
    id:number
    name:string
    image:{
        url:string
    } 
    category:Category
}


interface Product {
    id:number
    documentId:string
    name:string
    description:string
    price:number
    main_image:{
        url:string
    }
    images:{
        url:string
    }[]
    sub_category?:SubCategory
    category?:Category
    related_products:Product[]
    detailed_description:any
}



interface CartItemState { 
    documentId:string
    id:number
    title:string
    price:number
    quantity:number
    image:string
}

interface UserInfo {
    full_name:string,
    // email:string, 
    phone_number:string,
    wilaya:string
    city:string
    address:string,
    note:string,
}   




interface WebsiteInfo {
    title:string
    sub_title:string
    description:string
    home_page_sliders:{
        url:string
    }[]
    contact_phone_number:string
    whatsapp_phone_number:string
    facebook_link:string
    instagram_link:string
}