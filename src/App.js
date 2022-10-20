import Home from './pages/Home';
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { ShopProvider } from './services/ShopContext';
import Purcharse from './pages/Purcharse';
function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/purcharse' element={<Purcharse/>}/>
        </Route>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </ShopProvider>
  );
}

export default App;
