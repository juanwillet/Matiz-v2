import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CheckoutForm({onConfirm}) {
const [nombre, setNombre] = useState()
const [apellido, setApellido] = useState()
const [numero, setNumero] = useState()
const [email, setEmail] = useState()

const handleConfirm =(event) =>{
 event.preventDefault()

 const datosUsuario={
    nombre,
    apellido,
    numero,
    email
 }
 console.log(datosUsuario)
 onConfirm(datosUsuario)
}

  return (
   <>
     <h3>Datos de compra</h3>
     <Form>
          <Row>
             <Col>
                 <Form.Label>Nombre</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Nombre" 
                 value={nombre}
                 onChange={({target})=> setNombre(target.value)}
                 required
                 />
             </Col>
             <Col>
                 <Form.Label>Apellido</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Apellido" 
                 value={apellido}
                 onChange={({target})=> setApellido(target.value)}
                 required
                 />
             </Col>
           </Row>
           <Row>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                 <Form.Label>Numero telefonico</Form.Label>
                 <Form.Control 
                 type="text"
                 placeholder="Numero telefonico" 
                 value={numero}
                 onChange={({target})=> setNumero(target.value)}
                 required
                 />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupEmail">
                 <Form.Label>Email</Form.Label>
                 <Form.Control
                 type="email" 
                 placeholder="Email" 
                 value={email}
                 onChange={({target})=> setEmail(target.value)}
                 required
                 />
                 <br/>
             <Button 
              variant="primary" 
              type="submit"
              onSubmit={handleConfirm}>
                 Confirmar compra
             </Button>
             </Form.Group>
          </Row>
     </Form>
   </>
  );
}

export default CheckoutForm