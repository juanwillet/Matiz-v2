import { useState } from "react";
import Button from "../Button/button";

const ItemCount = ({inicial, stock, background}) => {

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

<div
style={{backgroundColor:background}}>
    <div>
        <Button
                        color= 'white'
                        label= '+'
                        secondColor= 'black'
                        callback = {suma}
        />
        <h4>{cantidad}</h4>
        <Button
                        color= 'white'
                        label= '-'
                        secondColor= 'black'
                        callback = {resta}
        />
    </div>
    <div>
        <Button
                                color= 'white'
                                label= 'Agregar al carrito'
                                secondColor= 'black'
                                callback = {()=> console.log('Cantidad agregada: '+cantidad)}
        />
    </div>
</div>

)
}
export default ItemCount