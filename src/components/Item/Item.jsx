import ItemCount from "../ItemCount/ItemCount"
function Item ({prod}) {
    return(
 <div style={{backgroundColor: "blue"}}>
  <p>{prod.title}</p>
  <img src={prod.images} alt="" />
  <p>{prod.price}</p>
  <ItemCount
inicial= {1}
stock= {20}
background= {'#7295cc'}
/>
 </div>
    )
}
export default Item