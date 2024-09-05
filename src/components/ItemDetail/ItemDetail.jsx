import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ItemDetail  ({producto}) {
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
    <ItemCount
     inicial={1}
     stock={20}
    />
    </>
  );
}

export default ItemDetail