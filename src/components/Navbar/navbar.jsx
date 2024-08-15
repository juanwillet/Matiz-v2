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
                />
                                <Button
                color= 'white'
                label= 'Eventos'
                secondColor= 'black'
                />
                                <Button
                color= 'white'
                label= 'Nosotros'
                secondColor= 'black'
                />
                                <Button
                color= 'white'
                label= 'Contacto'
                secondColor= 'black'
                />
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar