import React, {useState, createContext, Children} from 'react';
import data from "../data.json"

export const ProductContext = createContext();

export  const ProductProvider=(props) =>{
const [Products, setProducts] = useState(data.products)
    return (
        <ProductContext.Provider value={[Products,setProducts]}>
            {props.children}  
        </ProductContext.Provider>
    )
}
