import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";
import { Link } from "react-router-dom";
import { cartContext} from "../Context/CartContext";
import { useContext } from "react";

function ItemDetail  ({producto}) {
  const [cantidadAgregada, setCantidadAgregada]= useState(0)
  const handleAdd =(cantidad) =>{
       setCantidadAgregada(cantidad)
       agregarProducto(producto, cantidad)
  }

  const {agregarProducto, cart}= useContext(cartContext)
  console.log(cart)
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
         <Card.Title>{producto.title}</Card.Title>
         <Card.Text>
              {producto.description}
          </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
          <ListGroup.Item>{producto.price} $</ListGroup.Item>
      </ListGroup>
    </Card>
    <div>
    {cantidadAgregada > 0 ?(<Link to={'/cart'}>Terminar compra</Link>)
    :
    (<ItemCount
       inicial={1}
       stock={20}
       onAdd={handleAdd}
    />)
    }
    </div>

    </>
  );
}

export default ItemDetail