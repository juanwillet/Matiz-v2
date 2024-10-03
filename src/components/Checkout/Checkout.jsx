import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Checkout () {
    return(
    
    <Container>
        <Row>
          <Col>
             <CheckoutForm></CheckoutForm>
           </Col>
        </Row>
    </Container> 
    )

}

export default Checkout