import Item from "../Item/Item"

function Itemlist ({productos}){
    return(
 <div>
{productos.map (prod=> (
<Item prod={prod} key={prod.id}/>
))
}
</div>
    )
}

export default Itemlist