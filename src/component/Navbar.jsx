import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    return(
        <>
            <nav>
                <ul className="left">
                    <li><Link to="/">Mart</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="cart">
                        <span className="shoppingCart">
                            <i className="fa fa-cart-plus"></i>
                            <span className="cartCount">0</span>
                        </span>
                    </Link></li>
                </ul>
            </nav>
        </>
    
    )}
    export default Navbar;
