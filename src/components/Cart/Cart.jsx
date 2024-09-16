import { cartContext} from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import CartItemList from "../CartItemList/CartItemList";
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
  
        <CartItemList/>
        <h3>Total: $ {totalProductos()}</h3>
        <Button
             color= 'white'
             label= 'Vaciar carrito'
             secondColor= 'black'
             callback = {vaciarCart}
          />

     </div>
)


}

export default Cart