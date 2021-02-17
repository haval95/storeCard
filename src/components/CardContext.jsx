
import React, {useState, createContext, Children, useContext} from 'react';

import {ProductContext} from "./Context"

export const CardContext = createContext();

export  const CardProvider=(props) =>{
   // const [productInstro, setProductInStore] = useContext(ProductContext)
const [CardItem, setCardItem] = useState([])
    return (
        <CardContext.Provider value={[CardItem, setCardItem]}>
            {props.children}  
        </CardContext.Provider>
    )
}
