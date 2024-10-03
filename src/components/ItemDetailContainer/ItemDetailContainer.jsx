import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProductsById } from "../../firebase/db";

function ItemDetailContainer () {
   
    const [producto, setProducto]= useState([])
    const {detalleId} = useParams()
    useEffect ( ()=>{
        getProductsById(setProducto, `${detalleId}`)
     
        }, [detalleId])
    
    return(
        <Container>
        <Row>
          <Col>
           <ItemDetail key= {detalleId} producto={producto} />
          </Col>
        </Row>
      </Container>        
    )
}
export default ItemDetailContainer