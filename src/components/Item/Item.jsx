import { Link } from "react-router-dom"

function Item ({prod}) {
    return(
 <div style={{backgroundColor: "white"}}>
  <p>{prod.title}</p>
  <p>{prod.category}</p>
  <img src={prod.image} alt="" />
  <p>{prod.price} $</p>
  <Link to={`/detalle/${prod.id}`}> DETALLE </Link>
 </div>
    )
}
export default Item