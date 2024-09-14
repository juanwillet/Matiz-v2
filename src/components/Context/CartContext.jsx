import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext({cart:[]})

export function CartContextProvider ({children}) {

const [cart, setCart]= useState([])

const buscarEnCarrito = (id) =>{
return cart.some(item=> item.id===id)
}

const agregarProducto = (producto, cantidad) =>{
if (!buscarEnCarrito(producto.id)){
setCart(prev=> [...prev, {...producto,cantidad}])
}
}

const borrar = (id) =>{
const cartActualizado = cart.filter(prod=> prod.id !== id)
setCart(cartActualizado)
}

const vaciarCart = () =>{
    setCart([])
}

return (
    <cartContext.Provider value={{cart, agregarProducto, borrar, vaciarCart}}>
        {children}
    </cartContext.Provider>
)
}