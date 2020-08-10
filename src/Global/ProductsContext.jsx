import React, { createContext, useState } from 'react';
import iphone from '../assets/iphone.jpg';
import dslr from '../assets/dslr.jpg';
import headphone from "../assets/headphone.jpg";
import microphone from "../assets/microphone.jpg";
import perfume from "../assets/perfume.jpg";
import ring from "../assets/ring.jpg";
import shoes from "../assets/shoes.jpg";
import  watch from "../assets/watch.jpg";
export const ProductsContext = createContext();
const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id:1, name:"Iphone" ,price:400, image:iphone, status:"Hot"},
        {id:2, name:"Dslr" ,price:300, image:dslr, status:"New"},
        {id:3, name:"Micro Phone" ,price:40, image:microphone, status:"New"},
        {id:4, name:"HeadPhones" ,price:100, image:headphone, status:"Hot"},
        {id:5, name:"Perfume" ,price:60, image:perfume, status:"Hot"},
        {id:6, name:"Rings" ,price:200, image:ring, status:"New"},
        {id:7, name:"Shoes" ,price:230, image:shoes, status:"Hot"},
        {id:8, name:"Watch" ,price:30, image:watch, status:"New"}
    ])
    return(
        <>
        <ProductsContext.Provider value={{products:[...products]}}>
                {props.children}
        </ProductsContext.Provider>

        </>
    );
}
export  default ProductsContextProvider;