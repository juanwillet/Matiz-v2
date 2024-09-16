import { Link } from "react-router-dom"
import { cartContext} from "../Context/CartContext";
import { useContext } from "react";
const CartWidget = () =>{
    const {cantidadProductos}= useContext(cartContext)
    return (
    <>
    🛒 {cantidadProductos()}
    </>
    )
}
export default CartWidget