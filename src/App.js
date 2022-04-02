import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderReview from './Components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/home' element={<Products></Products>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
