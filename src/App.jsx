import './App.css'
import ItemListContainer from './components/ItemListContainer/itemlistcontainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import NavBar from './components/Navbar/navbar'
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { CartContextProvider } from './components/Context/CartContext.jsx'
import Compra from './components/Compra/Compra.jsx'

function App() {

  return (
    <> 
<BrowserRouter>
<CartContextProvider>
 <NavBar/>
 <Routes>
   <Route path='/' element={<ItemListContainer/>}/>
   <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
   <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/compra' element={<Compra/>}/>
   <Route path='*' element={<h1>404</h1>}/>
 </Routes>
</CartContextProvider>
</BrowserRouter> 
    </>
  )
}

export default App
