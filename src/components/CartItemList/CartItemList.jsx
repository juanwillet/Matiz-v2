import { cartContext} from "../Context/CartContext";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "../Button/button";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartItemList (){ 
    const {cart, totalProductos, vaciarCart}= useContext(cartContext)
    
    return (
    <Container>
      {cart.map(art=>      
        
     <Row>
         <Col>
             <Card style={{ width: '18rem' }}>
                 <Card.Body>
                     <Card.Title>{art.title}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{art.price} x {art.cantidad}</Card.Subtitle>
                 </Card.Body>
             </Card>
         </Col>
         <Col>
             <Card style={{ width: '18rem' }}>
                 <Card.Body>
                     <Card.Img variant="top" src={art.image} />
                 </Card.Body>
             </Card>
         </Col>
     </Row>
                
            )}
     <Row>
         <Card style={{ width: '18rem' }}>
             <Card.Body>
                 <Card.Title>Total: $ {totalProductos()}</Card.Title>
                 <Button
                 color= 'white'
                 label= 'Vaciar carrito'
                 secondColor= 'black'
                 callback = {vaciarCart}
                 />
                 <Card.Title as={Link} to= {'/checkout'}>Checkout 💸</Card.Title>
             </Card.Body>
         </Card>
     </Row>
    </Container>
        )
    
}

export default CartItemList