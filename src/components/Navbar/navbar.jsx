import CartWidget from "../CartWidget/cartwidget"
import logotipo from "./assets/logotipomatiz.png"
import { Link } from "react-router-dom"
const NavBar = ({color}) =>{

    return (
        <nav style={{display:"flex"}}>
            <Link to={`/`}>
            <img src={logotipo}
            style={{width:80, marginRight:40}}
            />
            </Link> 
            <div>
               <Link to={`/category/women's clothing`}> Dama </Link>
               <Link to={`/category/men's clothing`}> Caballero </Link>
               <Link to={`/category/jewelery`}> Joyeria </Link>
               <Link to={`/category/electronics`}> Electronicos </Link>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar