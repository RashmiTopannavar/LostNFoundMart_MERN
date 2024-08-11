import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';


const initialState = localStorage.getItem("cart") 
? JSON.parse(localStorage.getItem('cart'))
: {cartItems: []};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const item = action.payload;        // this is the new item to be added to cart

            const existItem = state.cartItems.find((x)=> x._id === item._id); 
            
            if (existItem){
                state.cartItems = state.cartItems.map((x)=> x._id === 
                existItem._id ? item:x);

            }else{
                state.cartItems=[...state.cartItems, item]      // adding new item to the cart
            }

            return updateCart(state);
        }
    },
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;