import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CheckoutForm({onConfirm}) {
const [nombre, setNombre] = useState()
const [apellido, setApellido] = useState()
const [numero, setNumero] = useState()
const [email, setEmail] = useState()

const handleConfirm =() =>{
const datosUsuario={
    nombre,
    apellido,
    numero,
    email
}
onConfirm(datosUsuario)
}

  return (
   <>
     <h3>Datos de compra</h3>
     <Form>
          <Row>
             <Col>
                 <Form.Control 
                 placeholder="Nombre" 
                 value={nombre}
                 onChange={({target})=> setName(target.value)}
                 />
             </Col>
             <Col>
                 <Form.Control 
                 placeholder="Apellido" 
                 value={apellido}
                 onChange={({target})=> setApellido(target.value)}
                 />
             </Col>
           </Row>
           <Row>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                 <Form.Label>Numero telefonico</Form.Label>
                 <Form.Control 
                 placeholder="Numero telefonico" 
                 value={numero}
                 onChange={({target})=> setNumero(target.value)}
                 />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupEmail">
                 <Form.Label>Email</Form.Label>
                 <Form.Control
                 type="email" placeholder="Email" 
                 value={email}
                 onChange={({target})=> setEmail(target.value)}
                 />
             </Form.Group>
             <Button 
             variant="primary" 
             type="submit"
             onClick={handleConfirm}>
                 Confirmar compra
             </Button>
          </Row>
     </Form>
   </>
  );
}

export default CheckoutForm