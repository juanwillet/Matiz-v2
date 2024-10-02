import { cartContext} from "../Context/CartContext";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CheckoutList () { 
    const {cart}= useContext(cartContext)
    const [articulos, setArticulos]= useState(cart)

    return (
    <Container>
        <h3>Resumen de compra</h3>
      {articulos.map(art=>      
              
     <Row>
         <Col>
             <Card style={{ width: '18rem' }}>
                 <Card.Body>
                     <Card.Title>{art.title}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">{art.price} x {art.cantidad}</Card.Subtitle>
                 </Card.Body>
             </Card>
         </Col>
     </Row>
                
            )}
    </Container>
        )
    
}

export default CheckoutList