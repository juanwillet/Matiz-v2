function Item ({prod}) {
    //{prod.images.slice(0, 1)}
    return(
 <div style={{backgroundColor: "blue"}}>
  <p>{prod.title}</p>
  <img src={prod.images} alt="" />
  <p>{prod.price}</p>
 </div>
    )
}
export default Item