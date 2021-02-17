import React, {useContext,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import * as Boot from 'react-bootstrap';
import {CardContext} from "./CardContext"

export default function Card() {
    const [items,setItem] = useContext(CardContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteItem=(item)=>{
        let newItems = [...items]; // make a separate copy of the array
        let index = newItems.indexOf(item)
        if (index !== -1) {
            newItems.splice(index, 1);
            setItem(newItems);
        }
    
      console.log(  items.indexOf(item))
    }
    
    
    return (
        <React.Fragment>
            <Boot.Button  variant="outline-warning" className="m-3 btn-lg  " onClick={handleShow}>
            Card: {items.length}
            </Boot.Button>


            <Boot.Modal show={show} onHide={handleClose}>
                <Boot.Modal.Header closeButton>
                    <Boot.Modal.Title>Your Card Items</Boot.Modal.Title>
                </Boot.Modal.Header>
                <Boot.Modal.Body>
                    <Boot.Row >
                    <Boot.Col className="font-weight-bold">Name</Boot.Col>
                    <Boot.Col className="font-weight-bold">Price $</Boot.Col>
                    <Boot.Col className="font-weight-bold">Price $</Boot.Col>
                    </Boot.Row>
                        {
                            items.map((item,index)=>{
                                return(
                                    <Boot.Row key={index}>
                                        <Boot.Col>{item.name}</Boot.Col>
                                        <Boot.Col>{item.price} $</Boot.Col>
                                        <Boot.Col><Boot.Button variant="link" size="sm" className=" text-danger" onClick={()=>deleteItem(item)}>X</Boot.Button></Boot.Col>  
                                    </Boot.Row>
                                )
                            })
                        }
                    
                </Boot.Modal.Body>
                <Boot.Modal.Footer>
                <Boot.Button variant="outline-secondary" onClick={handleClose}>
                    Close
                </Boot.Button>
                <Boot.Button variant="warning" onClick={handleClose}>
                    Save Changes
                </Boot.Button>
                </Boot.Modal.Footer>
            </Boot.Modal>
        </React.Fragment>
       
      
    )
}
