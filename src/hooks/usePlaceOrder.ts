import { placeOrder } from "@/services/placeOrder";
import { useMutation } from "@tanstack/react-query";


export const usePlaceOrder=()=>{
    return useMutation({
        mutationFn:placeOrder
    });
}