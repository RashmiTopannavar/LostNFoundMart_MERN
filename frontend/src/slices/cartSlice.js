import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem("cart") 
? JSON.parse(localStorage.getItem('cart'))
: {cartItems: []};

const addDecimals = (num) =>{
    return (Math.round(num * 100)/100).toFixed(2);
}

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

            //Calculate Items price
            state.itemPrice = addDecimals(state.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0));

            //Calculate Shipping price(If order is over 100$ its free, else $10 shipping fee)
            state.shippingPrice = addDecimals(state.itemPrice > 100? 0: 10);

            //Calculate Tax price(15% tax)
            state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

            //Calculate Total price
            state.totalPrice = (
                Number(state.itemsPrice)+
                Number(state.shippingPrice)+
                Number(state.taxPrice)
            ).toFixed(2);

            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;