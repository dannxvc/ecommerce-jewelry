import Home from './pages/Home';
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { ShopProvider } from './services/ShopContext';
function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </ShopProvider>
  );
}

export default App;
