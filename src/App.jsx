import './App.css'
import ItemListContainer from './components/ItemListContainer/itemlistcontainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import NavBar from './components/Navbar/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {

  return (
    <> 
 <BrowserRouter>
 <NavBar/>
<Routes>
  <Route path='/' element={<ItemListContainer/>}/>
  <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
  <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
  <Route path='*' element={<h1>404</h1>}/>
</Routes>
</BrowserRouter> 
    </>
  )
}

export default App
