import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutList from '../CheckoutList/CheckoutList';
import { cartContext} from "../Context/CartContext";
import { useContext } from "react";
import { serverTimestamp } from "firebase/firestore";
import { crearOrden } from "../../firebase/db";
import { useState } from 'react';
import Compra from '../Compra/Compra';

function CheckoutForm() {

const {cart, totalProductos, vaciarCart}= useContext(cartContext)
const [id,setId]= useState()

const handleConfirm =(event) =>{
 event.preventDefault()
 const nombre=event.target.nombre.value
 const apellido=event.target.apellido.value
 const numero=event.target.numero.value
 const email=event.target.email.value

 const orden={
cliente: {nombre, apellido, numero, email},
productos: cart,
fecha: serverTimestamp(),
total: totalProductos(),
 }

 vaciarCart()

 
 crearOrden(orden)
 .then (resp=> setId(resp))
}

if(id){
    return(
        <Compra codigo={id}></Compra>
    )
 } 

 else{
    return (
        <>
          <h3>Datos de compra</h3>
          <Form
          onSubmit={handleConfirm}
          >
               <Row>
                  <Col>
                      <Form.Group className="mb-3" controlId="nombre">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control 
                          type="text"
                          placeholder="Nombre" 
                          required
                          />
                      </Form.Group>
                  </Col>
                  <Col>
                      <Form.Group className="mb-3" controlId="apellido">
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control 
                          type="text"
                          placeholder="Apellido" 
                          required
                          />
                      </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group className="mb-3" controlId="numero">
                         <Form.Label>Numero telefonico</Form.Label>
                         <Form.Control 
                         type="text"
                         placeholder="Numero telefonico" 
                         required
                         />
                     </Form.Group>
                  </Col>
                  <Col>
                     <Form.Group className="mb-3" controlId="email">
                         <Form.Label>Email</Form.Label>
                         <Form.Control
                         type="email" 
                         placeholder="Email" 
                         required
                         />
                     </Form.Group>
                     <br/>
                     <Button 
                     variant="success" 
                     type="submit"
                     >
                         Confirmar compra
                     </Button>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <CheckoutList></CheckoutList>
                  </Col>
               </Row>
          </Form>
        </>
       );
}
}

export default CheckoutForm