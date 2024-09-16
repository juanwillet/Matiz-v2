import { cartContext} from "../Context/CartContext";
import { useContext,useState } from "react";

function CartItem() {
    const {cart}= useContext(cartContext)
const [articulos, setArticulos]= useState([cart])
    return (
   <div>
        {articulos.map(prod=> <p>prod.title</p>)}
    </div>
);
}
export default CartItem
