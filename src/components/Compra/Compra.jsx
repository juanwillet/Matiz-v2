import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Compra ({codigo}) {
return(
<Container>
 <Row>
     <Col>
         <Card style={{ width: '18rem' }}>
             <Card.Body>
                  <Card.Title>Hemos registrado tu compra con exito! 🥳</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">El id de tu orden es: {codigo}</Card.Subtitle>
                      <Button 
                      variant="success" 
                      as={Link} to= {'/'}
                      >
                         Volver a la tienda
                     </Button>
             </Card.Body>
         </Card>
     </Col>
 </Row>
</Container>
)
}
export default Compra