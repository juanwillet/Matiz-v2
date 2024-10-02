import { cartContext} from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import CartItemList from "../CartItemList/CartItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Cart () {
const {cart, agregarProducto, borrar, vaciarCart, cantidadProductos, totalProductos}= useContext(cartContext)
console.log(cart)
if (cantidadProductos()===0){
 return(
        <div>
         <h1>No hay productos en el carrito</h1>
          <Link to={'/'}>Listado de productos</Link>
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