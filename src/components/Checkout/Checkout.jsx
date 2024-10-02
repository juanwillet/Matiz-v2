import CheckoutForm from "../CheckoutForm/CheckoutForm"
import CheckoutList from "../CheckoutList/CheckoutList"
import { crearOrden } from "../../firebase/db"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Checkout () {
    return(
    
    <Container>
        <Row>
          <Col>
             <CheckoutList></CheckoutList>
          </Col>
          <Col>
             <CheckoutForm></CheckoutForm>
           </Col>
        </Row>
    </Container> 
    )

}

export default Checkout