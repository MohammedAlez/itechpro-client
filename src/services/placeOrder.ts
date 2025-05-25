import { API_URL } from "@/utils";
import { headers } from "@/utils/fetchData";



export const placeOrder = async ({cart, userInfo, total_price}:{cart: CartItemState[], userInfo:UserInfo, total_price:number}) => {

    // Place the order
    // try{
        let additionalInfo:any = {};
        // if(userInfo.note.length)
        //     additionalInfo.note = userInfo.note
        // if(userInfo.company.length)
        //     additionalInfo.company = userInfo.company
        // console.log({
        //     total_price,
        //     full_name: userInfo.full_name ,
        //     // email: userInfo.email,
        //     phone_number: userInfo.phone_number,
        //     address: userInfo.address,
        //     note:userInfo.note,
        //     items:cart.map(item=>({
        //         quantity:item.quantity,
        //         product:item.documentId 
        //     }))
        // })
        
        const orderResponse = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers:headers,
            body: JSON.stringify({
                data: {
                    total_price,
                    full_name: userInfo.full_name ,
                    // email: userInfo.email,
                    phone_number: userInfo.phone_number,
                    address: userInfo.wilaya + ' / ' + userInfo.city + ' / ' + userInfo.address,
                    note:userInfo.note,
                    items:cart.map(item=>({
                        quantity:item.quantity,
                        product:item.documentId 
                    }))
                }
            })
        });
        
        if (!orderResponse.ok) {
            throw new Error('Failed to place the order');
        }

        const orderData = await orderResponse.json();
        // console.log(orderData.data.id);
        // console.log(orderData);

        
    
        return orderData
    // }catch(e){
    //     console.log(e)
    // }

};