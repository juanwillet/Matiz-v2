import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemDetailContainer () {
   
    const [producto, setProducto]= useState([])
    const {detalleId} = useParams()
    useEffect ( ()=>{
     
        fetch (`https://fakestoreapi.com/products/${detalleId}`)
        .then (resp=> resp.json())
        .then(resp=> setProducto(resp))
        
     
        }, [detalleId])
    

    return(
        <Container>
        <Row>
          <Col>
          <ItemDetail producto={producto} />
          </Col>
        </Row>
      </Container>        
    )
}
export default ItemDetailContainer