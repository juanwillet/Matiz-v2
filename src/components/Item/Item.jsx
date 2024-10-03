import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item ({prod}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image}/>
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
        {prod.price} $
        </Card.Text>
        <Button variant="success" as={Link} to={`/detalle/${prod.id}`}>Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item