import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList.JSX"
function ItemListContainer ({greeting}) {
   
    const [productos, setProductos]= useState([])

    useEffect ( ()=>{
       fetch ('https://api.escuelajs.co/api/v1/products')
        .then (resp=> resp.json())
        .then (resp=> setProductos(resp))
        }, [])
    
    productos.splice(0, 4)
    
    return(
        
        <>
        <h2>
            {greeting}
        </h2><Itemlist productos={productos} />
        </>
        
    )
}
export default ItemListContainer