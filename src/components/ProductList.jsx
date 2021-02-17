import 'bootstrap/dist/css/bootstrap.css';
import * as Boot from 'react-bootstrap';
import React, {useContext} from 'react'
import {ProductContext} from "./Context"
import OneProduct from "./Product";


export default function ProductList() {
    const [product,setProduct] = useContext(ProductContext)
    return (
        <Boot.Row >
      
           {
            product.map(item=>{
              return <OneProduct key={item.id} id={item.id} description={item.description} name={item.name} price={item.price} img={item.image} />
            })
           } 
        </Boot.Row>
    )
}
