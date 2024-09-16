import CartItem from "../CartItem/CartItem"
import { cartContext} from "../Context/CartContext";
import { useContext } from "react";
function CartItemList (){ 
    const {cart, agregarProducto, borrar, vaciarCart, cantidadProductos, totalProductos}= useContext(cartContext)
    return(
 <div>
{cart.map (prod=> (
<CartItem prod={prod} key={prod.id}/>
))
}
</div>
    )
}

export default CartItemList