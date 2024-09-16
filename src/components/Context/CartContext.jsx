import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext({cart:[]})

export function CartContextProvider ({children}) {

const [cart, setCart]= useState([])
const [total, setTotal]= useState(0)
const [cantidadDeProductos, setCantidadDeProductos]= useState(0)


const cantidadProductos = () =>{
    setCantidadDeProductos(cart.length)
    return cantidadDeProductos
    }
    
const totalProductos = () =>{
        return total
        }

const buscarEnCarrito = (id) =>{
return cart.some(item=> item.id===id)
}

const agregarProducto = (producto, cantidad) =>{
if (!buscarEnCarrito(producto.id)){
setCart(prev=> [...prev, {...producto,cantidad}])
}
setTotal(total+producto.price*cantidad)
}

const borrar = (id) =>{
const cartActualizado = cart.filter(prod=> prod.id !== id)
setCart(cartActualizado)
}

const vaciarCart = () =>{
    setCart([])
}

return (
    <cartContext.Provider value={{cart, agregarProducto, borrar, vaciarCart, cantidadProductos, totalProductos}}>
        {children}
    </cartContext.Provider>
)
}