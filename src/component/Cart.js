import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
const Cart = () =>{
    const {} = useContext(CartContext);
        return(
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:"100px"}}>
            <h1>Shopping Cart</h1></div>
        </div>
    );
}
export default Cart;