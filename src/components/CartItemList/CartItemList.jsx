import { cartContext} from "../Context/CartContext";
import { useContext, useState } from "react";
import Button from "../Button/button";
function CartItemList (){ 
    const {cart,borrar}= useContext(cartContext)
    const [articulos, setArticulos]= useState(cart)
    
            return (
           <div>
                {articulos.map(art=> <>
                    <p>{art.title}</p>
                    <p>{art.price}</p>
                    {/* ojo este boton esta haciendo que el carrito se vacie solo<Button
                                 color= 'white'
                                 label= 'x'
                                 secondColor= 'black'
                                 callback = {borrar(art.id)}
                    /> */}
                </>)}
            </div>
        )
    
}

export default CartItemList