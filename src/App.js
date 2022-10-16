import Home from './pages/Home';
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Modal from './components/Modal';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/cart' element={<Modal/>}/>
      </Route>
      <Route path='/products' element={<Products/>}>
        {/* <Route path='/cart' element={<Modal/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
