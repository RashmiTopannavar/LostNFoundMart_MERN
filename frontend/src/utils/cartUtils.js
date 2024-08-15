// export const addDecimals = (num) =>{
//     return (Math.round(num * 100)/100).toFixed(2);
// }

// export const updateCart = (state) =>{

//     //Calculate Items price
//     state.itemPrice = addDecimals(state.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0));

//     //Calculate Shipping price(If order is over 100$ its free, else $10 shipping fee)
//     state.shippingPrice = addDecimals(state.itemPrice > 100? 0: 10);

//     //Calculate Tax price(15% tax)
//     state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

//     //Calculate Total price
//     state.totalPrice = (
//         Number(state.itemPrice) +
//         Number(state.shippingPrice) +
//         Number(state.taxPrice)
//     ).toFixed(2);

//     localStorage.setItem('cart', JSON.stringify(state));

//     return state;
// }

export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    //Calculate items price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price *item.qty, 0));
            
    //Calculate Shipping Price (if Order is more than $100 then free, or else $10 Shipping)
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

    //Calculate tax price(15% tax)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

    //Calculate Total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}