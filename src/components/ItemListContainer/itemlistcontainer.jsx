import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList.JSX"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getProducts from "../../firebase/db";


function ItemListContainer () {

    const [productos, setProductos]= useState([])
    const {categoryId} = useParams()

    useEffect ( ()=>{
        getProducts(setProductos, categoryId)
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