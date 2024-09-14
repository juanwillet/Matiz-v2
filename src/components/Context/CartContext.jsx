import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

export const cartContextProvider =({children})=>{

const [cart, setCart]= useState([])

const buscarEnCarrito = (id) =>{
return cart.some(item=> item.id===id)
}

const agregarProducto = (producto, cantidad) =>{
if (!buscarEnCarrito(producto.id)){
setCart([{...producto,cantidad}])
console.log(cart)
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