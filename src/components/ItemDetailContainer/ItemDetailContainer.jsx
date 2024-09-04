import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
function ItemDetailContainer ({greeting}) {
   
    const [producto, setProducto]= useState([])
    const {detalleId} = useParams()
    // const filtro =(prod)=>{prod.id.filter(detalleId)}
    useEffect ( ()=>{
     
        fetch (`https://fakestoreapi.com/products/${detalleId}`)
        .then (resp=> resp.json())
        .then(resp=> setProducto(resp))
        
     
        }, [detalleId])
    
console.log(producto)
    return(
        
        <>
        <h2>
            {greeting}
        </h2><ItemDetail producto={producto} />
        </>
        
    )
}
export default ItemDetailContainer