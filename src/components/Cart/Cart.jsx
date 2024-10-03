import { cartContext} from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CartItemList from "../CartItemList/CartItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Cart () {
const {cart, cantidadProductos}= useContext(cartContext)
console.log(cart)
if (cantidadProductos()===0){
 return(
        <div>
         <h1>No hay productos en el carrito</h1>
          <Button 
              variant="light" 
              as={Link} to= {'/'}
              >
                 Volver a la tienda
             </Button>
        </div>
    )
}
return(
 <div>
     <Container>
         <Row>
             <Col>
                 <CartItemList/>
             </Col>
         </Row>
     </Container>
 </div>
)


}

export default Cart