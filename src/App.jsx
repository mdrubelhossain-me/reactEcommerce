import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/fruits" element={<ShopCategory category="fruits" />}></Route>
          <Route path="/vegetables" element={<ShopCategory category="vegetables" />}></Route>
          <Route path="/product" element={<Product/>}>
              <Route path=":productId"  element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
