'use client'

import { PayloadAction, createSlice } from "@reduxjs/toolkit";






// const cart = localStorage.getItem('taj-shopping-cart')
const initialState:CartItemState[] = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        initializeCart: (state) => {
            if (typeof window !== "undefined") {
                const cart = sessionStorage.getItem('taj-shopping-cart');
                
                return cart ? JSON.parse(cart) : [];
            }
            return state;
        },
        addItem:(state, action:PayloadAction<CartItemState>)=>{
            const item = state.findIndex((e)=>e.id===action.payload.id)
            if(item===-1)
                state.push(action.payload);
            else{
                state[item].quantity = action.payload.quantity;
                
            }
            sessionStorage.setItem('taj-shopping-cart',JSON.stringify(state))
        },
        removeItem:(state, action:PayloadAction<number>)=>{
            const newState = state.filter(e=>e.id!=action.payload);
            sessionStorage.setItem('taj-shopping-cart',JSON.stringify(newState))
            return newState
        },
        resetCart:()=>{
            sessionStorage.removeItem('taj-shopping-cart');
            return initialState
        }
    }
})

export const { addItem, removeItem, initializeCart, resetCart } = cartSlice.actions
export default cartSlice.reducer
