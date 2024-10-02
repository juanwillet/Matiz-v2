import { cartContext} from "../Context/CartContext";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "../Button/button";
function CartItemList (){ 
    const {cart, totalProductos, vaciarCart}= useContext(cartContext)
    const [articulos, setArticulos]= useState(cart)
    return (
     <div>
      {articulos.map(art=>      
     <Card style={{ width: '18rem' }}>
         <Card.Body>
              <Card.Title>{art.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{art.price} x {art.cantidad}</Card.Subtitle>
         </Card.Body>
     </Card>)}
     <Card style={{ width: '18rem' }}>
         <Card.Body>
              <Card.Title>Total: $ {totalProductos()}</Card.Title>
              <Button
             color= 'white'
             label= 'Vaciar carrito'
             secondColor= 'black'
             callback = {vaciarCart}
             />
         </Card.Body>
     </Card>
     </div>
        )
    
}

export default CartItemList