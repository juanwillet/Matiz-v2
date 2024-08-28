import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList.JSX"
function ItemListContainer ({greeting}) {
   
    const [productos, setProductos]= useState([])

    useEffect ( ()=>{
       fetch ('https://fakestoreapi.com/products')
        .then (resp=> resp.json())
        .then (resp=> setProductos(resp))
        }, [])
    
    //productos.splice(0, 4)
console.log(productos)
    return(
        
        <>
        <h2>
            {greeting}
        </h2><Itemlist productos={productos} />
        </>
        
    )
}
export default ItemListContainer