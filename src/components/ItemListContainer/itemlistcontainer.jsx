import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList.JSX"
import { useParams } from "react-router-dom"

function ItemListContainer ({greeting}) {
   
    const [productos, setProductos]= useState([])
    const {categoryId} = useParams()

    const filtro =(prods)=>{
    const productosFiltrados= prods.filter(prod=> prod.category===categoryId)
    setProductos(productosFiltrados)
    }
    useEffect ( ()=>{
     
        fetch ('https://fakestoreapi.com/products')
        .then (resp=> resp.json())
        .then(resp=> { if(!categoryId){
            setProductos(resp)
        }
        else{
            filtro(resp)
        }})
        }, [categoryId])

    return(
        
        <>
        <h2>
            {greeting}
        </h2><Itemlist productos={productos} />
        </>
        
    )
}
export default ItemListContainer