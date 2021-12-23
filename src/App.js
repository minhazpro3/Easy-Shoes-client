import './App.css';
import Home from './Conponent/Home/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddProduct from './Conponent/AddProducts/AddProduct';
import MyProduct from './Conponent/MyProducts/MyProduct';
import Navigation from './Conponent/Navigation/Navigation';
import Orders from './Conponent/Orders/Orders';
import Login from './Conponent/Login/Login';
import PlaceOrder from './Conponent/PlaceOrder/PlaceOrder';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/home" element={<Home />}>

        </Route>
        <Route path="/login" element={<Login />}>

        </Route>
        <Route path="/addProduct" element={<AddProduct />}>

        </Route>
        <Route path="/placeOrder/:id" element={<PlaceOrder />}>

        </Route>
        
        <Route path="/myProduct" element={<MyProduct />}>

        </Route>
        <Route path="/orders" element={<Orders />}>

        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
