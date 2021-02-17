
import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import * as Boot from 'react-bootstrap';
import {CardContext} from "./CardContext";

export default function Product(item) {
    const [CardItem,setCardItem] = useContext(CardContext)
    
    const addToCard=()=>{
       setCardItem([...CardItem, item])
    }

    return (
       <Boot.Col xs md={6} lg={3}  >
       <Boot.Card    className="  text-center bg-info text-light p-1">
       <Boot.Card.Header>{item.name}</Boot.Card.Header>
       <Boot.Card.Img src={item.img}  height="200" variant="top"  className=" border-info mt-1"  />
       <Boot.Card.Body>
         
               
               <p> {item.description}</p>
               <h3> {item.price}$</h3>
           
      </Boot.Card.Body>

      <div >
           <Boot.Button onClick={addToCard} className="mb-2 btn-warning">Add to Cart</Boot.Button>
      </div>
       
   </Boot.Card>
       
       </Boot.Col>
    )
}
