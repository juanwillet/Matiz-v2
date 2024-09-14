import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList.JSX"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  return (
    <Container>
      <Row>
        <Col>
          <Itemlist productos={productos} />
        </Col>
        <Col>
          <Itemlist productos={productos} />
        </Col>
        <Col>
          <Itemlist productos={productos} />
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer