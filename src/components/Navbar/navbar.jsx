import Button from "../Button/button"
import CartWidget from "../CartWidget/cartwidget"
import logotipo from "./assets/logotipomatiz.png"
const NavBar = ({color}) =>{
    return (
        <nav style={{display:"flex"}}>
            <img src={logotipo}
            style={{width:80, marginRight:40}}
            />
            <div>
                <Button
                color= 'white'
                label= 'Tienda'
                secondColor= 'black'
                callback = {()=> console.log('tienda')}
                />
                                <Button
                color= 'white'
                label= 'Eventos'
                secondColor= 'black'
                callback = {()=> console.log('eventos')}
                />
                                <Button
                color= 'white'
                label= 'Nosotros'
                secondColor= 'black'
                callback = {()=> console.log('nosotros')}
                />
                                <Button
                color= 'white'
                label= 'Contacto'
                secondColor= 'black'
                callback = {()=> console.log('contacto')}
                />
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar