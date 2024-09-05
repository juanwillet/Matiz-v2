import { useState } from "react";
import Button from "../Button/button";
import Card from 'react-bootstrap/Card';

function ItemCount ({inicial, stock}) {

 const [cantidad, setCantidad] = useState(inicial)

const suma = () => {
    if (cantidad<stock){
        setCantidad(cantidad + 1)
    }
}

const resta = () => {
    if (cantidad>1){
        setCantidad(cantidad - 1)
    }
}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
         <Card.Title>
          <Button
             color= 'white'
             label= 'Agregar al carrito'
             secondColor= 'black'
             callback = {()=> console.log('Cantidad agregada: '+cantidad)}
          />
         </Card.Title>
         <Card.Text>
             {cantidad}
         </Card.Text>
         <Button
             color= 'white'
             label= '-'
             secondColor= 'black'
             callback = {resta}
         />
         <Button
             color= 'white'
             label= '+'
             secondColor= 'black'
             callback = {suma}
         />
      </Card.Body>
    </Card>
  );
}

export default ItemCount