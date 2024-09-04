import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
    return(
           <>
           <p>{producto.description}</p>
           <img src={producto.image} alt="" />
           <p>{producto.price} $</p>
           <ItemCount
            inicial={1}
            stock={20}
            background={'#7295cc'} />
            </>
    )
    }
    export default ItemDetail