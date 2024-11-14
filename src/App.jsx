import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Component/Footer/Footer";
import fBanner from './assets/images/hero.jpg'
import vBanner from './assets/images/vBanner2.jpg'
import BackToTopButton from "./Component/BackToTop/BackToTopButton";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/fruits" element={<ShopCategory banner={fBanner} category="fruits" />}></Route>
          <Route path="/vegetables" element={<ShopCategory banner={vBanner} category="vegetables" />}></Route>
          <Route path="/product" element={<Product/>}>
              <Route path=":id"  element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>} ></Route>
        </Routes>
        <Footer/>
        <BackToTopButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
